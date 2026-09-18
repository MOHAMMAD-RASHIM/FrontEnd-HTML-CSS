// console.log(100+"200.5");

// console.log(100 - "200.5"); // Implicit type casting: Type coercion

// console.log(100 - true); // Implicit type casting

// EXPLICIT TYPE CASTING
// let a = Number("  ");
// console.log(a, typeof a);

// let a = Number("day12256");
// console.log(a, typeof a);

// let a = parseInt("     122abc   56");
// console.log(a, typeof a);

// + OPERATOR
// console.log(typeof +"5");  //op: number
// console.log(typeof "5");  //op: string
// console.log(typeof +true);  //op: number

// TOSTRING METHOD
// console.log(typeof (123).toString());

// Some Interview questions
// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true
// console.log(Boolean("")); //false
// console.log(Boolean("hello")); //true
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean(NaN)); //false
// console.log(Boolean([])); //true
// console.log(Boolean({})); //true

console.log(!![]);
console.log(!!0);
console.log(!!{});
console.log(!!56);
console.log(!!"");
console.log(!!"  jajak");
