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
var wins = "Wins: " + 0;
var losses = "Losses: " + 0;
var guesses = "Guesses: " + 7;
var junkPile = [];

//choose word randomly from array
var randWord = chalWords[Math.floor(Math.random() * chalWords.length)];

var generateNewWord = function(){
	var randWord = chalWords[Math.floor(Math.random() * chalWords.length)];
}

console.log(randWord);
//make underscores based on length of word
var underscores = "";

for (let i = 0; i < randWord.length; i++) {
	underscores = underscores + "_";
}
console.log(underscores)


//get users guess

// if not desired, return google character codes alphabet
//document.getElementById or getElementByClass
//

document.onkeyup = function(event){
	(event.key)
for (let i = 0; i < randWord.length; i++){
	if(event.key === randWord[i]){
		underscore[i] = randWord[i];
		// html link
	}if(event.key !== randWord[i]){
			junkPile.push(event.key);
			//update html
			guesses--;
			//update

		}
	}
}

	if(underscores === randWord){
		wins++;
		//html
		generateNewWord;
	} else
	if(guesses === 0){
		losses++;
		//html
		generateNewWord;
	};


// //compare guess letter and selected word
// (let i = 0; i < random.lenth; i++){
// 	push(key)
// })





//if found in word push to correct spot in underscore array
//if wrong push to junk-pile array
//create wins and losses and guesses variables



//attach them to display in document

//if all letters correct add 1 to wins
//if guesses run out add 1 to losses
