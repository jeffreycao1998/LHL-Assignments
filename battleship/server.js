const io = require('socket.io')(8000);

const players = [];

io.on('connect', socket => {

  socket.on('name', data => {
    if (players.length === 0) {
      socket.data = {
        player: 1,
        name: data
      }
      players.push(socket);
    } else if (players.length === 1) {
      socket.data = {
        player: 2,
        name: data
      }
      players.push(socket);
    }
    io.emit('player joined', socket.data);
  });

  socket.on('disconnect', () => {
    const i = players.indexOf(socket);
    if (i) {
      players.splice(i, 1);
      socket.data.name = undefined;
      io.emit('player disconnected', socket.data);
    }
  });

});


const unlockButtons = (currentUser) => {

}