//* function
// reusable block of code
// {}

//  12 + 23

//! function declaration
// function function_name() {
// function body
// }
//* function call/invocation
// function_name()

// console.log("Hello");
// let x = 40;
// function greet() {
//   console.log("Hello world");
// }

// //* function call/invocation
// greet();
// greet();
// greet();
// greet();
// greet();

// x -> f(x) y=x+1 -> o/p

//* function with input
//? parameter & arguments
// let name
// function greet(name, age) {
//   console.log("Hello ", name, age);
// }

// greet(27, "Ram"); // Hello Ram
// greet("John", 25);
// greet();

//* default parameter
function greet(name = "Guest") {
  console.log("Hello ", name);
}

// greet("John"); //
// greet(); //

// add() => x ->  f(x) -> y

//* return type
// function add(a = 0, b = 0) {
//   const sum = a + b;
//   return sum;
// }

// let x = 20;
// let y = 45;
// console.log(add(x, y));
// const a = add(2, 3);
// console.log(a);
// const b = add(2, 56);
// console.log(b);
// let result = add(45, 67);

// console.log(result);

//todo:
// user = {firstName:'John' , lastName:'Doe'}
// getFullName(user)  => return  fullname => "John Doe"

function getFullName(user) {
  // return user.firstName + " " + user.lastName;
  return `${user.firstName} ${user.lastName}`;
}

let user = { firstName: "John", lastName: "Doe" };
const fullName = getFullName(user);
// const fullName = getFullName({ firstName: "John", lastName: "Doe" });
console.log(fullName);

//* totalSum(numbers=[]) => sum each ele -> return total sum
// [1,2,3]  => totalSum([1,2,3]) =>  return 6

// function totalSum(numbers = []) {
//   let sum = 0;
//   if (numbers.length === 0) {
//     return 0;
//   }
//   for (let number of numbers) {
//     sum += number;
//   }

//   return sum;
// }

// console.log(totalSum([1, 2, 3])); // 6
// console.log(totalSum([])); // 0
// console.log(totalSum([12, 34, 5, 6, 78])); // 6
// console.log(totalSum()); //

//! function expression

// const subtract = function sub(a, b) {
//   return a - b;
// };

const subtract = function (a, b) {
  return a - b;
};

//* div

//* multiply

//

console.log(subtract(12, 34));

//! arrow function
// const div = (a, b) => {
//   const res = a / b;
//   return res;
// };

// const div = (a, b) => {
//   return a/b;
// };

const div = (a, b) => a / b;
console.log("div", div(10, 2));
// add
// sub

// isEven(num) => true/false
// function isEvenNum(number) {
//   if (number % 2 === 0) {
//     return true;
//   }
//   return false;
// }

function isEvenNum(number) {
  return number % 2 === 0;
}
const isEven = (number) => number % 2 === 0;

// console.log(isEvenNum(12), isEven(13));

//? rest parameter -> ...
// const sum = (a = 0, b = 0, c = 0, d = 0) => {
//   return a + b + c + d;
// };

// const sum = (...numbers) => {
//   console.log(numbers);
//   let sum = 0;
//   if (numbers.length === 0) {
//     return 0;
//   }
//   for (let number of numbers) {
//     sum += number;
//   }

//   return sum;
// };
// console.log(sum(12, 3));
// console.log(sum(12));
// console.log(sum());
// console.log(sum(1, 3, 5)); //4
// console.log(sum(1, 3, 5, 34)); //4
// console.log(sum(1, 3, 50, 34, 45, 6, 78)); //4

//* callback function
const parent = (callback) => {
  console.log("type of callback", typeof callback);
  console.log("Parent");
  const res = callback(12, 3);
  console.log(res);
  // child(12,3)
};

const child = (a, b) => {
  console.log("child", a, b);
  return a + b;
};

const callback = (a, b) => {
  console.log("callback", a, b);
  return a + b;
};
// let x = 34;
// add(x); //
// add(34);
console.log("-------------------");
parent(child); //
console.log("-------------------");
// parent(callback()); //
parent(callback);
console.log("-------------------");
parent(() => {
  console.log("arrow function");
});
console.log("-------------------");

