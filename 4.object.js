//* object

// let userName = "";
// let userEmail = "";
// let userPassword = "";

//* new keyword/ object constructor
// const obj = new Object({ name: "john" });

//* object literal -> {}
let user = {
  // key:value
  _id: 1,
  name: "John Doe",
  email: "john@gmail.com",
  password: "12345687654",
};

//* accessing object properties
//? dot notation
const userName = user.name;
console.log(userName);
console.log(user.password);
console.log(user.abc); //? undefined

//? bracket notation -> []
console.log(user["email"]); // user.email

//
//* space in key
// console.log(user.full name)
console.log(user["full name"]);

//* dynamic key
let key = "name";
let key1 = "email";
key = "password";
//
// console.log(key); //
// console.log(user.key); //
// console.log(user[key]); // user["name"] -> user search
// console.log(user[key1]); // user["email"]

//* adding new properties
// dot notation
// user.phone = "9878767656";
let phone = "phone_number";

// bracket
user[phone] = "09878767656";

//* modify
user.name = "Ram Adhikari";
user["email"] = "ram@gmail.com";

// console.log(user);

//* delete
// delete user.phone_number;
// console.log(user);

// console.log(user.hasOwnProperty("full_name"));
//todo: destructuring , rest operator , spread operator

//* destructuring
// let u = {
//   _id: 1,
//   name: "John Doe",
//   email: "john@gmail.com",
//   password: "12345687654",
// };
let u1 = {
  _id: 1,
  name: "John Doe 1",
  email: "john@gmail1.com",
  password: "12345687654",
};
// let u_name = user.name;
// let u_email = user.email;
// let u_password = user.password;
// console.log(u_email, u_name, u_password);
// let name = "abc";
// let { name, email, password, _id } = u;
// console.log(u.key);
let { name: u_name, email: u_email } = u1;

// console.log(email, name, password);
// console.log(u_email, u_name, password);

// let numbers = [12, 34, 5, 67];
// let [a, b, c] = numbers;
// console.log(a, b, c);

//* rest operator
// ...

// let { name, email, ...rest } = u;
// console.log(name);
// console.log(rest);

// const [x, y, ...z] = numbers;
// console.log(z);

//* spread operator
// ...

let obj = {
  a: 1,
  b: 2,
};

let obj1 = {
  c: 3,
  d: 4,
  a: "a",
};

let o = {
  ...obj1,
  ...obj,
};
console.log(o);

console.log(obj1);

let num = [45, 67, 90];
let numbers = [12, 34, 5, 67, ...num];
console.log(numbers);
const new_arr = [...numbers, ...num];
console.log(new_arr);

//

let u = {
  _id: 1,
  name: "John Doe",
  email: "john@gmail.com",
  password: "12345687654",
};

// array of values
const values = Object.values(u);
console.log(values);

// keys
const keys = Object.keys(u);
console.log(keys);

// [[_id , 1],[name , 'John Doe'],[]]
const entries = Object.entries(u);
console.log(entries);

const e = [
  ["_id", 1],
  ["email", "john@gmail.com"],
  ["name", "John Doe"],
  ["password", "12345687654"],
];

const o1 = {
  _id: 1,
  email: "john@gmail.com",
  name: "John Doe",
  password: "12345687654",
};

console.log(e[0][1]);
console.log(e[1][1]); // name

console.log(o1._id);
console.log(o1.name);
// const user2 = Object.fromEntries(e);
// console.log(user2);
