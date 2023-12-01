'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = (document.querySelector('.score').textContent = 20);
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const inputNumber = document
  .querySelector('.guess')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    //No input
    if (!guess) {
      displayMessage('No number!');

      // When player Wins
    } else if (guess === secretNumber) {
      displayMessage('Correct number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      // When guess is bad
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  });

const againButton = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    console.log(secretNumber);
  });
