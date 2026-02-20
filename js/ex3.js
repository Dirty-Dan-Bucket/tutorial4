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

// Loops until correct quess or user types q
while(userNum != "q") {
  // Asks user for input and adds attempts
  userNum = prompt("Guess the number (enter q to quit): ");
  attempts += 1;
  // Win condition
  if (userNum === guessNum) {
    console.log("Correct! It took you " + attempts + " attempts to guess the correct number.");
    break;
  }
  // Guess too low
  else if (userNum < guessNum) {
    console.log("Too low, guess again");
  }
  // Guess too high
  else if (userNum > guessNum) {
    console.log("Too high, guess again");
  }
}