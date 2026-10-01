// node file_path
// node ./1.variable.js

console.log("hello world");
console.log(20 + 2);

//! variable
//* variable declaration methods
//? var , let , const

//* var
var a = 10;

// console.log(a); // 10
// a =123
// a = a + 3; // 13  // 10 + 3

console.log(a); // 13

var a = 400;

console.log(a);

console.log(a + 4); // 17  // 4004

//* let
let b = 30;
console.log(b);

// let b = 10; //! redeclaration

b = 40; //! re-assignment
console.log(b);

//* const -> constant

const c = 56;

console.log(c);

// c = 78;
// let c = 45;

let d;
var e;

d = 56;

const f = 23;
// f = "";

//? dynamic typed , interpreted , single threaded language

// int a; char b;

let g = "hello";

g = 34;

g = true;

// v8 + call stack

//* variable naming conventions
//? camelcase
let name = "";
// let userfullname = ''
let userFullName = "";

//? snake case
let user_full_name = "";

//? pascal case
let UserFullName = "";

let username = "";
