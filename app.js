class Card {
  // properties
  title;

  link;

  image;
  // constructor
  constructor(title, link, image) {
    this.title = title;
    this.link = link;
    this.image = image
  }
  // methods
}
blackjackGame = new Card(
  'Blackjack',
  'https://grassfinn.github.io/Blackjack-Game/',
  './thumbnails/blackjack.PNG'
);

AdventureTimeParallax = new Card(
  'Adventure Time Parallax Site',
  'https://grassfinn.github.io/Adventure-Time-Parallax-Site/',
  './thumbnails/parallax.PNG'
);

unitConversion = new Card(
  'Unit Conversion',
  'https://grassfinn.github.io/Unit-Conversion/',
  './thumbnails/unit conversion.PNG'
);

CounterApp = new Card(
  'Passenger Counter',
  'https://grassfinn.github.io/passenger-counter-app/',
  './thumbnails/counter.PNG'
);

passwordGenerator = new Card(
  'Password Generator',
  'https://grassfinn.github.io/Password-Generator/',
  './thumbnails/generator.PNG'
);

worldleWInput = new Card

pomodoroTimer = new Card

let cardList = [blackjackGame, AdventureTimeParallax, passwordGenerator, unitConversion, CounterApp]

console.log(cardList)

const portfolioEl = document.querySelector('#portfolio-container')


cardList.forEach((item, index) => {
    const title = item.title
    const link = item.link
    const image = item.image
    // create an article tag
    const article = document.createElement('article')
    // set the id = to the index + 1
    article.setAttribute('id', 'card' + '-' + (index + 1))
    article.classList.add('portfolio-item')
    // append the article to the portfolio section
    portfolioEl.append(article)

    // target the cards by their article id
    const cardArticle = document.getElementById('card-' + (index + 1))
    // create and h2
    const h3 = document.createElement('h3')
    // append the h2 within the article
    cardArticle.append(h3)
    // set the text of the h2 to the title
    h3.textContent = title

    // create the img
    const img = document.createElement('img')
    cardArticle.append(img)
    img.classList.add('portfolio-img')
    img.src = image

    const div = document.createElement('div')
    cardArticle.append(div)
    // create an a tag
    const liveSite = document.createElement('a')
    const gitHub = document.createElement('a')
    // append the a tag within the article with the link and text of github
    div.append(liveSite)
    liveSite.classList.add('portfolio-link')
    liveSite.textContent = 'Live Site'
    liveSite.setAttribute('href', link)
    liveSite.setAttribute('target', '_blank')
    div.append(gitHub)
    gitHub.textContent = 'GitHub'
    gitHub.setAttribute('href', '#')
    gitHub.setAttribute('target', '_blank')
    gitHub.classList.add('portfolio-link');

})