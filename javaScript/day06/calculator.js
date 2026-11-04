const prompt = require("prompt-sync")();

let a = Number(prompt("Enter 1st operand: "));
let operator = prompt("Enter a operator: + - * / % -> ");
let b = Number(prompt("Enter 2nd operand: "));

let result;

switch (operator) {
  case "+":
    result = a + b;
    break;

  case "-":
    result = a - b;
    break;

  case "*":
    result = a * b;
    break;

  case "/":
    result = a / b;
    break;

  case "%":
    result = a % b;
    break;

  default:
    console.log("INVALID OPERATOR...");
}

console.log(`${a} ${operator} ${b}  = ${result}`);
