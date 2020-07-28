const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];

request(url, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  } else {
    fs.writeFile(filePath, body, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log(`Downloaded and saved ${body.length * 4} bytes to ${filePath}`)
    });
  }
});