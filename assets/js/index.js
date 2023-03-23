import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

let ocean = document.createElement('div')

ocean.innerHTML = "<div class=grid-container></div>"

let parent = document = document.querySelector('body');
parent.append(ocean);
