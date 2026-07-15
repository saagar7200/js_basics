//! object

// user
// let user_name = "john";
// let user_email = "";
// let user_password = "";

//! new keyword / object constructor
const obj = new Object(); //{}
const o = {};

// console.log(obj, o);

//! object literal {}
let user = {
  name: "john",
  email: "john@gmail.com",
  password: "1234567654",
};

//* accessing object properties
//? dot notation  .
console.log(user.name);
let name = user.name;
console.log(name);

//? bracket notation []
console.log(user["email"]);

//* adding new property
console.log(user);
//? dot
user.age = 28;
//? bracket
user["address"] = {
  city: "kathmandu",
  country: "NPL",
};

//* modify
user.name = "John Doe";

// //! delete
// delete user.address;
// console.log(user);
// console.log(user.address.city);
// console.log(user["address"]["city"]);

let key = "password";
// console.log(user.key); //
console.log(user[key]); // user['password']

console.log(user["full name"]);
