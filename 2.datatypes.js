//! datatypes

//? primitive
//* number [ int + float]
let a = 12;
let b = 12.45;
//* string
// let c = 'hello'
let d = "Hello ";

//! template literal  -> `` -> backtick
// let str = `abc
// sdf
// dsfds
// dsfsd
// fdsfsd
// fsd`;

let user = "John";
//? string interpolation
let greetMsg = `Hello ${user}`;

console.log(greetMsg);
console.log(`Result: ${2 + 2}`); //

//* boolean
let e = true;
let f = false;
//* undefined
let g = undefined;
//* null
let i = null;

let j;
console.log(g);
console.log(j);
let k = null;
console.log(k);

//? undefined & not defined
// console.log(l);

//* bigint
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991n + 1n);
console.log(9007199254740991n + 2n);
console.log(9007199254740991n + 3n);
console.log(9007199254740991n + 4n);
let num1 = 12n;
console.log(num1 + 2n); //

const bigint = BigInt(123);
console.log(bigint);

//* symbol
const id = Symbol("id 1");
const id1 = Symbol("id 1");
console.log(id === id1);
console.log(id);
console.log(id1);

//? non primitive
//* object
//* array
//* function
