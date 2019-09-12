console.log("Eat the 💩");

let cards = ["queen", "king", "king", "queen"];
let cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[3];
cardsInPlay.push(cardOne)
cardsInPlay.push(cardTwo)

console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("Match!")
} else {
  alert("You fucked")
}