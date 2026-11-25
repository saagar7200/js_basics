//* array -> list
// element ->
// key -> index
//* numbered indexed ->[start from 0]
// 1-10 , num1 - num10 ->
// let user1 = {};

// let user2 = {};

//! new keyword
// const arr = new Array(12, 3);

//! array literal
const numbers = [12, 34, 5, 4, 78, 87];

// console.log(arr, numbers);

//* accessing array element => []
const fEle = numbers[0];
// console.log(fEle);
// console.log(numbers[5]); //

//* length
const len = numbers.length;
// console.log(len);
// console.log(numbers[numbers.length - 1]);

//* adding new element
//! from end index
//? push
// array_name.push() -> end
const res = numbers.push(10, 34, 67);
// console.log(res);
// numbers.push(20);

//! from start index [0]
// ?unshift() => return length
numbers.unshift(21, 43);

//* removing element
//! from end index
//? pop()
const last_ele = numbers.pop();
// console.log(last_ele);

//! from start
//? shift()
// console.log(numbers.shift());

//* at()
// console.log(numbers.at(-3));
// +ve index -> left - right -> 0 ->
// -ve index -> right -> left -> lastIndex ->

// console.log(numbers[-1]);

//* slice  ->
const slice = numbers.slice(1, 4);
console.log(slice);

//* splice ->
// numbers.splice(start_index , delete_count , item1,item2,...,itemn)

const res1 = numbers.splice(2, 0, 123, 45, 678);
console.log(res1);

//* concat
// console.log(numbers.concat([1, 2, 3, 4, 5]));

//* join()
console.log(numbers.join(""));

//* includes()
//* array.includes(element)  -> return boolean

// console.log(numbers.includes(100)); -> false
// console.log(numbers.includes(10)); -> true

//* indexOf()
//  [12, 34,10, 34, 4,34,3,5,];
//array.indexOf(ele) => return index : -1
console.log(numbers.indexOf(100)); // -1
console.log(numbers.indexOf(10)); // 2

//* lastIndexOf()

console.log(numbers);
// array.lastIndexOf()
console.log(numbers.lastIndexOf(34)); // 5
console.log(numbers.indexOf(34)); //1

//*
// let users = [
//   {
//     _id: 1,
//     name: "John Doe",
//     email: "john@gmail.com",
//     password: "1234567654",
//   },
//   {
//     _id: 2,
//     name: "Alice Doe",
//     email: "alice@gmail.com",
//     password: "1234567654",
//   },
// ];

// console.log(users[1].email);

//

// push

//pop
