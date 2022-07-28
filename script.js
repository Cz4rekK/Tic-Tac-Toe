'use strict';

const cell1 = document.querySelector('.cell1');
const cell2 = document.querySelector('.cell2');
const cell3 = document.querySelector('.cell3');
const cell4 = document.querySelector('.cell4');
const cell5 = document.querySelector('.cell5');
const cell6 = document.querySelector('.cell6');
const cell7 = document.querySelector('.cell7');
const cell8 = document.querySelector('.cell8');
const cell9 = document.querySelector('.cell9');
const messageBox = document.querySelector('.message-box');
const messageBoxP = document.querySelector('.message-box p');
const closeBtn = document.querySelector('.close-message-box');
const againBtn = document.querySelector('.again');

const playerX = 'X';
const playerO = 'O';
let currentPlayer = playerX;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinningCombination = function () {
  if (
    (cell1.classList.contains('cross') || cell1.classList.contains('circle')) &&
    (cell2.classList.contains('cross') || cell2.classList.contains('circle')) &&
    (cell3.classList.contains('cross') || cell3.classList.contains('circle')) &&
    (cell4.classList.contains('cross') || cell4.classList.contains('circle')) &&
    (cell5.classList.contains('cross') || cell5.classList.contains('circle')) &&
    (cell6.classList.contains('cross') || cell6.classList.contains('circle')) &&
    (cell7.classList.contains('cross') || cell7.classList.contains('circle')) &&
    (cell8.classList.contains('cross') || cell8.classList.contains('circle')) &&
    (cell9.classList.contains('cross') || cell9.classList.contains('circle'))
  ) {
    console.log('Draw');
    messageBox.classList.remove('hidden');
    messageBoxP.textContent = 'Draw!';
  }
  if (
    (cell1.classList.contains('cross') &&
      cell2.classList.contains('cross') &&
      cell3.classList.contains('cross')) ||
    (cell4.classList.contains('cross') &&
      cell5.classList.contains('cross') &&
      cell6.classList.contains('cross')) ||
    (cell7.classList.contains('cross') &&
      cell8.classList.contains('cross') &&
      cell9.classList.contains('cross')) ||
    (cell1.classList.contains('cross') &&
      cell4.classList.contains('cross') &&
      cell7.classList.contains('cross')) ||
    (cell2.classList.contains('cross') &&
      cell5.classList.contains('cross') &&
      cell8.classList.contains('cross')) ||
    (cell3.classList.contains('cross') &&
      cell6.classList.contains('cross') &&
      cell9.classList.contains('cross')) ||
    (cell1.classList.contains('cross') &&
      cell5.classList.contains('cross') &&
      cell9.classList.contains('cross')) ||
    (cell3.classList.contains('cross') &&
      cell5.classList.contains('cross') &&
      cell7.classList.contains('cross'))
  ) {
    console.log('Cross wins');
    messageBox.classList.remove('hidden');
    messageBoxP.textContent = 'Cross wins!';
  }
  if (
    (cell1.classList.contains('circle') &&
      cell2.classList.contains('circle') &&
      cell3.classList.contains('circle')) ||
    (cell4.classList.contains('circle') &&
      cell5.classList.contains('circle') &&
      cell6.classList.contains('circle')) ||
    (cell7.classList.contains('circle') &&
      cell8.classList.contains('circle') &&
      cell9.classList.contains('circle')) ||
    (cell1.classList.contains('circle') &&
      cell4.classList.contains('circle') &&
      cell7.classList.contains('circle')) ||
    (cell2.classList.contains('circle') &&
      cell5.classList.contains('circle') &&
      cell8.classList.contains('circle')) ||
    (cell3.classList.contains('circle') &&
      cell6.classList.contains('circle') &&
      cell9.classList.contains('circle')) ||
    (cell1.classList.contains('circle') &&
      cell5.classList.contains('circle') &&
      cell9.classList.contains('circle')) ||
    (cell3.classList.contains('circle') &&
      cell5.classList.contains('circle') &&
      cell7.classList.contains('circle'))
  ) {
    console.log('Circle wins');
    messageBox.classList.remove('hidden');
    messageBoxP.textContent = 'Circle wins!';
  }
};

const switchPlayer = function () {
  if (currentPlayer === playerX) {
    currentPlayer = playerO;
  } else {
    currentPlayer = playerX;
  }
};

cell1.addEventListener('click', function () {
  if (
    currentPlayer === playerX &&
    !cell1.classList.contains('circle') &&
    !cell1.classList.contains('cross')
  ) {
    cell1.classList.add('cross');
    switchPlayer();
    checkWinningCombination();
  } else if (
    !cell1.classList.contains('circle') &&
    !cell1.classList.contains('cross')
  ) {
    cell1.classList.add('circle');
    switchPlayer();
    checkWinningCombination();
  }
});

cell2.addEventListener('click', function () {
  if (
    currentPlayer === playerX &&
    !cell2.classList.contains('circle') &&
    !cell2.classList.contains('cross')
  ) {
    cell2.classList.add('cross');
    switchPlayer();
    checkWinningCombination();
  } else if (
    !cell2.classList.contains('circle') &&
    !cell2.classList.contains('cross')
  ) {
    cell2.classList.add('circle');
    switchPlayer();
    checkWinningCombination();
  }
});

