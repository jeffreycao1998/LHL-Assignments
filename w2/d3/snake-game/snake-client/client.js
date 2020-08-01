const net = require('net');
const { IP, PORT } = require('./constants');

// Establishes connection with game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: JJC");
  });

  conn.on('data', data => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  return conn;
};

module.exports = {
  connect,
}