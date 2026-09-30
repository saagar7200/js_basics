//* function
// {}

// const res = 12 + 34
// const res = 102 + 340
// const res = 10 + 34

//

// console.log("hello");

//* syntax
//  function function_name (){
// block / function body
// }

//* function invocation/call
// function_name()

// x -> f(x):x + 2 -> y

// function greet() {
//   console.log("Hello World");
// }

// // call
// greet(); // hello ram
// greet(); // hello john
// greet();
// greet();
// greet();

//* function with input
//* function with parameter & argument
// function greet(name) {
//   console.log("Hello ", name);
// }

// // call
// greet("Ram"); // hello ram
// greet("John"); // hello john

//* default parameter
// function greet(name = "Guest") {
//   console.log("Hello ", name);
// }

// // call
// greet(); // hello undefined
// greet("Ram"); // hello ram
// greet("John"); // hello john

// function add(num1 = 0, num2 = 0) {
//   const sum = num1 + num2;
//   console.log(sum);
// }
// add(12, 4);
// add(12, 40);
// add(120, 4);
// add();

// x-> f(x) -> return result [y]
function greet(name = "Guest") {
  //   console.log("Hello ", name);
  let message = "Hello" + " " + name;
  return message;
}

// call
const res = greet(); // hello undefined
console.log(res);
const re1 = greet("Ram"); // hello ram
console.log(re1); //
const re2 = greet("John"); // hello john
console.log(re2);

//sub(a,b) return a-b

// function sub(a, b) {
//   let result = a - b;
//   return result;
// }

function sub(a, b) {
  //   let result = a - b;
  //   return result;
  return a - b;
}

const res1 = sub(23, 5);
// console.log(res1); //
// console.log(sub(24, 4)); // 20
//* function declaration
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(12, 4));

//* function expression
let x = 45;
const multiply = function (a, b) {
  return a * b;
};
// const y = x;

const res12 = multiply(12, 4);
// console.log(res12);

// arrow function
const div1 = (a, b) => {
  return a / b;
};

const div = (a, b) => a / b;
let x1 = 23;
let y = 12;

console.log(div(12, 3)); // 4
console.log(div(12, 6)); // 4

const user = {
  firstName: "John",
  lastName: "Doe",
};

// const full_name = user.firstName + " " + user.lastName;
// const full_name1 = `${user.firstName} ${user.lastName}`;

// getFullName(user) => return full_name

//* declaration
function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}
console.log(getFullName(user));
//* expression
const getFullNameExp = function (user) {
  return `${user.firstName} ${user.lastName}`;
};
console.log(getFullNameExp({ firstName: "Alice", lastName: "Doe" }));
//* arrow
const getFullNameArrow1 = (user) => {
  return `${user.firstName} ${user.lastName}`;
};

const getFullNameArrow = (user) => `${user.firstName} ${user.lastName}`;

//* callback function
const parent = (callback) => {
  console.log("callback", callback);
  console.log("parent");
  callback();
};

const child = () => {
  console.log("child");
  return 100;
};

parent(child); //
// child();

// parent(child()); //

// const ab = () => {
//   console.log("arrow call back");
// };

// parent(ab);
// parent(() => {
//   console.log("arrow call back");
// });

//* higher order function
//? 1. take function  input
const hof = (callback) => {
  callback();
};
hof(() => {
  console.log("callback function");
});
//? 2. return a function
const outer = () => {
  const inner = () => {
    console.log("inner");
    return 100;
  };
  return inner;
};
const innerFunction = outer();
innerFunction();

// 1 & 2

//*
const calculate = (a, b, operation) => {
  operation(a, b);
};

const addition = (num1, num2) => {
  console.log(num1 + num2);
};
calculate(10, 12, addition);

calculate(10, 12, (num1, num2) => {
  console.log(num1 - num2);
});

//* calculateTotalAmount(amount , callback)

// amount - amount * % / 100

//* festiveDis => 15%
//* studentDis => 10%

const calculateTotalAmount = (amount, callback) => {
  const totalAmt = callback(amount);
  console.log("total payable amount is:", totalAmt);
};

const festiveDiscount = (amount) => {
  return amount - amount * 0.15;
};

const studentDiscount = (amount) => {
  return amount - amount * 0.1;
};

calculateTotalAmount(1000, festiveDiscount);

calculateTotalAmount(1000, studentDiscount);

calculateTotalAmount(1000, (amount) => {
  return amount - amount * 0.2;
});

//* function factory
const addition1 = (factor) => {
  const inner = (num) => {
    return factor + num;
  };
  return inner;
};

const add10 = addition1(10);
console.log(add10(5)); // 15
console.log(add10(10)); // 20
const add20 = addition1(20);
console.log(add20(5)); // 25
console.log(add20(10)); // 25

//* IIFE
((a) => {
  console.log("IIFE", a);
})(10);
(function (a) {
  console.log("IIFE", a);
})(10);

//* generator function

function* numberGenerator() {
  console.log("A");
  yield 1;
  console.log("B");
  yield 2;
  console.log("c");
  yield 3;
  console.log("d");
}

const generator = numberGenerator();
console.log(generator.next());
console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
