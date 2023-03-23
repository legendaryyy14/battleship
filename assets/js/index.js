import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

//OUR CODE
function makeBoard(gameBoard) {
    let boardDiv = document.createElement('div');
    boardDiv.id = 'board';

    gameBoard.forEach(row => {
        row.forEach(cell => {
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            boardDiv.append(cellDiv);
        })
    })

    document.body.append(boardDiv);
}

function hit() {
    let board = document.getElementById('board');
    board.addEventListener('click', (e) => {
        i
    })
}

makeBoard(board.grid);
