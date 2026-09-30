//* destructuring
let user = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  password: "123458765",
};

let user2 = {
  name: "Alice Doe",
  email: "alicedoe@gmail.com",
  password: "123458765",
};

// const name = user.name;
// const email = user.email;
// const password = user.password;

// const { name } = user;  //const name = user.name;

// const { name, email } = user;
// console.log(name, email);
const { name: user2Name, email: user2Email, password: user2Pass } = user2;
console.log(user2Name);
// console.log(name);

let numbers = [34, 56, 7, 8];

// let [a, b, c, d] = numbers;

// console.log(a, b);

//* rest operator
//?  ...
const { name, ...others } = user;

console.log(name);

console.log(others);
let [a, b, ...c] = numbers;
console.log(c);

//* rest parameter
// [12,4]
// [12]
// [12, 4, 45, 6, 8]
const totalSum = (...numbers) => {
  //   console.log(numbers);
  //   return a + b;
  return numbers.reduce((acc, num) => acc + num, 0);
};
console.log(totalSum(12, 4)); // 16
console.log(totalSum(12)); //
console.log(totalSum()); //
console.log(totalSum(12, 4, 45, 6, 8)); //

//* spread operator
// ...
let obj = {
  a: "a",
  b: "b",
};

let obj1 = {
  // obj: obj,
  ...obj,
  c: "c",
  a: 1,
};

const arr1 = [2, 3, 4, 5];
const arr2 = [34, 5, 6];
// const arr3 = new Set([...arr1, ...arr2]);
const arr3 = [...arr1, ...arr2];

console.log(obj1);
console.log(arr3);