cell3.addEventListener('click', function () {
  if (
    currentPlayer === playerX &&
    !cell3.classList.contains('circle') &&
    !cell3.classList.contains('cross')
  ) {
    cell3.classList.add('cross');
    switchPlayer();
    checkWinningCombination();
  } else if (
    !cell3.classList.contains('circle') &&
    !cell3.classList.contains('cross')
  ) {
    cell3.classList.add('circle');
    switchPlayer();
    checkWinningCombination();
  }
});

cell4.addEventListener('click', function () {
  if (
    currentPlayer === playerX &&
    !cell4.classList.contains('circle') &&
    !cell4.classList.contains('cross')
  ) {
    cell4.classList.add('cross');
    switchPlayer();
    checkWinningCombination();
  } else if (
    !cell4.classList.contains('circle') &&
    !cell4.classList.contains('cross')
  ) {
    cell4.classList.add('circle');
    switchPlayer();
    checkWinningCombination();
  }
});

cell5.addEventListener('click', function () {
  if (
    currentPlayer === playerX &&
    !cell5.classList.contains('circle') &&
    !cell5.classList.contains('cross')
  ) {
    cell5.classList.add('cross');
    switchPlayer();
    checkWinningCombination();
  } else if (
    !cell5.classList.contains('circle') &&
    !cell5.classList.contains('cross')
  ) {
    cell5.classList.add('circle');
    switchPlayer();
    checkWinningCombination();
  }
});

cell6.addEventListener('click', function () {
  if (
    currentPlayer === playerX &&
    !cell6.classList.contains('circle') &&
    !cell6.classList.contains('cross')
  ) {
    cell6.classList.add('cross');
    switchPlayer();
    checkWinningCombination();
  } else if (
    !cell6.classList.contains('circle') &&
    !cell6.classList.contains('cross')
  ) {
    cell6.classList.add('circle');
    switchPlayer();
    checkWinningCombination();
  }
});

cell7.addEventListener('click', function () {
  if (
    currentPlayer === playerX &&
    !cell7.classList.contains('circle') &&
    !cell7.classList.contains('cross')
  ) {
    cell7.classList.add('cross');
    switchPlayer();
    checkWinningCombination();
  } else if (
    !cell7.classList.contains('circle') &&
    !cell7.classList.contains('cross')
  ) {
    cell7.classList.add('circle');
    switchPlayer();
    checkWinningCombination();
  }
});

cell8.addEventListener('click', function () {
  if (
    currentPlayer === playerX &&
    !cell8.classList.contains('circle') &&
    !cell8.classList.contains('cross')
  ) {
    cell8.classList.add('cross');
    switchPlayer();
    checkWinningCombination();
  } else if (
    !cell8.classList.contains('circle') &&
    !cell8.classList.contains('cross')
  ) {
    cell8.classList.add('circle');
    switchPlayer();
    checkWinningCombination();
  }
});

cell9.addEventListener('click', function () {
  if (
    currentPlayer === playerX &&
    !cell9.classList.contains('circle') &&
    !cell9.classList.contains('cross')
  ) {
    cell9.classList.add('cross');
    switchPlayer();
    checkWinningCombination();
  } else if (
    !cell9.classList.contains('circle') &&
    !cell9.classList.contains('cross')
  ) {
    cell9.classList.add('circle');
    switchPlayer();
    checkWinningCombination();
  }
});

closeBtn.addEventListener('click', function () {
  messageBox.classList.add('hidden');
  cell1.classList.remove('cross');
  cell1.classList.remove('circle');
  cell2.classList.remove('cross');
  cell2.classList.remove('circle');
  cell3.classList.remove('cross');
  cell3.classList.remove('circle');
  cell4.classList.remove('cross');
  cell4.classList.remove('circle');
  cell5.classList.remove('cross');
  cell5.classList.remove('circle');
  cell6.classList.remove('cross');
  cell6.classList.remove('circle');
  cell7.classList.remove('cross');
  cell7.classList.remove('circle');
  cell8.classList.remove('cross');
  cell8.classList.remove('circle');
  cell9.classList.remove('cross');
  cell9.classList.remove('circle');
});

againBtn.addEventListener('click', function () {
  cell1.classList.remove('cross');
  cell1.classList.remove('circle');
  cell2.classList.remove('cross');
  cell2.classList.remove('circle');
  cell3.classList.remove('cross');
  cell3.classList.remove('circle');
  cell4.classList.remove('cross');
  cell4.classList.remove('circle');
  cell5.classList.remove('cross');
  cell5.classList.remove('circle');
  cell6.classList.remove('cross');
  cell6.classList.remove('circle');
  cell7.classList.remove('cross');
  cell7.classList.remove('circle');
  cell8.classList.remove('cross');
  cell8.classList.remove('circle');
  cell9.classList.remove('cross');
  cell9.classList.remove('circle');
});
