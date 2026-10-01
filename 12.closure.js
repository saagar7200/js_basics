// function outer() {
//   let x = 10;
//   function inner() {
//     console.log(x); //
//   }
//   return inner;
// }

// const a = outer(); // {x:10}
// a();

// const Counter = () => {
//   let x = 0;

//   const increment = () => {
//     x++;
//     console.log(x);
//   };

//   //decrement

//   return increment;
// };

// const counter = Counter(); //{x:3}
// const counter1 = Counter(); // {x:4}
// counter(); // 1
// counter1(); // 1
// counter(); //2
// counter1(); // 2
// counter1(); // 3
// counter1(); // 4
// counter(); // 3

const Counter = (x = 0) => {
  // let x = count;

  const increment = () => {
    x++;
    console.log(x);
  };
  //decrement
  const decrement = () => {
    x--;
    console.log(x);
  };

  const obj = {
    increment: increment,
    decrement,
  };

  return obj;
  // return increment;
  // return decrement;
};

const counter = Counter(); //{x:3}
const counter1 = Counter(10); // {x:4}

counter.increment(); //1
counter.increment(); //2
counter.increment(); //3
counter.decrement(); // 2
counter1.increment(); //1

//! function  factory
const add = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};
// const add5 = add(5); // {num1:5}
// const add25 = add(25); // {num1:25}
// console.log(add5(10)); //15
// console.log(add5(20)); //25
// console.log(add25(5)); //30

// createAccount(acc_name , initial_blc) =>
// deposit(amt) , withdraw(amt) , blc_inq ,

//! caching
const calculate = () => {
  let cache = {};

  return (num) => {
    if (cache[num]) {
      console.log("from cache");
      return cache[num];
    }
    console.log("calculating....");
    cache[num] = num * 100;
    return cache[num];
  };
};

const cacheFun = calculate();

console.log(cacheFun(2));
console.log(cacheFun(3));
console.log(cacheFun(2));
console.log(cacheFun(2));
console.log(cacheFun(2));
console.log(cacheFun(4));
console.log(cacheFun(4));
console.log(cacheFun(4));
