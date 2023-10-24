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
  diceImage.src = `dice-${dice}-modified.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});
let timeoutId;
btnHold.addEventListener('click', function () {
  document.getElementById(`score--${activePlayer}`).textContent = scores[
    activePlayer
  ] += currentScore;
  if (scores[0] >= 100 || scores[1] >= 100) {
    document.getElementById(`score--${activePlayer}`).textContent = 'You win';
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');
    diceImage.classList.add('hidden');
    document.getElementById(`score--${activePlayer}`).style.color = ' black';
    document.getElementById(`name--${activePlayer}`).style.color = ' black';
    document.getElementById(`current--${activePlayer}`).textContent = '♕';
    document.getElementById(`current--${activePlayer}`).style.color =
      ' #d19d43';
    document.querySelector(`.current-label--${activePlayer}`).textContent = '';
    document.querySelector(`.current--${activePlayer}`).style.backgroundColor =
      '#222';
  } else {
    if (currentScore !== 0) {
      switchPlayer();
    } else {
      timeout();
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
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
  diceImage.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  document.querySelector(`.current-label--${activePlayer}`).textContent =
    'CURRENT';
  document.querySelector(`.current--${activePlayer}`).style.backgroundColor =
    'black';
  document.getElementById(`score--${activePlayer}`).textContent = '0';
  document.getElementById(`current--${activePlayer}`).textContent = '0';
  document.getElementById(`current--${activePlayer}`).style.color = 'white';
  activePlayer = 0;
});
function timeout() {
  clearTimeout(timeoutId);
  document.querySelector('.alert').classList.remove('hidden');
  document.querySelector('.alert1060').classList.remove('hidden');
  timeoutId = setTimeout(function () {
    document.querySelector('.alert').classList.add('hidden');
    document.querySelector('.alert1060').classList.add('hidden');
  }, 1000);
}
