// a = 10;
// b = 20;
// c = a+b;
// console.log(c);

// let age = 21;
// console.log(age);

// Disadvantage of a var keyword
// 1. multiple declaration
// var age = 32;
// var age = 40;
// console.log(age);

//2. hoisting problem
// console.log(age);
// var age = 10;       OUTPUT: undefined

// console.log(age);   OUTPUT: ReferenceError: age is not defined

// KEY TAKEAWAY IS THAT use let keyword so that the problems do not occur
// using let do not allow duplicate declaration like var does

// let age = 40;
// let age = 30;
// console.log(age);    OUTPUT: SyntaxError: Identifier 'age' has already been declared




// const age = 30;
// age = 42;
// console.log(age);
// OUTPUT: TypeError: Assignment to constant variable.


for(let i=1;i<=10;i++)
{
    process.stdout.write(i+" ");
}
