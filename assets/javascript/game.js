//create an array of words

var chalWords = [
	"keyboard",
	"cyber",
	"nebular",
	"stellar",
	"hyperlink",
	"password",
	"database",
	"security",
	"firewall"
];

//choose word randomly from array
var randWord = chalWords[Math.floor(Math.random() * chalWords.length)];

//make underscores based on length of word
var underscores = [];

for (let i = 0; i < randWord.length; i++) {
	underscores.push("_");
}

//get users guess
document.addEventListener("keypress", event);

console.log(event);


//compare guess letter and selected word
//if found in word push to correct spot in underscore array
//if wrong push to junk-pile array
//create wins and losses and guesses variables

var wins = "Wins: " + 0;
var losses = "Losses: " + 0;
var guesses = "Guesses: " + 0;

//attach them to display in document

//if all letters correct add 1 to wins
//if guesses run out add 1 to losses
