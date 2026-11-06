// FUNCTION DECLARATION
function add1(a, b) {
  return a + b;
}

console.log(add1(10, 20));

// FUNCTION EXPRESSION
let add2 = function (a, b) {
  return a + b;
};
console.log(add2(20, 25));

// ARROW FUNCTION
let add3 = (a, b) => {
  return a + b;
};
console.log(add3(10, 200));

// IIFE
let add4 = (function (a, b) {
  console.log(a + b);
  console.log("added using iife")
})(10, 20);
