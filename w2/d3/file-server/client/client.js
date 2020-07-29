const net = require('net');
const fs = require('fs')

const conn = net.createConnection({
  port: 3000,
});

conn.setEncoding('utf8');

conn.on('data', data => {
  const jsonData = JSON.parse(data);
  const fileName = jsonData.filename
  const fileData = jsonData.data;
  fs.writeFile(fileName, fileData, (err) => {
    if (err) {
      console.log('file is corrupt!');
    } else {
      console.log(`successfully copied file ${fileName}!`)
    }
  });
});

const requestFile = (filename) => {
  conn.write(JSON.stringify({
    method: 'reqFile',
    filename
  }));
}

const filename = process.argv[2];

requestFile(filename);