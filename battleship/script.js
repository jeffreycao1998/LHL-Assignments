const socket = io('http://localhost:8000');

// Client Event Handlers
$('#btn-friend').on('click', () => {
  const inputAlias = $('#input-alias').val();
  socket.emit('name', inputAlias);

  makeFullscreen()
});

$('#btn-computer').on('click',() => {
  makeFullscreen();
});

// Server Event Handlers
socket.on('player joined', data => {
  updatePlayerName(data);
  createBoard(data);
});

socket.on('player disconnected', data => {
  updatePlayerName(data);
});

socket.on