//! objects

//user: name , email , password , id
// let user_name = "John Doe";
// let user_email = "john@gmail.com";
// let user_password = "123456";
// let user_id = "1";

//! new keyword / object constructor
// let obj = new Object({
//   name: "abc",
// });

//! object literal => {}
//{ key:value , key:value }
let user = {
  id: 1,
  name: "John Doe",
  email: "john@gmail.com",
  password: "12345",
  // "is admin": true,
  isAdmin: true,

  // say
  //   key_to_read: "abc",
};

console.log(user["is admin"]);
//* accessing object properties
//? dot notation -> obj_name.key_name
const user_name = user.name;
console.log(user_name);
console.log(user.email);
console.log(user.password);

//? bracket notation -> object_name["<key_name>"]
console.log(user["password"]); // user.password
console.log(user["name"]); // user.name
console.log(user["id"]);

//! dynamic key
let key_to_read = "password";
console.log(user.key_to_read);
console.log(user["key_to_read"]); // user.key_to_read
console.log(user[key_to_read]); // user["password"]
let a = "password";
console.log(user[a]); // user["password"]
console.log(key_to_read); //

//* adding new properties
//? dot notation -> phone
user.phone = "9878764546";

//? bracket notation -> address -> Tinkune,Kathmandu
user["address"] = "Tinkune,Kathmandu";

console.log(user);

//* modifying properties
user.email = "johndoe@gmail.com";

delete user.phone;

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

let b = [
  ["id", 1],
  ["name", "John Doe"],
  ["email", "johndoe@gmail.com"],
  ["password", "12345"],
  ["address", "Tinkune,Kathmandu"],
];

console.log(Object.fromEntries(b));
console.log(Object.seal(user));
console.log(Object.freeze(user));
user.name = "abc";

console.log(user);
//* seal
//* freeze

//
let obj = {};

let key_to_add = "category_a";
// obj.key_to_add = 1;
obj[key_to_add] = 1;
console.log(obj);
