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
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
let diceImage = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;

diceImage.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceImage.classList.remove('hidden');
  diceImage.src = `dice-${dice}.png`;
  console.log(dice);
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
