//! scope
// visibility / accessibility of variables

//* global scope
var global_var = "Global Var";
let global_let = "Global let";
const global_const = "Global const";

// console.log(global_const, global_let, global_var); //

//* block scope {}
if (true) {
  var block_var = "block Var";
  let block_let = "block let";
  const block_const = "block const";
  console.log("block");
  //   console.log(global_const, global_let, global_var); //
  //   console.log(block_const, block_let, block_var); //
}

// console.log(block_const); //
console.log(block_var); //
// console.log(block_let); //

//* function scope
function scope() {
  var function_var = "function Var";
  let function_let = "function let";
  const function_const = "function const";
  console.log("function");
  //   console.log(global_const, global_let, global_var); //
  console.log(function_const, function_let, function_var); //
}
scope();

// console.log(function_const); //
// console.log(function_let); //
// console.log(function_var); //

//* lexical scope
function outer() {
  let x = "outer var";
  function inner() {
    console.log("inner");
    let y = 10;
    console.log(x);
    const fun = () => {
      console.log("fun");
      console.log(x);
    };
    fun();
  }

  inner();
}

// outer();

//* scope chain

// let x = 500;

function outer() {
  //   let x = "outer var";
  function inner() {
    console.log("inner");

    // let x = 10;
    console.log(x); //10
    const fun = () => {
      //   let x = 100;
      console.log("fun");
      console.log(x); //
    };
    fun();
  }

  inner();
}

// outer();

// if (true) {
//   if (true) {
//     let x = 30;
//     console.log(x); // 30
//     x = 100;
//   }
//   console.log(x); // ReferenceError: x is not defined
// }

let x = 500;

if (true) {
  let x = 30;
  if (true) {
    console.log(x); // 30
    x = 100;
  }
  console.log(x); // 100
}
console.log(x); // 500

//todo: callstack
//todo: execution context
//todo: memory creation & execution phase

//*  execution context
//? global EC
//? function EC

//* memory creation & execution phase
//? memory creation phase
// memory allocation
//  1. variable declaration
//  2. function declaration
// {a:undefined}
var a = 10;
console.log("1");

//? execution phase
//  1. variable initialization
// 2. function call
// {a:10}
//1

//! call stack  -> LIFO

function one() {
  console.log("one");
  function two() {
    console.log("two");
    function three() {
      console.log("three");
      var x = 10;
    }
    three();
  }
  two();
}
one();

// {one:(){}}

// three()
// two()
// one()
// GEC
// callstack
