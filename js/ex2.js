/* Tutorial 4
Exercise 2 JavaScript code
*/

// Initalize arrays
let array1 = [4, 8, 12, 5, 20];
let array2 = ["a", 2, "Hello", 6, [4, 5], "bye", {name: "Alice", score: 98}];

// Function to create object with array properites
function arrayProp(data) {
  let arrayObject = {
    firstElement: data[0],
    lastElement: data[data.length - 1],
    length: data.length
  };
  return arrayObject;
}

// Test cases
console.log(arrayProp(array1));
console.log(arrayProp(array2));