//! closure

// function outer(a, b) {
//   let x = 10;

//   console.log(x);
// }

// outer(10, 23); //
// outer(34, 56);
// outer();
// outer();

// scope {x:10}
// parameter {a:10 , b:23}

//
//
// callstack

// const outer = () => {
//   let x = "outer";

//   const inner = () => {
//     console.log(x);
//   };
//   //   inner();
//   return inner;
// };
// console.log(x)

// const child = outer();
// child();

//! private variable
// const Counter = (initial = 1) => {
//   let count = initial;

//   const increment = () => {
//     return count++;
//   };

//   return increment;
// };

// const counter = Counter(); //{count:5 }
// const counter1 = Counter(2); // {count :5}
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter1()); // 1
// console.log(counter()); // 3
// console.log(counter1()); // 2
// console.log(counter()); // 4
// console.log(counter1()); // 3

const Counter = (initial = 1) => {
  let count = initial;

  const inc = () => {
    return count++;
  };

  const decrement = () => {
    return count--;
  };

  return {
    increment: inc,
    decrement,
  };
};

// const counter = Counter(); //{count:5 }
// const counter1 = Counter(2);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.decrement());

//! function factory
// 10 add 5
// 10 add 10
// 10 add 15
const add = (factor) => {
  return (num) => {
    return factor + num;
  };
};

// const add5 = add(5); // {factor:5}
// const add10 = add(10); //  {factor:10}
// console.log(add5(10));
// console.log(add5(100));
// console.log(add5(30));

// console.log(add10(12));

//! caching

function calculate() {
  let cache = {};

  return (num) => {
    if (cache[num]) {
      console.log("cache");
      return cache[num];
    }
    console.log("calculating");
    for (i = 0; i <= 999999999; i++) {}

    cache[num] = num * num;
    return cache[num];
  };
}

const square = calculate();
// console.log(square(2));
// console.log(square(2));
// console.log(square(4));
// console.log(square(2));
// console.log(square(2));
// console.log(square(4));
// console.log(square(4));
