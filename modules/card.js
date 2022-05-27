class Card {
  // constructor
  constructor(data) {
    // properties
    Object.assign(this, data);
  }
  // methods
  getCardHtml() {
    const { title, deployment, thumbnail, repo } = this;
    return `<article class='portfolio-item'>
    <h3> ${title} </h3>
    <img class= 'portfolio-img 'src='${thumbnail}'>
      <div>
      <a class='portfolio-link' href='${deployment}' target='_blank'> Live site </a>
      <a class='portfolio-link' href='${repo}' target='_blank'> GitHub </a>
      </div>
      </article>`;
  }
}

export default Card