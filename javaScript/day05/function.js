function addNumbers(a, b) {
  console.log(a + b);
}

// addNumbers(10,20);
// addNumbers(10,400);

// Taking input from the user
const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter first number: "));

addNumbers(num1, num2);
