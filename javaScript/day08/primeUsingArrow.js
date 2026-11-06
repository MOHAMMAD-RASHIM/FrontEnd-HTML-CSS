const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

let isPrime = (number) => {
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};

if (isPrime) {
  console.log(`${num} is prime`);
} else {
  console.log(`${num} is NOT prime`);
}
