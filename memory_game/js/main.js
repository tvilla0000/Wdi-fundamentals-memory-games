
var	cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
} else {
		console.log("Sorry, try again.");
}

};


function flipCard(cardId) {
    if (cardsInPlay.length === 2) {
	console.log(true);
} checkForMatch();

console.log("User flipped" + " " + cards[cardId]);
};

flipCard(0); 
flipCard(2);
checkForMatch();



















