//? Hoisting
//* behavior of js of processing variable & function declaration before execution.

// memory creation
// {x:undefined , one:(){} , y:<uninitialized>}

// execution phase
// {x:10 , one:(){}}

// var x;
console.log(x); //undefined

var x = 10;
// x = 10;

console.log(x); //10

one(); // one

function one() {
  console.log("one");
}

// let
// console.log(y); //! ReferenceError: Cannot access 'y' before initialization
//* TDZ => temporal dead zone

let y = 10;
console.log(y);

// console.log(z); //! ReferenceError: Cannot access 'z' before initialization

const z = 2234;

// function expression
// {two:undefined}
// {two:()=>{}}

// two(); // undefined() //!TypeError: two is not a function
// var two = () => {
//   console.log("two");
// };
// two(); // ()=>{}()

// let b = undefined;
// b(); //

console.log(x); //

three(); //! ReferenceError: Cannot access 'three' before initialization
let three = () => {
  console.log(x); //
  console.log("three");
  var x = 10;
  console.log(x); //10
};
three(); // three
