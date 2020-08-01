const net = require('net');

const conn = net.createConnection({
  port: 8000,
});

conn.on('connect', () => {
  conn.write('name: Jeff');
});

conn.on('data', data => {
  console.log('Server says: ', data);
});

conn.setEncoding('utf8');