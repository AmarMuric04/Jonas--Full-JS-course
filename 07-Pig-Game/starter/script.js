'use strict';

// hold.addEventListener('click', holdButton);
// btnRoll.addEventListener('click', rollDice);
// let arrayOfRolledDie = [];
// function rollDice() {
//   let rolledDice = Math.trunc(Math.random() * 6) + 1;
//   diceImage.src = `dice-${rolledDice}.png`;
//   arrayOfRolledDie.push(rolledDice);

//   playerOne(rolledDice);

//   return rolledDice;
// }

// function playerOne(rolledDice) {
//   let currentScore = 0;
//   arrayOfRolledDie.forEach(e => {
//     currentScore += e;
//     currScorePlayerOne.textContent = currentScore;
//   });
//   return currentScore;
// }
// function playerTwo(rolledDice) {
//   let currentScore = 0;
//   arrayOfRolledDie.forEach(e => {
//     currentScore += e;
//     currScorePlayerOne.textContent = currentScore;
//   });
//   return currentScore;
// }

// function holdButton() {
//   scorePlayerOne.textContent += currScorePlayerOne
// }
let scores = [0, 0];
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let diceImage = document.querySelector('.dice');
let activePlayer = 0;
let currentScore = 0;
score0El.textContent = 0;
score1El.textContent = 0;

diceImage.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceImage.classList.remove('hidden');
  diceImage.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});
btnHold.addEventListener('click', function () {
  document.getElementById(`score--${activePlayer}`).textContent = scores[
    activePlayer
  ] += currentScore;
  if (scores[0] >= 100 || scores[1] >= 100) {
    document.getElementById(`score--${activePlayer}`).textContent = 'You win';
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');
    diceImage.classList.add('hidden');
    current0El.textContent = 0;
    current1El.textContent = 0;
  } else {
    if (currentScore !== 0) {
      switchPlayer();
    } else {
      alert('You must roll at least once');
    }
  }
});

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnNew.addEventListener('click', function () {
  activePlayer = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
  diceImage.classList.add('hidden');
  scores = [0, 0];
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
});
