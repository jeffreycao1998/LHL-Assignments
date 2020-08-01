

// const socket = io('http://localhost:8000');

// socket.on('connect', () => {
//   socket.emit('name', 'jeff');
// });

document.addEventListener('dblclick', () => {
  document.documentElement.requestFullscreen().catch((err) => {
    console.log(err);
  });
});

const loadPlayerNames = (nameA, nameB) => {
  $('#name-p1').text(nameA);
  $('#name-p2').text(nameB);
};

// const loadPlayerPieces = ({carrier, battleship, cruiser, subarmine, destroyer}) => {
//   const carrierHTML = '<div class=""'

//   $('.all-pieces-p1').html('')
// }

// const loadPlayerSettings = ({
//   shotsPerTurn, 
//   boardSize, 
//   carrier, 
//   battleship, 
//   cruiser, 
//   submarine, 
//   destroyer}) => {
//     socket.emit('')
// };

const settings = {
  shotsPerTurn: 1,
  boardSize: 10,
  carrier: 1,
  battleship: 1,
  cruiser: 1,
  submarine: 1,
  destroyer: 1
}

loadPlayerNames('Jim John', 'Pit Pat');
// loadPlayerSettings(settings)