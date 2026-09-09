// 1. number data type

// let a = 100; // whole number
// let b = 3.141648;
// let c = 2.5e6;
// let d = 0xF;
// let e = 0b101100;
// let f = 0o45; // octal in js is 0o

// console.log(d,typeof d);

// console.log(typeof 100/0,100/0);  //op:NaN Infinity
// console.log(-100/0);  //op: -Infinity

// console.log(0.1+0.2); // op:0.300000004
// console.log((0.1+0.2==0.3)); //op: false

// let a = 0.1+0.2;
// console.log(a.toFixed(1)); //to get 0.3 as an output

// console.log(typeof("10"+2)); // op:102 (string)
// console.log(typeof("10"-2)); // op: 8 (number)
// console.log("10"/2);         // op:5

// console.log("hello"/2); // op: NaN

// console.log(Math.sqrt(-100));  // op: NaN

// console.log('10' == 10); // op: true
// //bcz in JS == is loosely strict operator

// console.log('10' === 10); //op: false
// //bcz === is strict comparison operator

// console.log(NaN === NaN); // op: false
// console.log(NaN == NaN); // op:false

// let a = Number.MAX_SAFE_INTEGER;
// console.log(a);

// let b = 9007199254740991252555699999;
// console.log(b);

// let a = Number.MIN_SAFE_INTEGER;
// console.log(a);

// let a = 9007199254740991252555699999n;
// console.log(typeof a); // op:bigint
// console.log(typeof a);