//* scope -> visibility or accessibility of a variable

//* global scope
var global_var = "global var";
let global_let = "global let";
const global_const = "global const";

//* block scope
if (true) {
  console.log("-----block----");
  var block_var = "block var";
  let block_let = "block let";
  const block_const = "block const";
  //   global_var = 1000;
  //   console.log(global_var);
  //   console.log(global_let);
  //   console.log(global_const);
  //   console.log(block_var);
  //   console.log(block_let);
  //   console.log(block_const);
}

// console.log(block_const); //
//   console.log(block_var);

//* function scope
function scope() {
  var function_var = "function var";
  let function_let = "function let";
  const function_const = "function const";
  console.log("-----function----");
  console.log(function_var);
  console.log(function_let);
  console.log(function_const);

  //   console.log(global_var);
  //   console.log(global_let);
  //   console.log(global_const);
}
scope();
// console.log(function_var); //! ReferenceError: function_var is not defined
// console.log(function_let); //! ReferenceError: function_let is not defined
// console.log(function_const); //! ReferenceError: function_const is not defined

// (() => {
//   if (true) {
//     var x = 12;
//   }
// })();

// console.log(x);

//* lexical scope
// function parent() {
//   let y = 20;
//   function child() {
//     let x = 12;
//     console.log(x, y);
//     function children() {
//       console.log(x, y); //
//     }
//     children();
//   }
//   child();
// }

// parent();

// const outer = () => {
//   let x = 22;
//   let y = 30;
//   const inner = () => {
//     // let y = 30;
//     console.log(x); // 22
//     console.log(y); // 30
//     y = 56;
//     x = 68;
//   };
//   inner();

//   console.log(x); // 68
//   console.log(y); //not defined , 56
// };
// outer();

// let x = 100;

// if (true) {
//   let x = 34;
//   if (true) {
//     console.log(x); // 34
//     x = 45;
//   }
//   console.log(x); // not defined,45
// }

// console.log(x); // 45 , 100

// let x = 40;

//* scope chain
function parent() {
  // let x = 20;
  function child() {
    // let x = 12;
    // console.log(x, y);
    function children() {
      let x = 10;
      // console.log(x, y); //
      // console.log(x);
      console.log(x);
    }

    children();
  }
  child();
}

parent();

//todo: hoisting
//todo: callstack
//todo: phases of execution: execution & memory creation phases

//* module scope
