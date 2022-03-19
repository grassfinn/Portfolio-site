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
cardOne = new Card('blackjack', 'https://grassfinn.github.io/Blackjack-Game/');

cardTwo = new Card(
  'Adventure Time Parallax Site',
  'https://grassfinn.github.io/Adventure-Time-Parallax-Site/'
);

cardThree = new Card(
  'Unit Conversion',
  'https://grassfinn.github.io/Unit-Conversion/'
);

cardFour = new Card(
  'Passenger Counter',
  'https://grassfinn.github.io/passenger-counter-app/'
);

let cardList = [cardOne, cardTwo, cardThree, cardFour]

console.log(cardList)

let portfolioEl = document.querySelector('#portfolio')


cardList.forEach((item, index) => {
    let title = item.title
    let link = item.link
    // create an article tag
    let article = document.createElement('article')
    // set the id = to the index + 1
    article.setAttribute('id', 'card' + '-' + (index + 1))
    // append the article to the portfolio section
    portfolioEl.append(article)

    // target the cards by their article id
    let cardArticle = document.getElementById('card-' + (index + 1))
    // create and h2
    let h2 = document.createElement('h2')
    // append the h2 within the article
    cardArticle.append(h2)
    // set the text of the h2 to the title
    h2.textContent = title
    // create an a tag
    let liveSite = document.createElement('a')
    let gitHub = document.createElement('a')
    // append the a tag within the article with the link and text of github
    cardArticle.append(liveSite)
    liveSite.textContent = 'Live Site'
    liveSite.setAttribute('href', link)
    liveSite.setAttribute('target', '_blank')
    cardArticle.append(gitHub)
    gitHub.textContent = 'GitHub'
    

})