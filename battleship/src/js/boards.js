const letters = [
  'A', 'B', 'C', 'D', 'E', 
  'F', 'G', 'H', 'I', 'J'
];

const createRows = (player, boardSize) => {
  let rowsHTML = '';

  for (let y = 1; y <= boardSize; y++) {
    rowsHTML += `<div class="board-row p${player}-board-row-${y}"></div>`;
  }

  $(`.board-p${player}`).html(rowsHTML);
};

const createColumns = (player, boardSize) => {
  const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  for (let y = 1; y <= boardSize; y++) {
    let columnsHTML = '';

    for (let x = 1; x <= boardSize; x++) {
      columnsHTML += `<div class="board-cell p${player}-${alphabets[x - 1]}${y}"></div>`
    }

    $(`.p${player}-board-row-${y}`).html(columnsHTML);
  }
};

const createCoordinates = (player, boardSize) => {
  const gridHTML = $(`.board-p${player}`).html();
  let rowHTML = '';
  let columnHTML = '';

  const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  
  for (let y = 1; y <= boardSize; y++) {
    rowHTML += `<div class="identifier">${y}</div>`;
  }
  for (let x = 1; x <= boardSize; x++) {
    columnHTML += `<div class="identifier">${alphabets[x - 1]}</div>`;
  }

  const completedHTML = `<div class="identifier-row">${rowHTML}</div><div class="identifier-column">${columnHTML}</div>`;

  $(`.board-p${player}`).html(completedHTML + gridHTML);
};

const createBoard = ({player, boardSize}) => {
  createRows(player, boardSize);
  createColumns(player, boardSize);
  createCoordinates(player, boardSize);
};

const addBoardHoverEffects = ({player, shipsNotPlaced, currentShip}) => {
  
  $(`.board-p${player}`).children().children('.board-cell').mouseover((event) => {
    const target = $(event.target);
    const cell = target.attr('class').split(' ')[1];   // A1, A2, A3.... J10
    const board = cell.charAt(1);
    const column = cell.charAt(3);   // A, B, C... J
    const row = cell.slice(4).toString();      // 1, 2, 3... 10

    if (player !== Number(board)) {
      return;
    }
    if (shipsNotPlaced[currentShip - 1] === 'carrier') {
      const columnIndex = letters.indexOf(column);
      for (let i = 0; i < 5; i++) {
        $(`.p${board}-${letters[columnIndex + i]}${row}`).css('background-color', 'rgb(68, 68, 172)');
      }
    }
    $(`.p${board}-${column}${row}`).css('background-color', 'rgb(68, 68, 172)');    // darkblue when hovered
  });

  $(`.board-p${player}`).children().children('.board-cell').mouseleave((event) => {
    const target = $(event.target);
    const cell = target.attr('class').split(' ')[1];   // A1, A2, A3.... J10
    const board = cell.charAt(1);
    const column = cell.charAt(3);   // A, B, C... J
    const row = cell.slice(4).toString();      // 1, 2, 3... 10

    if (player !== Number(board)) {
      console.log('wrong board');
    }
    if (shipsNotPlaced[currentShip - 1] === 'carrier') {
      const columnIndex = letters.indexOf(column);
      for (let i = 0; i < 5; i++) {
        $(`.p${board}-${letters[columnIndex + i]}${row}`).css('background-color', 'rgb(235, 235, 255)');
      }
    }
    $(`.p${board}-${column}${row}`).css('background-color', 'rgb(235, 235, 255)');    // lightblue when not hovered
  });

  $(`.board-p${player}`).children().children('.board-cell').on('click', (event) => {
    const target = $(event.target);
    const clickedCell = target.attr('class').split(' ').slice(1);
    socket.emit('click cell', clickedCell);
  })
}

const placePiece = ({}) => {

}