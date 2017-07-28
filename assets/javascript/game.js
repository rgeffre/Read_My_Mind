
       // Creating variables to hold the number of wins, losses, and ties. They start at 0.
           var guessCount=0;
           var winCount = 0;
           var lossCount = 0;
           var maxGuesses = 3;

      //Create an array that lists all the letter options

           var pickLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];

      // This function is run whenever the user presses a key.
      document.onkeyup = function(event) {

      // Determines which key was pressed.
          var playerGuess = event.key;

      // Randomly chooses an item from the array and stores it in a variable.  This is the computers choice.
          var computerChoice = pickLetter[Math.floor(Math.random() * pickLetter.length)];

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
         if (playerGuess === computerChoice) {
             document.getElementById("message").innerHTML = "You won!"; winCount++;
         } else if (playerGuess != computerChoice) {
           document.getElementById("message").innerHTML = "That is incorrect, guess again."; guessCount++;
         } else if (playerGuess != computerChoice) {
           document.getElementById("message").innerHTML = "That is incorrect, guess again."; guessCount++;
         } else if (playerGuess != computerChoice) { 
           document.getElementById("message").innerHTML = "That is incorrect, guess again."; guessCount++;
         } if (guessCount >= maxGuesses) {
           document.getElementById("message").innerHTML = "Sorry, you ran out of guesses.  The letter was." + computerChoice; lossCount++
         }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + playerGuess + "</p>" +
          "<p>The computer chose: " + computerChoice + "</p>" +
          "<p>wins: " + winCount + "</p>" +
          "<p>losses: " + lossCount + "</p>" +
          "<p>Guesses Used: " + guessCount + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      };
      
  
  
  