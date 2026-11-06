function greet(s) {
  console.log("Hello " + s);
}

function fun() {
  return "world";
}

greet(fun); //returns hello function fun(){ return "world";}
greet(fun()); // returns hello world

function greet2(s) {
  console.log("hello " + s());
}

greet2(fun); // hello world

// greet2(fun()); // error///
