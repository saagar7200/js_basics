//* hoisting

// var a;

// console.log(a); // undefined
// var a = 10;
// // a = 10;

// console.log(a); // 10

// //* function declaration

// hoist();

// function hoist() {
//   console.log("hoist");
// }
// // hoist();

// //* let
// console.log(b);
// let b = 20;

// // console.log(c);
// const c = 40;

//! TDZ -> Temporal Dead Zone

//* function expression

// console.log(d); // undefined

// d(); //
// var d = 12;

// console.log(hoistFunction); //undefined
// hoistFunction(); // undefined()

// var hoistFunction = function () {
//   console.log("hoist function");
// };

// hoistFunction();

// let hoistFunction = function () {
//   console.log("hoist function");
// };

//*
//* phases of code execution
//? 1. memory creation phase
// {memory allocation}
//? 2. execution phase
// { variable initialization ,  parameter initialization , code execution  }

//?memory  {a:20 , hoist:(){}}
console.log(x); // undefined
var x = 20; //
console.log(x); // 20

let y = 12;

const z = 34;
// console.log(b); // undefined , not defined

hoist(); // hoist
function hoist() {
  // var b
  // console.log(b); // undefined ,
  let b = 12;
  console.log("hoist");
}
hoist(); // hoist

//* callstack -> LIFO

//
//
//
//callstack

//log: a b c

function a(b) {
  let x = 10;
  console.log("a");

  function b() {
    let x = 10;

    console.log("b");
    function c() {
      let x = 10;

      console.log("c");
    }
    c();
  }
  b();
}

a(10); // fec -> MCP & EP
a(20); // fec -> MCP & EP
// a();
// a();

//* execution context

//* GEC ->
//*

// cs
