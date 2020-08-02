const fullscreen = () => {
  $('#game-page').css("display", "flex");
  document.documentElement.requestFullscreen().catch((err) => {
    console.log(err);
  });
}

$('#btn-friend').on('click', () => {
  const inputAlias = $('#input-alias').val();
  socket.emit('name', inputAlias);

  fullscreen()
});

$('#btn-computer').on('click',() => {
  fullscreen();
});
