const io = require('socket.io')(8000);

const setInitialData = (socket, name, player) => {
  socket.data = {
    player,
    name,
    shipsNotPlaced: ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer'],
    shipOrientation: 'horizontal',
    boardSize: 10,
    shotsPerTurn: 1,
  }
  socket.data = {
    ...socket.data,
    currentShip: 0,
  }
}

const players = [];

io.on('connect', socket => {

  socket.on('name', name => {
    if (players.length === 0) {
      setInitialData(socket, name, 1);
      players.push(socket);
      io.emit('player joined', socket.data);
    } else if (players.length === 1) {
      setInitialData(socket, name, 2);
      players.push(socket);
      io.emit('player joined', socket.data);
      io.emit('player joined', players[0].data);
    }
  });

  socket.on('place ship', ({player, coordinate, ship}) => {

  });

  socket.on('disconnect', () => {
    const i = players.indexOf(socket);
    if (i && i.data) {
      players.splice(i, 1);
      socket.data.name = undefined;
      io.emit('player disconnected', socket.data);
    }
  });

});


const unlockButtons = (currentUser) => {

}