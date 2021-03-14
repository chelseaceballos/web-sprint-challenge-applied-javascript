import axios from 'axios'

// console.log("This is axios, card", axios);

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card"> div/class
  //   <div class="headline">{ headline }</div> div/class
  //   <div class="author"> div/class
  //     <div class="img-container"> div/class
  //       <img src={ authorPhoto }> imgsrc= imgurl
  //     </div>
  //     <span>By { authorName }</span> span
  //   </div>
  // </div>
  //
  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then(response => {
    response.data.articles['javascript'].forEach(article => {
      let newCard = Card(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      container.appendChild(newCard);
    });


    response.data.articles['bootstrap'].forEach(article => {
      let newCard = Card(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      container.appendChild(newCard);
    });

    response.data.articles['technology'].forEach(article => {
      let newCard = Card(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      container.appendChild(newCard);
    });

    response.data.articles['jquery'].forEach(article => {
      let newCard = Card(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      container.appendChild(newCard);
    });

    response.data.articles['node'].forEach(article => {
      let newCard = Card(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      container.appendChild(newCard);
    });

    console.log(response.data);
  });
  let container = document.querySelector('.cards-container');
function Card(headline, imgUrl, authorsName) {
  let cardContainer = document.createElement('div');
  let headlineDiv = document.createElement('div');
  let authorDiv = document.createElement('div');
  let imgContainer = document.createElement('div');
  let img = document.createElement('img');
  let span = document.createElement('span');

  cardContainer.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainer.classList.add('img-container');

  cardContainer.appendChild(headlineDiv);
  cardContainer.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorDiv.appendChild(span);

  headlineDiv.textContent = headline;
  img.src = imgUrl;
  span.textContent = authorsName;

  return cardContainer;
};
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`

  // However, the articles do not come organized in a single, neat array. Inspect the response closely!

  // Create a card from each and every article object in the response, using the Card component.

  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
 



}

export { Card, cardAppender }
