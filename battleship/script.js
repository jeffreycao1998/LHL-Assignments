const socket = io('http://localhost:8000');

const updatePlayerName = ({player, name}) => {
  if (!name) {
    $(`#name-p${player}`).text('Waiting for player...');
  }
  $(`#name-p${player}`).text(name);
};

const fullscreen = () => {
  $('#game-page').css("display", "flex");
  document.documentElement.requestFullscreen().catch((err) => {
    console.log(err);
  });
}

// Client Event Handlers
$('#btn-friend').on('click', () => {
  const inputAlias = $('#input-alias').val();
  socket.emit('name', inputAlias);

  fullscreen()
});

$('#btn-computer').on('click',() => {
  fullscreen();
});

// Server Event Handlers
socket.on('player joined', data => {
  updatePlayerName(data);
});

socket.on('player disconnected', data => {
  updatePlayerName(data);
});

socket.on