//? this keyword
// special keyword
// usually object

// this => {}
// this => {name:'',email:''}

// module.exports.name = "John Doe";
// module.exports.email = "john@gmail.com";

// module.exports = {name:''abc}
// module.exports = {
//   name: "abc",
// };
// console.log(this.name); //

// function a() {
//   console.log(this);
// }

// a();

//* object method
// let user = {
//   name: "John Doe",
//   getName() {
//     console.log(this.name); // user.name
//     console.log(this);
//   },
// };

// user.getName(); //

//! Lose context
// const fn = user.getName;

// fn(); //

//* arrow function
// let user = {
//   name: "John Doe",
//   getName: () => {
//     console.log(this.name);
//     console.log(this);
//   },
// };

// let user = {
//   name: "John Doe",
//   getName() {
//     const inner = () => {
//       console.log(this.name);
//       console.log(this);
//     };
//     inner();
//   },
// };

// let user = {
//   name: "John Doe",
//   getName() {
//     // const inner = () => {
//     //   console.log(this.name);
//     //   console.log(this);
//     // };
//     // inner();

//     // setTimeout(function () {
//     //   console.log("timeout", this); //? global
//     // }, 1000);

//     setTimeout(() => {
//       console.log("timeout", this); //? user
//     }, 1000);
//   },
// };

// user.getName(); //

//* class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getEmail() {
    console.log(this.email);
  }
}

const obj = new User("Alice", "alice@gmail.com"); //
const obj1 = new User("Ram", "ram@gmail.com"); //

obj.getEmail(); //  -> this -> obj
obj1.getEmail(); //  -> this -> obj1

// new => {} <- this
// this.name  => {name:''}
// this.email  => {name:'' , email:''}

//* function object
function outer() {
  console.log("outer function");
}

outer.introduce = "outer function";

console.log(outer.name); //
console.log(outer.introduce); //

//! call , apply & bind
function getName(country, city) {
  console.log(this.name);
  console.log(country, city);
}

let user = {
  name: "John Doe",
};
let user1 = {
  name: "Ram Doe",
};

//* call
getName.call(user, "Nepal", "kathmandu");
getName.call(user1, "India");

//* apply
console.log("----apply---");

getName.apply(user, ["Nepal", "Kathmandu"]);
getName.apply(user1, ["Japan"]);

//* bind
console.log("----bind---");
const newFn = getName.bind(user, "Nepal", "kathmandu");
newFn();
newFn();
newFn();
newFn();
