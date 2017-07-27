
var userGuess = prompt("What letter am I thinking of?");


//VARIABLES
//====================================
   
  // Creates an array that lists out all of the options.
    var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];
    var counter = 0;
    var maxTries= 3;
    var wins = 0;
    var losses = 0;
    

  // This function is run whenever the user presses a key.
   // document.onkeyup = function(event) {

  // Determines which key was pressed.
   //   var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      if ((userGuess === computerGuess) {
        alert = (You guessed correctly!  You must be psychic)
          wins++; counter++;
        } else if ((userGuess != computerGuess))
         var userGuess = prompt(Incorrect.  Please guess again.) {
          losses++; counter++
         }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
    }; 
  
  