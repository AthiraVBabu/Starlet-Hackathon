// Get the game board and reset button elements
const gameBoard = document.getElementById('game-board');
const resetButton = document.getElementById('reset-button');

// Create the lanterns on the game board
function createLanterns() {
  for (let i = 0; i < 16; i++) {
    const lantern = document.createElement('div');
    lantern.classList.add('lantern');
    lantern.addEventListener('click', toggleLantern);
    gameBoard.appendChild(lantern);
  }
}

// Toggle the lit state of the clicked lantern
function toggleLantern(event) {
  event.target.classList.toggle('lit');
}

// Reset the game board
function resetGameBoard() {
  const lanterns = document.querySelectorAll('.lantern');
  lanterns.forEach(lantern => {
    lantern.classList.remove('lit');
  });
}

// Add event listener to the reset button
resetButton.addEventListener('click', resetGameBoard);

// Create the lanterns on page load
createLanterns();