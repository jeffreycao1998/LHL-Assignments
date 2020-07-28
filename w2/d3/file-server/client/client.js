const net = require('net');
const { get } = require('http');

const conn = net.createConnection({
  port: 3000,
});

conn.on('data', data => {
  console.log(data);
});

const requestFile = (filename) => {
  conn.write(JSON.stringify({
    method: 'reqFile',
    filename
  }));
}

requestFile('file1');

conn.setEncoding('utf8');