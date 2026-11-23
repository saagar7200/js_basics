//! operator
//* arithmetic operators
//? + , - , * , / , % , **
console.log(12 + 4);
let a = 23;
let b = 45;
console.log(a + b);
let sum = a + b;
console.log(sum);
console.log("hello" + " " + "world");
console.log(4 ** 4);

//* Assignment Operators
//?  = , += , -= ,
let x = 30;
x += 20; // x = x + 20;
x -= 2; // x = x - 2;
console.log(x);

//* comparison operator : boolean
//? == , === , < , > <= , >= , != , !==

let c = 100;
let d = "100";
// console.log(c == d);
// console.log(c === d);
// console.log(10 >= 11); //

//* logical  -> boolean
//? AND [&&] , OR [ || ]  , NOT [ ! ]
// truth table
// and -> dot
// or -> add

console.log(true && true); //
console.log(true && false); //
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// if (c <= 100 && d === "100") {
//   console.log("abc");
// }

// if (c < 100 || d === "100") {
//   console.log("abc");
// }

// if (c !== 100) {
//   console.log("a is not equal to 100");
// }

//* unary
//? increment -> increase by 1 -> ++
let e = 10;
// post
console.log(e++); // e += 1 //? return 10 , e=11
e++; // e += 1 //? return 11 , e=12
console.log(e); //? 12
// pre
console.log(++e); // 13 //? e = 13  , return 13
console.log(e++); // 13
console.log(++e); // 15

//? decrement
// post
// pre

//* ternary
// condition ? exp_1 : exp_2

let age = 18;
let res = null;
if (age >= 18) {
  //   console.log("can vote");
  res = "can vote";
} else {
  //   console.log("can not vote");
  res = "can not vote";
}

// console.log(res);

// age >= 18 ? console.log("can vote") : console.log("can not vote");
const result = age >= 18 ? "can vote" : "can not vote";
// console.log(result);

//! bitwise
// console.log(2 & 1);
// console.log(4 & 1);
// console.log(5 & 1);
// console.log(5 & 2);
//  010.001 -> 000 -> 0

//! typeof
let h = 10;
let i = "string";
let j = true;
console.log(typeof h === "string");
console.log(typeof h);
h = "hello";
console.log(typeof h);

console.log(typeof i);
console.log(typeof j);

//! diff -> undefined & not defined
// let f;
// console.log(f);

// console.log(g);

//* type conversion
//? explicit : Number() , String() , Boolean()
// console.log(String(112));
// console.log(Number("112"));
// console.log(Number("djhds")); //
// console.log(Boolean(112));
// console.log(Boolean("abc"));

//? implicit: -> internal
//* type coercion -> implicit type conversion

// console.log(10 + "23");
// console.log("30" - 15);

//todo: truthy & falsy values
//* falsy: 0 , -0, null , undefined , false , '' , NaN

let age1 = " ";
if (age1) {
  console.log("age1");
}
