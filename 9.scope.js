//* scope
//! global scope
var global_var = "global var";
let global_let = "global let";
const global_const = "global const";

// console.log(global_const, global_let, global_var);
//! block scope
if (true) {
  console.log("-----block-----");
  //   console.log(global_const, global_let, global_var); //
  var blocks_var = "blocks var";
  let blocks_let = "blocks let";
  const blocks_const = "blocks const";
  //   console.log(blocks_const, blocks_let, blocks_var);
}

// console.log(blocks_let); //! referenceError: blocks_let is not defined
// console.log(blocks_const); //! referenceError: blocks_const is not defined
// console.log(blocks_var);

//! function scope

function scope() {
  //
  console.log("-----function-----");
  //   console.log(blocks_var);
  //   console.log(global_const, global_let, global_var); //
  var function_var = "function var";
  let function_let = "function let";
  const function_const = "function const";
  //   console.log(function_const, function_let, function_var);
}
scope();
// console.log(function_const); //!ReferenceError: function_const is not defined
// console.log(function_let); //!ReferenceError: function_let is not defined
// console.log(function_var); //!ReferenceError: function_var is not defined

//! lexical scope
// function parent() {
//   let x = "parent ";
//   function child() {
//     let y = "child";
//     console.log(x);
//     // x = 445678;
//     console.log(y);
//     // console.log(x);
//   }
//   //   console.log(y); //! ReferenceError: y is not defined
//   child();
// }
// parent();

// {y:450}

// let y = 120;
// console.log(y);

// if (true) {
//   let y = 100;
//   if (true) {
//     console.log(y); //100
//     y = 500;
//     console.log(y); // 500 , 100
//     y = 450;
//   }
//   console.log(y); // 450
// }
// console.log(y); // 120

//* scope chain

let y = "global";

function parent() {
  //   let y = "parent ";
  console.log(y);
  function child() {
    let y = "child";
    console.log(y); //
  }
  child();
}
parent();

//! module scope

//todo: hoisting
