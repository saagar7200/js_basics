//! this keywords
// this  -> object

//?
// module.exports = {};
// this => module.export = {}

// module.exports.name = "John";
// module.exports = {name:''};
// this => module.export = {name:''}
// module.exports = {
//   name: "John",
//   age: "18",
// };
// module.exports.email = "";

// module.exports = {name:'' , age:''};

// module.exports = {name:'john'};
// console.log(this);
// module.exports

//! function
// function a() {
//   console.log(this);
// }
// a(); // global object

// const user = {
//   name: "John Doe",
//   getName() {
//     console.log(this.name); // user.name
//   },
// };

// user.getName(); //

// const user = {
//   name: "John Doe",
//   a: () => {
//     console.log(this); //
//   },
// };

// user.a();

//! arrow
// const user = {
//   name: "John Doe",
//   getName() {
//     const a = () => {
//       console.log(this); //
//     };
//     a();
//   },
// };

// user.getName(); //

//!
// const user = {
//   name: "John Doe",
//   age: 27,
//   getName() {
//     console.log(this.name); //
//   },
// };

// let user1 = {
//   name: "Alice",
// };
// user1.age = user.age;
// user1.getName = user.getName;

// user1.getName(); //? Alice

//! Loosing context
// const user = {
//   name: "John Doe",
//   age: 27,
//   getName() {
//     console.log(this.name); //
//   },
// };

// console.log(user.email);

// const fn = user.getName;
// fn();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

// const user = new User("John Doe", 28); // {name:'' ,age:'' , getName(){}}

//   {} -> this
// {name:''} -> this
// {name:'',age:18} -> this
// return this

const user1 = new User("Alice", 28);
// {}  -> this
//
console.log(user.getName()); //
console.log(user1.getName()); //

//todo: function object , call , apply , bind methods
