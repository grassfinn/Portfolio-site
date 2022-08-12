import cardData from './modules/data.js';
import Card from './modules/card.js';

const portfolioEl = document.querySelector('#portfolio-container');
const darkMode = document.getElementById('dark-mode');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

const resume = document.getElementById('resume');

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
// darkMode.addEventListener('click', () => {
//   console.log('clicked');
//   document.querySelector('#portfolio').classList.toggle('dark-mode');
// });

render();

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});
