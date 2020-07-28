const net = require('net');

// Establishes connection with game server
const connect = () => {
  const conn = net.createConnection({
    host: '192.168.2.27',
    port: 50541,
  });
  conn.on('data', data => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  return conn;
};

console.log('Connecting...');
connect();
