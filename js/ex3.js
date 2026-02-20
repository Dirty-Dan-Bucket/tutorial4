/* Tutorial 4
Exercise 3 JavaScript code
*/

// Generates a random integear, inclusive
function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Target number to guess, initialize user number and attempts
let guessNum = randomInt(1, 100);
let userNum = 0;
let attempts = 0;

while(userNum != "q") {
  userNum = prompt("Guess the number (enter q to quit): ");
  attempts += 1;
  if (userNum === guessNum) {
    console.log("Correct! It took you " + attempts + " attempts to guess the correct number.");
    break;
  }
  else if (userNum < guessNum) {
    console.log("Too low, guess again");
  }
  else if (userNum > guessNum) {
    console.log("Too high, guess again");
  }
}