// function without rest parameter
function add(a, b) {
  return a + b;
}
console.log(add(10, 20)); // op: 30
console.log(add(10, 20, 30, 40, 50)); // op:30

// so what to do?  the answer is rest parameter
// instead of providing the number of parameters you pass the dynamic array...
// i.e (...n)
let sum = 0;
function addWithRestParam(...arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log("With rest parameter...")
console.log(addWithRestParam(10, 20));
console.log(addWithRestParam(10, 20, 30, 40, 50));
