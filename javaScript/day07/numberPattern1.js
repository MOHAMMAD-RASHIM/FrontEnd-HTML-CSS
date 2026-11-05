const prompt = require("prompt-sync")();

let n = Number(prompt("Enter any number: "));


for (let i = 1; i <= n; i++) {
    let t = "";
    for(let j=1;j<=i;j++)
    {
        t = t + i;
    }
    console.log(t);
  
}


for (let i = 1; i <= n; i++) {
    let t = "";
    for(let j=1;j<=i;j++)
    {
        t = t + j;
    }
    console.log(t);
  
}
