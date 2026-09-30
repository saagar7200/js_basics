//! array -> list
// let num1 = 1;
// let num2 = 2;
// let num3 = 3;

let user1 = {};
let user2 = {};
let user3 = {};

//* new keyword / array constructor
// const arr = new Array(20); // [2] single argument -> array length

//* array literal
const numbers = [23, 45, 6, 78];
//* data -> element
//* position -> index : start from 0

//? reading array element
let firstEl = numbers[0];
numbers[1] = 100;
// console.log(firstEl);
// console.log(numbers[3]);

//* length
console.log(numbers.length);

//* adding new element
//! form end index
//? push()
// numbers.push(12);
// const res = numbers.push(12, 7, 8);
// console.log(res);
//! form 0 index
//? unshift()
// let res = numbers.unshift(12, 7, 8);
// console.log(res);

//* removing element
//! from end index
//? pop()
// const res = numbers.pop();
// console.log(res);
//! from 0 index
//? shift()
// numbers.shift();

//* splice(start_index , delete_count,...items)
// [10,20,30,40]
// numbers.splice(1,2,23,4,5,76) => [10,23,4,5,76,40]
// numbers.splice(1,0,23,4,5,76) => [10,23,4,5,76,20,30,40]
// numbers.splice(1,3) => [10]

//todo:numbers.includes(12):boolean , indexOf(12) , lastIndexOf()

console.log(numbers);
console.log(numbers.includes(12));
console.log(numbers.includes(23));
console.log(numbers.indexOf(6));
console.log(numbers.indexOf("ram"));
let a = [
  [12, 34],
  [34, 56, [12, 34, [23, [23, 4]]]],
];

console.log(a[1][1]);
console.log(a.flat(Infinity));
