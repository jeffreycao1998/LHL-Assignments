const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/images/search?api_key=cb9e83dc-d200-49b8-bc80-1f5739ff6fcb&breed_ids=${breedName}`

  request(url, (err, __, body) => {
    if (err) {
      callback('Breed Not Found', null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback('Breed Not Found', null);
      } else {
        const description = data[0].breeds[0].description;
        callback(null, description);
      }
    }
  });
};

module.exports = fetchBreedDescription;