const prompt = require("prompt-sync")();

let n = Number(prompt("Enter any number: "));

for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n-i) + "* ".repeat(i));
}
