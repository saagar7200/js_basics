//! operators

//* arithmetic op.
//? + , - , / , *  , % , **

console.log(10 + 2);
let a = 23;
let b = 40;
// console.log(a + b);
let sum = a + b;
// console.log(sum);
// console.log(11 / 2); // 5.5
// console.log(11 % 2); // 1

// console.log(2 ** 3);
// console.log(2 ** 8);

// console.log("Hello" + " " + "World");

//* Assignment op
//? = ,
//?  compound assignment += , -=
let c = 10;
let d = 40;
c += 20; //! c = c + 20; //30

c += d; // c = c + d

let r = c + d;

//* Comparison op
//?  == , === , < ,> <= ,>= ,!= , !==
//! return boolean
// console.log(10 > 10); //

let f = 10;
let e = "10";
console.log(e == f); //
console.log(e === f); //

//* Logical
//? AND [ && ] , OR [ || ] , NOT [ ! ]
//! return boolean

console.log(true && true); //
console.log(true && false); //
console.log(false && false); //

console.log(true || true); //
console.log(true || false);
console.log(false || false);

//* unary op
// increment/ decrement
// post/pre
let i = 10;
// console.log(i++); // post // 10
// console.log(++i); // pre // 12
// console.log(i); // 12

//* type operator

// console.log(typeof i);
// console.log(typeof i === "number");

i = "";
// console.log(typeof i);
// console.log(typeof "abc");

// console.log(typeof null); //

// object - 01
// string - 02
// null - 01
// console.log(typeof 10n);

//* ternary operator
// condition  ?  exp_1 : exp_2

let age = 17;

if (age >= 18) {
  console.log("can vote");
} else {
  console.log("can not vote");
}

// age >= 18 ? console.log("can vote") : console.log("can not vote");
const res = age >= 18 ? "can vote" : "can not vote";
console.log(res);

//* nullish coalescing  ??
let user = null;
// let user;
// let user = "John";

console.log(user ?? "Guest");

//! optional chain

//todo: truthy & falsy values

//! falsy : 0 , -0 , null , undefined , '' , false , NaN

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));

// console.log(10 - "h");

// let u = null;

// if ("") {
//   console.log("run");
// }
//todo: type conversion
//? explicit conversion
console.log(typeof String(234));
console.log(typeof Number("234"));

//? implicit conversion
//todo: type coercion

console.log(10 + "3"); // 103
console.log(12 - "3"); // 9
console.log(12 - "a"); // NaN
