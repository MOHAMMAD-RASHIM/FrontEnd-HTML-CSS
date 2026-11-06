const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

function isPrime(number) {
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

if (isPrime(num)) {
  console.log(`${num} is prime`);
} else {
  console.log(`${num} is NOT prime`);
}
