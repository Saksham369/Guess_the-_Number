'use strict';

let RandomNumber = Math.trunc(Math.random() * 20) + 1;

let highscore = document.querySelector('.highscore').textContent;

document.querySelector('.check').addEventListener('click', function() {
    const check = Number(document.querySelector('.guess').value);

    if (document.querySelector('.score').textContent < 2) {
        document.querySelector('.score').textContent--;
        document.querySelector('.message').textContent = `U Lost
          Try Again🤷‍♂️ `;
    } else if (!check) {
        document.querySelector('.message').textContent = '😢No Number';
    } else if (check < RandomNumber) {
        document.querySelector('.message').textContent = 'TOO LOW!!!😊';
        document.querySelector('.score').textContent--;
    } else if (check > RandomNumber) {
        document.querySelector('.message').textContent = 'TOO HIGH!!!😂';
        document.querySelector('.score').textContent--;
    } else {
        document.querySelector('.message').textContent = 'CORRECT NUMBER!!!🥳🥳';

        document.querySelector('.number').textContent = RandomNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        let score = document.querySelector('.score').textContent;
        if (score > highscore) {
            highscore = document.querySelector('.score').textContent;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    RandomNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
});