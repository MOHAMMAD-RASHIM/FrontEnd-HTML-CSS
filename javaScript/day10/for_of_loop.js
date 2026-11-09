// In java there is a for each loop similarly in js we have for of loop

let sum = 0;
function add_With_For_Of_Loop(...arr) {
  for (item of arr) {
    sum = sum + item;
  }
  return sum;
}

console.log("With for of loop ...");
console.log(add_With_For_Of_Loop(10, 20));
console.log(add_With_For_Of_Loop(10, 20, 30, 40, 50));
