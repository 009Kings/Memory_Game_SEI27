let cards = ["queen", "king", "king", "queen"];
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

function flipCard(cardId) {
  cardsInPlay.push(cards[cardId])
  console.log("User flipped " + cards[cardId]);
  if (cardsInPlay.length === 2) {
    checkForMatch()
  }
}

flipCard(0)
flipCard(2)
