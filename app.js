class Card {
  // properties
  title;

  // image;

  link;
  // constructor
  constructor(title, link) {
    this.title = title;
    // this.image = image
    this.link = link;
  }
  // methods
}
blackjackGame = new Card(
  'Blackjack', 
  'https://grassfinn.github.io/Blackjack-Game/');

AdventureTimeParallax = new Card(
  'Adventure Time Parallax Site',
  'https://grassfinn.github.io/Adventure-Time-Parallax-Site/'
);

unitConversion = new Card(
  'Unit Conversion',
  'https://grassfinn.github.io/Unit-Conversion/'
);

CounterApp = new Card(
  'Passenger Counter',
  'https://grassfinn.github.io/passenger-counter-app/'
);

passwordGenerator = new Card(
  'Password Generator',
  'https://grassfinn.github.io/Password-Generator/'
);

worldleWInput = new Card

pomodoroTimer = new Card

let cardList = [blackjackGame, AdventureTimeParallax, passwordGenerator, unitConversion, CounterApp]

console.log(cardList)

let portfolioEl = document.querySelector('#portfolio')


cardList.forEach((item, index) => {
    let title = item.title
    let link = item.link
    // create an article tag
    let article = document.createElement('article')
    // set the id = to the index + 1
    article.setAttribute('id', 'card' + '-' + (index + 1))
    article.classList.add('portfolio-item')
    // append the article to the portfolio section
    portfolioEl.append(article)

    // target the cards by their article id
    let cardArticle = document.getElementById('card-' + (index + 1))
    // create and h2
    let h3 = document.createElement('h3')
    // append the h2 within the article
    cardArticle.append(h3)
    // set the text of the h2 to the title
    h3.textContent = title
    // create an a tag
    let liveSite = document.createElement('a')
    let gitHub = document.createElement('a')
    // append the a tag within the article with the link and text of github
    cardArticle.append(liveSite)
    liveSite.classList.add('live-site-link')
    liveSite.textContent = 'Live Site'
    liveSite.setAttribute('href', link)
    liveSite.setAttribute('target', '_blank')
    cardArticle.append(gitHub)
    gitHub.textContent = 'GitHub'
    gitHub.setAttribute('href', '#')
    gitHub.setAttribute('target', '_blank')
})