
var	cards = ["queen", "queen", "king", "king"];

var cardOne = cards[0];

var cardTwo = cards[2];


var cardsInPlay = [];

cardsInPlay.push(cardOne);

cardsInPlay.push(cardTwo);


console.log("User flipped" + " " + cardOne + "!" );

console.log("User flipped" + " " + cardTwo + "!" );

if (cardsInPlay.length === 2) {
	console.log(true);
}

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert(" You found a match!");
} else {
	alert("Sorry, try again!");

}
	
















