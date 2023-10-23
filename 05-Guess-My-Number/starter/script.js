'use strict';

// function getVal() {
//   const val = document.querySelector('input').value;
//   return val;
// }
// let computerNumber = Math.floor(Math.random() * (20 - 1) + 1);
// console.log(computerNumber);
// function guessTheNumber() {
//   let value = getVal();

//   if (Number(value) == computerNumber) {
//     document.querySelector('.number').textContent = `${computerNumber}`;
//   } else {
//     console.log('loss');
//   }
// }
// document.querySelector('.check').addEventListener('click', guessTheNumber);

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 2;
// console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    console.log('No number');
  }
});
