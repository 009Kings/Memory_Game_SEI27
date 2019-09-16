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
  let message = document.createElement('p')
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You did it! 🎉");
    message.textContent = "🎉You did it!🎉"
  } else {
    console.log("Eat 💩");
    message.textContent = "☠️💩 Oh Noes! Try again 💩☠️"
  }
  document.getElementById('message').appendChild(message)
}

function flipCard() {
  let cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage)
  cardsInPlay.push(cards[cardId].rank)
  console.log("User flipped " + cards[cardId].rank);
  console.log("User flipped " + cards[cardId].suit);
  if (cardsInPlay.length === 2) {
    endGame()
  }
}

function resetGame() {
  // clear the board first
  let board = document.getElementById('game-board')
  
  //e.lastElementChild can also be used. 
  let child = board.firstElementChild;  
  while (child) { 
    board.removeChild(child); 
    child = board.firstElementChild; 
  }
  // Clear the Cards in cardsInPlay
  cardsInPlay = [];
  // Clear my message
  let badChild = document.getElementById('message').firstChild;
  console.log(badChild)
  if (badChild) {
    document.getElementById('message').removeChild(badChild);
  }
}

function createBoard() {
  resetGame()
  // Make the rest of the board
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

function clearEventListeners() {
  let cardNodes = document.querySelectorAll('img');
  for (let i = 0; i < cardNodes.length; i++) {
    cardNodes[i].removeEventListener('click', flipCard);
  }
}

function endGame() {
  checkForMatch();
  clearEventListeners();
}

createBoard()
let button = document.getElementById("reset")
button.addEventListener('click', createBoard)