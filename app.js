import cardData from "./modules/data.js"
import Card from "./modules/card.js"

const portfolioEl = document.querySelector('#portfolio-container')
// new cards
const blackjack = new Card(cardData.blackjackGame)
const parallax = new Card(cardData.parallax)
const passwordGenerator = new Card(cardData.passwordGenerator)
const pomodoroTimer = new Card(cardData.pomodoroTimer)
const unitConversion = new Card(cardData.unitConversion)
const worlde = new Card(cardData.wordle)



const darkMode = document.getElementById('dark-mode')

darkMode.addEventListener('click', () => {
  document.querySelector('#portfolio').classList.toggle('dark-mode')
})

function render(){
    portfolioEl.innerHTML = blackjack.getCardHtml()
    portfolioEl.innerHTML += parallax.getCardHtml()
    portfolioEl.innerHTML += passwordGenerator.getCardHtml()
    portfolioEl.innerHTML += pomodoroTimer.getCardHtml()
    portfolioEl.innerHTML += unitConversion.getCardHtml()
    portfolioEl.innerHTML += worlde.getCardHtml()
  }
render()