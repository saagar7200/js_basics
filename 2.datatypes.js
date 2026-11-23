//* data types

//? primitive
//* number
let a = 12;
let b = 12.34;

//* string
//? single quote ''
//  let c =  'single quote'

//? double quote ""
let d = "double quote ${2 + 2}";

//?  template literal -> backtick -> ``
let e = `backtick ${2 + 2}`;

let userName = "Ram";
const greetMessage = `Hello ${userName}`;
console.log(greetMessage);
console.log(e);

let firstName = "Ram";
let lastName = "Adhikari";
let fullName = `${firstName} ${lastName}`;
// let fullName = firstName + " " + lastName;

console.log(fullName);

//* boolean
let isAdmin = true;
let isUser = false;

//* undefined
// let f = undefined;
let g;
// console.log(f);
console.log(g);

//* null
let h = null;
console.log(h);

//* bigint
console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
const bigint = BigInt(34);
const num1 = 9007199254740993n;
console.log(num1 + 1n);
console.log(num1 + 2n);
console.log(num1 + 3n);
console.log(num1 + 30n);
console.log(bigint);

//* symbol
console.log("id" === "id");
const sym = Symbol("id");
const sym1 = Symbol("id");
console.log(sym.description);
console.log(sym === sym1);

//? non primitive
//* object
//* array
//* function
