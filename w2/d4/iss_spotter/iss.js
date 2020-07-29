const request = require('request');

const fetchMyIP = (callback) => {
  request('https://api.ipify.org/?format=json', (err, res, body) => {
    if (err) return callback(err ,null);
      
    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null);
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://ipvigilante.com/json/${ip}`, (err, res, body) => {
    if (err) return callback(err, null);

    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching coordinates for IP. Response: ${body}`;
      return callback(Error(msg), null);
    }
    
    body = JSON.parse(body);
    const lat = body.data.latitude;
    const lon = body.data.longitude;
    callback(null, {lat, lon});
  });
};

const fetchISSFlyOverTimes = (coords, callback) => {
  const lat = coords.lat;
  const lon = coords.lon;
  request(`http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}`, (err, res, body) => {
    if (err) return callback(err, null);

    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching coordinates for IP. Response: ${body}`;
      return callback(Error(msg), null);
    }

    body = JSON.parse(body);
    callback(null, body.response);
  });
};

const nextISSTimesForMyLocation = (callback) => {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }
    
    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        return callback(error, null);
      }

      fetchISSFlyOverTimes(coords, (error, FlyOverTimes) => {
        if (error) {
          return callback(error, null);
        }

        callback(null, FlyOverTimes);
      });
    });
  });
};

module.exports = {
  nextISSTimesForMyLocation,
};