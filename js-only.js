var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q,','r','s','t','u','v','w','x','y','z']
var counter = 0;
var maxGuesses = 10;

var rando = Math.floor(Math.random() * 26);

var answer = letters[rando];

var guess = prompt("Please guess a letter!");

while (guess != answer) {
	var attempt = prompt("Please guess a letter of the alphabet.");
	counter++;

	if (counter > attempts) {
		document.write("You have no more attempts.");
		break
	}

	if (attempt === answer) {
		document.write("Congrats! You have guessed correctly.");
		document.write("<p>The correct number was " + answer + "</p>")
		document.write("<p> It took you " + counter + " attempts.</p>")
	}

}
