/* Tutorial 4
Exercise 1 JavaScript code
*/

// Collect user input
let userNum = prompt("Enter a number between 1-100: ");

// Checks if input is a number
if(isNaN(userNum)) {
  throw ("Sorry, " + userNum + " is not a valid entry.");
}

// Checks if input is in range
else if (userNum >= 1 && userNum <=100) {
  console.log("Thank you! You entered " + userNum + ", a valid number.");
}

// Output for invalid entries
else {
  throw ("Sorry, " + userNum + " is not a valid entry.");
}