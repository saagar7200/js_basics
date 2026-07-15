//! Array
// list
//? element
//? numbered index  -> start from 0
//? 0th indexed

// let num = 1;
// let num1 = 2;

//! Array constructor / new keyword
const arr = new Array(); // []

// const ar = Array.from()
//! array literal
const numbers = [1, 2, 3, 4];

// console.log(arr, numbers);

let el = numbers[0];
console.log(el);
console.log(numbers[0]);

console.log(numbers[2]);
console.log(numbers[3]);

//* adding new element
//! form end
//? arr.push()
// numbers.push(12); //
const a = numbers.push(12, 45, 67); //
// console.log("a", a);
// console.log(numbers);

//?! from start index
numbers.unshift(34, 21);

console.log(numbers);

//* remove element
//! from end
// const b = numbers.pop(); //
// console.log("b", b);

//! from start
// arr.shift()
// const b = numbers.shift();
// console.log("b", b);

//* length
console.log(numbers.length); //

console.log(numbers.push(69, 45));
console.log(numbers[numbers.length - 1]);

// console.log(numbers[-1]);
console.log(numbers);

//* at()
console.log(numbers.at(0)); // numbers[0]
console.log(numbers.at(-1)); // last index
console.log(numbers.at(-3)); //

//* splice(start_index , delete_count , el1,el2 ,....elen)

// [1,2,3,4]
// const b = numbers.splice(2, 0, 10, 100, 200);  // / [1,2,3,4] =>   [1,2,10,100,200,3,4]
// console.log(b);

// numbers[1] = 30;
// numbers.splice(1, 1, 30,20); // [1,30,20,3,4] =>
// numbers.splice(1, 2); // [1,2,3,4] => [1,4]

//* searching

//? includes
// arr.includes(el)  => return boolean
// [21,3,45,4,5,45]
console.log(numbers.includes(21));
console.log(numbers.includes(210));

//* indexOf
//? arr.indexOf(el)  -> return index
console.log(numbers.indexOf(21)); //
console.log(numbers.indexOf(210)); // -1
console.log(numbers.indexOf(45)); //7

//* lastIndexOf()
console.log(numbers.lastIndexOf(45)); //

console.log(numbers.concat([12, 34]));

// [1,2,3]
console.log(numbers.join("-")); // '1-2-3'
console.log(numbers.join("*")); // '1*2*3'

console.log(
  [
    [23, 45, [23]],
    [22, 4],
  ].flat(2),
);

let users = [{ name: "abc", email: "" }];

users.push({ name: "xyz", email: "" });

console.log(users);
console.log(users[0]);

//! array methods
