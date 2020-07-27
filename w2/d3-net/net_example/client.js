const net = require('net');

const conn = net.createConnection({
  host: '0.tcp.ngrok.io',
  port: 16556,
});

conn.on('data', data => {
  console.log('Server says: ', data);
});

conn.on('connect', () => {
  conn.write('Hello from client!');
});

conn.setEncoding('utf8');