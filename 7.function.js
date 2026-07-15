//! function
// block of code that performs specific task.
// reusable block of code.
// { }
// task a , task b

//* function declaration
//? function function_name (){
// block of code
//? }

//? invocation / call
//* function_name()

// function greet() {
//   console.log("Good Morning " );
// }

// // call
// greet(); //
// greet(); //
// greet(); //
// greet(); //

//* input type
//? parameter & argument
// function greet(name) {
//   console.log("Good Morning ", name);
// }

// greet("Ram"); // 'Ram
// greet("John"); // John

//* default parameter
// function greet(name = "Guest") {
//   console.log("Good Morning ", name);
// }

// greet("Ram"); // 'Ram
// greet("John"); // John
// greet();

//* function with return type
function greet(name = "Guest") {
  //   const message = `Good Morning ${name}`;
  //   return message;

  return `Good Morning ${name}`;
}

// const message = greet("Ram"); // 'Ram
// console.log(message); //
// console.log(greet("John")); // John
// console.log(greet()); //

//add()

function add(a = 0, b = 0) {
  //   let sum = a + b;
  //   return sum;

  return a + b;
}

console.log(add(12, 8));

// sum(arr)  => totalSum
function sum(numbers = []) {
  let res = 0;

  for (let i = 0; i <= numbers.length - 1; i++) {
    res += numbers[i];
  }
  return res;
}

console.log(sum([1, 2, 3, 4, 5]));
// getFullName(user)  =>

function getFullName(user) {
  return `${user.first_name} ${user.last_name}`;
}

let u = { first_name: "John", last_name: "Doe" };

// console.log(getFullName(u));
// console.log(
//   getFullName({
//     first_name: "John",
//     last_name: "Doe",
//   }),
// );

//* function expression
// let x = 20;
// let x = 20 + 2;

// if(true){
//     let x = 45 + 6
// }

// function sub(a, b) {
//   return a - b;
// }
// sub(12, 3);

// const sub = function (a, b) {
//   return a - b;
// };
// sub(12, 3);

// const sub = (a, b) => {
//   return a - b;
// };
// sub(12, 3);

// console.log(sub(12, 4));

// let div = function (a, b) {
//   return a / b;
// };

//! arrow function
// let div = (a, b) => {
//   return a / b;
// };

let div = (a, b) => a / b;
// let square = a => a * a;

// console.log(div(12, 6)); //

//! callback function

const parent = (callback) => {
  console.log(callback); //
  console.log("parent");
  const res = callback(23);
  console.log(res);
};

const child = (a) => {
  console.log("child", a);
  return 100 * a;
};

// const res = child();
// parent(child()); //  parent(res)

// parent(child);
// let x = 34;

// sq(10);
// sq(x);

// parent((a) => {
//   console.log("child 1", a);
//   return 100 * a;
// });

// parent(function (a) {
//   console.log(a);
//   return a * 12;
// });

//! higher order function

const outer = () => {
  console.log("outer");
  const inner = () => {
    console.log("inner");
    return 100;
  };
  return inner;
};

const a = outer();
console.log(a);
a();

//! calculate(a,b,operation)
// showResult()

const calculate = (a, b, callback) => {
  console.log(a, b, callback);
  const res = callback(a, b);
  // console.log("result is: ", res);
};

const add1 = (a, b) => {
  return a + b;
};
// const sub = (a, b) => {
//   return a - b;
// };

// let x = 10;
// calculate(12, 4, add1);

// calculate(10, 4, (a, b) => {
//   return a - b;
// });

// calculate(12, 6, (a, b) => a / b);

//! recurring

//* IIFE
// (function (num) {
//   console.log("IIFE", num);
// })(10);

// (() => {
//   console.log("IIFE");
// })();

//* generator function

// function* Counter() {
//   console.log("start");
//   yield 1;
//   console.log("mid");
//   yield 2;
//   console.log("processing");
//   yield 3;
//   console.log("end");
// }

// const counter = Counter();
// console.log(counter);
// console.log(counter.next().value);
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());

function* Counter() {
  let count = 1;
  while (true) {
    yield count++;
  }
}

const counter = Counter();

// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());

//* async function

// 5!  ->

const factorial = (num) => {
  // console.log(num);
  if (num === 1 || num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
  // console.log(res);
};

console.log(factorial(5));
console.log(factorial(10));