parent(() => {});
console.log("-------------------");

parent(function (x, y) {
  console.log("function syntax", x, y);
  return x + y;
});
// parent(2 + 3);

// calculate(x,y,operation)
// add = (x,y) => {clg('')}
// calculate(12,3,add)  => add(12,3) => 15

// const calculateAge = (year) => {
//   const currentYear = new Date().getFullYear();
//   return currentYear - year;
// };

// console.log(calculateAge(1997));

//* calculateTotal(price , callback)

//festiveDiscount(price) => price - 15%
//studentDiscount(price) => price - 10%

//* TotalPrice(unit_price , quantity , callback) -> total_price

const calculateTotal = (price, callback) => {
  return callback(price);
};
const festiveDiscount = (price) => {
  return price - (price * 15) / 100;
};
const studentDiscount = (price) => {
  return price - (price * 25) / 100;
};
console.log(calculateTotal(100, festiveDiscount));
console.log(calculateTotal(100, studentDiscount));

//? higher order function

const outer = () => {
  console.log("outer");
  const inner = () => {
    console.log("inner");
    return 123;
  };
  return inner();
  // return inner;
};

// inner();

const a = outer();
// console.log(outer()); //
// outer();
console.log(a);
// a(); //

//* function factory
const add = (num1) => {
  const inner = (num2) => {
    return num1 + num2;
  };
  return inner;
};

const add5 = add(5); // {num1:5}
const add10 = add(10);

console.log(add5(10)); // 15
console.log(add5(20)); // 25
console.log(add10(20)); // 30

// const add1 = (num1) => (num2) => num1 + num2;
// const add15 = add1(15);
// console.log(add15(15));

//* IIFE -> immediately invoked function expression
(() => {
  console.log("IIFE");
})();

(function (a) {
  console.log("IIFE", a);
})(12);

(() => {
  console.log("IIFE123");
})();

//* recursive function
// fib
// 0 , 1 , 1 , 2 , 3 , 5 ->

// factorial  n  => 1 - n =>  sum

// 5! =>  5 * 4*3*2*1 =>
// 1! -> 1
// 0! -> 1

const factorial = (n) => {
  if (n === 0) return 1;

  return n * factorial(n - 1);
};

// 5 * fac(4)
// 5 * 4 * fac(3)
// 5 * 4 * * 3* fac(2)
// 5 * 4 * 3* 2 * fac(1)
// 5 * 4 * 3* 2 * 1 * fac(0)
// 5 * 4 * 3* 2 * 1 * 1 =>  120

console.log(factorial(10));
console.log(factorial(12));
console.log(factorial(0));

//* generator function

// function* counter() {
//   yield 0;
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const counterRef = counter();

// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());

function* counter() {
  console.log("A");
  yield 0;
  console.log("B");
  yield 1;
  console.log("C");
  yield 2;
  console.log("D");
  yield 3;
  console.log("E");
}

const counterRef = counter();

console.log(counterRef.next());
console.log(counterRef.next());
console.log(counterRef.next());
console.log(counterRef.next());
console.log(counterRef.next());

function* infiniteCounter() {
  let count = 0;
  while (true) {
    yield ++count;
  }
}
const c = infiniteCounter();
// console.log(c.next());
// console.log(c.next());
// console.log(c.next());
// console.log(c.next());
// console.log(c.next());
// console.log(c.next());

// while (true) {
//   console.log(c.next());
// }

//? function(seconds) => HH:MM:SS ->
//? 122  -> 00:02:02

//* padStart()
let x = 30;
console.log(x.toString().padStart(2, "0"));

const formatTime = (seconds) => {
  //? total hours
  // let hours = (seconds / 3600).toFixed(0);
  let hours = Math.floor(seconds / 3600);
  //? total minutes form remaining seconds

  //? remaining seconds

  let result = `${hours.toString().padStart(2, "0")}:02:02`;
  return result;
};

console.log(formatTime(3700));
