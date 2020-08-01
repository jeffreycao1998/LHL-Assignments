// const content = require('fs').readFileSync(__dirname + '/index.html', 'utf8');

// const app = require('express')();
// const httpServer = require('http').createServer(app);

// app.get('/', (req, res) => {
//   res.send(content);
// })

// const io = require('socket.io')(httpServer);

// io.on('connect', socket => {
//   console.log('connect');
// });

// io.on('name', data => {
//   console.log(data);
// })

// httpServer.listen(3000, () => {
//   console.log('go to http://localhost:3000');
// });

const io = require('socket.io')(3000);

io.on('connect', socket => {
  console.log(`${socket.id} has connected`);

  socket.on('name', data => {
    console.log(`hi ${data}`);
  })
})