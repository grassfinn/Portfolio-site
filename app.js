import cardData from './modules/data.js';
import Card from './modules/card.js';

const portfolioEl = document.querySelector('#portfolio-container');

const darkMode = document.getElementById('dark-mode');

function render() {
  const portfolioArr = [
    'blackjackGame',
    'parallax',
    'passwordGenerator',
    'pomodoroTimer',
    'unitConversion',
    'wordle',
    'colorScheme',
    'forecast',
  ];
  portfolioArr.forEach((item) => {
    const itemArr = [];
    itemArr.push(new Card(cardData[item]));
    itemArr.forEach((card) => {
      portfolioEl.innerHTML += card.getCardHtml();
    });
  });
}
darkMode.addEventListener('click', () => {
  document.querySelector('#portfolio').classList.toggle('dark-mode');
});

render();
