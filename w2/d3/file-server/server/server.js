const net = require('net');
const fs = require('fs')

const server = net.createServer();

server.on('connection', client => {
  console.log('New client connected!');

  client.setEncoding('utf8');
  client.on('data', data => {
    data = JSON.parse(data);
    if (data.method === 'reqFile') {
      const filename = data.filename;

      fs.readFile(`./${filename}`, (err, data) => {
        if (err) {
          client.write(`${err}`);
        } else {
          client.write(`File Contents: ${data}`)
        }
      })
    }
  });
})

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});