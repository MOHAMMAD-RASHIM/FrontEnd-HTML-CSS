const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the value; "));

let t = "* ";

for (let i = 1; i <= n; i++) {
  t = t + "* ";
}

// t = t.repeat(n);

console.log(t);
