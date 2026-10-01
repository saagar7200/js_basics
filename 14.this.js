//* this keyword

// function getName() {
//   // console.log("John Doe");
//   console.log(this.name); // user.name
//   console.log(user.name);
// }

// const user = {
//   name: "John Doe",
//   //   getName() {
//   //     console.log(this.name); // user.name
//   //     console.log(user.name);
//   //   },
//   getName,
// };

// user.getName(); //

// const user = {
//   name: "Ram Adhikari",
//   getName() {
//     console.log(this);
//     console.log(this.name); // user.name
//   },
// };

// user.getName(); //

//! loosing context
// let fn = user.getName;
// fn(); //

const user = {
  name: "Ram Adhikari",
  getName() {
    const arrow = () => {
      console.log(this.name); // user.name
    };
    // function arrow() {
    //   console.log(this);
    //   console.log(this.name); // user.name
    // }
    arrow();
  },
};

user.getName();

//* function object
// function js() {
//   console.log("js function");
// }
// js();
// js.language = "javascript";

// console.log(js.name); //
// console.log(js.language); //

//todo: apply, call & bind methods

function getName(city, age) {
  console.log(this.name);
  console.log(city, age);
}

let user1 = {
  name: "John Doe",
  email: "john@gmail.com",
};

let user2 = {
  name: "Bob Doe",
  email: "bob@gmail.com",
};

//* apply
console.log("------apply----");
getName.apply(user1, ["Ktm", 27]); //
getName.apply(user2, ["Pkr", 27]);

//* call
console.log("------call----");
getName.call(user1, "Btr", 28);
getName.call(user2, "Btr", 30);

//* bind
console.log("------bind----");
const fn = getName.bind(user1, "Btr", 28);
const fn2 = getName.bind(user2, "Btr", 28);
fn();
// fn();
// fn();
fn2();
// fn2();
// fn2();
// fn2();
// fn2();
