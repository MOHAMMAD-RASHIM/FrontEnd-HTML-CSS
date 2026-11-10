// POINTS TO REMEMBER
// let and const are block scoped variable
// var is a function scoped variable

let a = 100; // GLOBAL SCOPED VARIABLE

function fun() {
  let b = 200; // FUNCTION SCOPED VARIABLE
  console.log(b);

  if (b >= 200) {
    let c = 300; // BLOCK SCOPED VARIABLE
    console.log(c);
  }

  console.log(a);
}

fun();
