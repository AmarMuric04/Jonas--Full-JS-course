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

//Made the again button interactive, added a highscore and connected it to localStorage.
document.querySelector('.highscore').textContent =
  localStorage.getItem('highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
// let highscore = 0;

document.querySelector('.guess').addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    playGame();
  }
});
document.querySelector('.again').addEventListener('click', playAgain);
document.querySelector('.check').addEventListener('click', playGame);

function playGame() {
  const guess = Number(document.querySelector('.guess').value);
  if (guess > 20 || guess <= 0) {
    score -= 2;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent =
      'Guess a number between 1-20!';
  } else if (guess === secretNumber) {
    score += 2;
    updateContent(
      `${score - 2} + 2`,
      'correct number!',
      secretNumber,
      '30rem',
      '#60b347'
    );

    highScore();
    // if (score > highscore) {
    //   highscore = score;
    //   document.querySelector('.highscore').textContent = highscore;
    // }
  } else if (guess !== secretNumber) {
    if (score >= 1) {
      updateContent(
        `${score}`,
        guess > secretNumber ? 'Too high!' : 'Too low',
        '?',
        '15rem',
        '#222'
      );
      score--;
    } else {
      updateContent(0, 'Game Over', '?', '15rem', '#222');
      secretNumber = Math.random();
    }
  }
}
function playAgain() {
  score = 20;
  updateContent(score, 'Start guessing...', '?', '15rem', '#222');
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}
/*We take the score that shows when the user correctly guesses a number,
then we push it into an array, we will take the first score ever as the highest
current score, using that score we can get every other new highscore using
if currenthighscore < currentscore, then the currentscore becomes the new highscore.*/
let highscore = [];
function highScore() {
  highscore.push(score);
  for (let i = 0; i < highscore.length; i++) {
    let high = highscore[0];
    if (high < highscore[i]) {
      high = highscore[i];
    }
    document.querySelector('.highscore').textContent = high;
    localStorage.setItem('highscore', high);
  }
}
const updateContent = function (
  scoreText,
  messageText,
  numberText,
  numberWidth,
  bodyColor
) {
  document.querySelector('.score').textContent = scoreText;
  document.querySelector('.message').textContent = messageText;
  document.querySelector('.number').textContent = numberText;
  document.querySelector('.number').style.width = numberWidth;
  document.body.style.backgroundColor = bodyColor;
};
