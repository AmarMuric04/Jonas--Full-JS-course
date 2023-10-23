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
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  if (!guess) {
    console.log('No number');
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number!';
    document.querySelector('.number').style.width = '30rem';
    document.body.style.backgroundColor = '#60b347';
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too high!';
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too low!';
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
    }
  }
});
