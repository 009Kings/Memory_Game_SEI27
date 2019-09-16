let cards = [{
  rank: 'queen',
  suit: 'hearts',
  cardImage: 'images/queen-of-hearts.png'
}, {
  rank: 'queen',
  suit: 'diamonds',
  cardImage: 'images/queen-of-diamonds.png'
}, {
  rank: 'king',
  suit: 'hearts',
  cardImage: 'images/king-of-hearts.png'
}, {
  rank: 'king',
  suit: 'diamonds',
  cardImage: 'images/king-of-diamonds.png'
}];
let cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[3];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You did it! 🎉");
  } else {
    console.log("Eat the 💩");
  }
}

function flipCard() {
  let cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank)
  console.log("User flipped " + cards[cardId].rank);
  console.log("User flipped " + cards[cardId].suit);
  this.setAttribute('src', cards[cardId].cardImage)
  if (cardsInPlay.length === 2) {
    checkForMatch()
  }
}

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard()