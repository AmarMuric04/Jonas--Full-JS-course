// 'use strict';

// const btnRoll = document.querySelector('.btn--roll');
// let diceImage = document.querySelector('.dice');
// let currScorePlayerOne = document.getElementById('current--0');
// let scorePlayerOne = document.getElementById('score--0');
// let hold = document.querySelector('.btn--hold');

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
//   scorePlayerOne.textContent += currScorePlayerOne.textContent;
// }
