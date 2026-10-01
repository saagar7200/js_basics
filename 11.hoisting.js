//* hoisting
// var x;
console.log(x); //

var x = 10;
// x = 10;
console.log(x); // 10

// console.log(y); //

// function hoist() {
//   console.log(y); //
//   var y = 34;
//   console.log(y);
// }

// hoist();

//* function declaration

// hoist();

// function hoist() {
//   console.log("hoist");
// }

// ab();

// function ab() {
//   let x = 34;
//   console.log("hoist", x);
// }

//* let & const

// console.log(y); //! ReferenceError: Cannot access 'y' before initialization
// TDZ -> temporal dead zone

// let y = 12;

// console.log(z);

// const z = 45;

//* function expression

// let abc = "abc";
// abc();

//? var
varFunc(); //! undefined() -> varFunc   is not a function
console.log(varFunc());

var varFunc = () => {
  console.log("var function ");
};
// varFunc();

//? let

//? cost

//* callstack
//
//o/p -> a b c

// function a() {
//   console.log("a");
//   function b() {
//     console.log("b");
//     function c() {
//       console.log("c");
//     }
//     c();
//   }
//   b();
// }

// a();
// a();

//* phases of execution: execution & memory creation phases
//? 1. memory creation phase / context creation
// memory: {x:undefined,a:(){console.log("a");}}
// memory: {x:100,a:(){console.log("a");}}

//? 2. execution phase

//? cs: GEC
// g-memory: {x:100,a:(){console.log("a");}}

console.log(x); //undefined

// var x = 100;

console.log(x); // 100

a(); // a,34

function a() {
  var x = 34;
  console.log("a", x);
}

a(); //a,34

//let const var diff
