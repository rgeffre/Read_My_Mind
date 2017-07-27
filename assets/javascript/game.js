//VARIABLES
var guessCount = 0;
var MAX_GUESSES = 3;
var winCount = 0;
var lossCount = 0;

//select random array item
var pickLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];
var computerChoice = pickLetter[Math.floor(Math.random () *pickLetter.length)];


//FUNCTION
function guessOne() {
	//get a guess from the player
	var guess = document.getElementById("guess").value

	if (guess == computerChoice){
    document.getElementById("message").innerHTML= "It took you " + guessCount + " guesses";
    return;  // prevents saying 'ran out' if guessed in last round
  } else if (guess != computerChoice){
    document.getElementById("message").innerHTML= "That is incorrect, guess again. "+guess;
  } 
 
  guessCount += 1; winCount++;
}

