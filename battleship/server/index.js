const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer);

io.on('connection', socket => {
  console.log(`connected: ${socket.id}`);
});

httpServer.listen(3001, () => {
  console.log('Server connected to port 3001')
})