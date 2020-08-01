const net = require('net');
const handleData = require('./src/data');

const server = net.createServer();

server.on('connection', client => {
  
  client.data = {};

  client.on('data', data => {
    handleData(client, data);
    console.log(client.data);
  })

  client.setEncoding('utf8');
})

server.listen(8000, () => {
  console.log('Server listening on port 3000!');
});