/* Tutorial 4
Exercise 1 JavaScript code
*/

let userNum = prompt("Enter a number between 1-100: ");

if(isNaN(userNum)) {
  throw ("Sorry, " + userNum + " is not a valid entry.");
}

else if (userNum >= 1 && userNum <=100) {
  console.log("Thank you! You entered " + userNum + ", a valid number.");
}

else {
  throw ("Sorry, " + userNum + " is not a valid entry.");
}