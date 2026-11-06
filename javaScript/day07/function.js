let a = 100,
  b = 200;


// FUNCTION DECLARATION / DEFINITION
function add(a, b) {
  let c = a + b;
  return c;
}

console.log(add(a, b));


// FUNCTION EXPRESSION
let referenceVariable = function() {
       console.log("I am function expression meaning the function stored inside a variable")
};

referenceVariable();