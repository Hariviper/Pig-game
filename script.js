'use strict';
const playerOne = document.querySelector('#name--0');
const playertwo = document.querySelector('#name--1');
const playerOneScore = document.querySelector('#score--0');
const playerTwoScore = document.querySelector('#score--1');

const playerOnesCurrentScore = document.querySelector('#current--0');
const playerTwoCurrentScore = document.querySelector('#current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

const finalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isplaying = true;
playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
dice.classList.add('hidden');

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
};

let winner = document.querySelector(`.player--${activePlayer}`);

btnRoll.addEventListener('click', function () {
  //generate random dice number
  if (isplaying) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    //display dice number
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

    //show the number in player
    if (diceNumber != 1) {
      currentScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      // playerOnesCurrentScore.textContent = currentScore;
    } else {
      //switch playe
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isplaying) {
    // add current score to final score
    finalScores[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent =
      finalScores[activePlayer];

    //declare a winner
    if (finalScores[activePlayer] >= 20) {
      isplaying = false;
      winner.classList.remove('player--active');
      winner.classList.add('player--winner');
    } else {
      //switch player
      switchPlayer();
    }
  }
});
