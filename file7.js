let winningNumber = 7;
let userGuess = +prompt("Guess a number between 1 and 10"); // +prompt converts string to number

if(userGuess === winningNumber) {
  alert("You win!");
} else if(userGuess > winningNumber) {
  alert("Too high, try again!");
} else {
  alert("Too low, try again!");
}

