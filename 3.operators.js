//*
//! arithmetic
//? + - * / % **
// console.log(20 + 3);
let sum = 23 + 4;
// console.log(34 - 5);
// console.log(2 * 4);
// console.log(34 / 2);
// console.log(34 % 2);
// console.log(2 ** 3);
console.log("Hello" + " " + "World");
//! assignment

//? =  , += , -= , *=
let x = 10;
let y = 12;
x += y; // x = x + y; // 22
x += 3; //  x = x + 3
// console.log(x); // 25

//! comparison
//? == , === , < , > <= >= , != , !==

let a = 12;
let b = "12";

//

console.log(a == b);
console.log(a === b);

//! logical
//* AND -> && , OR -> || , NOT -> !

//! unary
//* increment : post/pre -> ++
// x = x + 1 // x += 1
// x++ -> post
// ++x -> pre

//* decrement: post/pre  -> --
// x = x - 1 // x -= 1
// x-- -> post
// --x -> pre

let c = 0;
console.log(c++); // 0  -> 1
console.log(++c); // 2

let d = 10;
d--;
console.log(d--); //9
console.log(--d); //7

//! ternary
let age = 18;
// let result = null;

// if (age >= 18) {
//   console.log("adult");
//   result = "adult";
// } else {
//   console.log("minor");
//   result = "minor";
// }

//? condition ? exp_1 : exp_2
let result = age >= 18 ? "adult" : "minor";

//! typeof
console.log(typeof result); //
result = 34;
console.log(typeof result); //

console.log(typeof age === "string");
console.log(typeof 1); // number
console.log(typeof "abc"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object

//! bitwise
console.log(2 & 1); //
// 010.001 => 000 -> 0
console.log(2 | 1); //
// 010.001 => 011 -> 3

//* type conversion
//? explicit
console.log(Number("123"));
console.log(String(10003));
console.log(Boolean(12));
console.log(Boolean(0));
console.log(Number("abc")); //* NaN

//? implicit

//* type coercion
console.log("10" + 10); //
console.log(10 + 10); //
console.log("10" - 4); //
console.log("10abc" - 4); //

// if(){

// }

//! truthy & falsy values
//* falsy : 0 , -0 , ''  , false , null , undefined , NaN
// if (10) {
//   console.log("run");
// }

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(" ")); //! true
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

console.log(Boolean({})); //! true
console.log(Boolean([])); //! true

// let user = dnOp();

// if (user === null || user === undefined) {
// }

// if (!user) {
//     //
// }
