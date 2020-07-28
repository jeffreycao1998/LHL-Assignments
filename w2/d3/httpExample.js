const net = require('net');
const conn = net.createConnection({
  host: 'example.edu',
  port: 80
});
conn.setEncoding('UTF8');

conn.on('connect', () => {
  console.log('Connected to server!');

  conn.write(`GET / HTTP/1.1\r\n`);
  conn.write(`HOST: example.edu\r\n`);
  conn.write(`\r\n`);
});

conn.on('data', (data) => {
  console.log(data);
  conn.end();
})