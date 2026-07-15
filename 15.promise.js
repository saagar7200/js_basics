//! promise
// object
// represents eventual completion or failure of a async task

//* states
//? pending
//? resolved / fulfilled
//? rejected
// const promise = new Promise((resolve, reject) => {
//   //task
//   setTimeout(() => {
//     // success

//     // resolve("promise resolved");
//     reject({ message: "error" });
//   }, 2000);
// });

// console.log("start");
// console.log(promise);
// //! handling promise
// // then & catch
// promise
//   .then((data) => {
//     console.log("then", data);
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   });
// console.log("end");

// const promiseFunction = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const error = false;
//       if (error) {
//         reject({ message: "Something went wrong" });
//       } else {
//         resolve({ data: "success data" });
//       }
//     }, 2000);
//   });
// };

//! handling
// const pr = promiseFunction();
// pr.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// promiseFunction()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* fetchUser
// const fetchUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const error = false;
//       console.log("user fetched");

//       const user = {
//         _id: 10,
//         name: "John Doe",
//         email: "john@gmail.com",
//       };

//       if (error) {
//         reject({ message: "user fetch failed" });
//       } else {
//         resolve(user);
//       }
//     }, 2000);
//   });
// };

// fetchUser((error, user) => {
//   if (error) {
//   }
//   console.log(user);
// });

//! handling promise
// fetchUser()
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const fetchPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      console.log("posts fetched");
      const posts = [
        {
          _id: 1,
          userId: userId,
          title: "Post 1",
        },
        {
          _id: 2,
          userId: userId,
          title: "Post 2",
        },
      ];
      if (error) {
        reject({ message: "posts fetch failed" });
      } else {
        resolve(posts);
      }
    }, 1000);
  });
};

//! promise chain
// fetchUser()
//   .then((user) => {
//     console.log(user);
//     return fetchPosts(user._id);
//   })
//   .then((posts) => {
//     console.log(posts);
//     // return fetchPosts(posts[0]._id);
//   })
//   //   .then((comments) => {
//   //     console.log("comments");
//   //     console.log(comments);
//   //   })
//   .catch((error) => {
//     console.log(error);
//   });

//* fetch
// fetch(url) -> return promise

// console.log("start");
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log("success");
//     // console.log(response);
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log("end");

//! async/await
//! try/catch
//* syntatic sugar over promises

//? async function

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      console.log("user fetched");

      const user = {
        _id: 10,
        name: "John Doe",
        email: "john@gmail.com",
      };

      if (error) {
        reject({ message: "user fetch failed" });
      } else {
        resolve(user);
      }
    }, 2000);
  });
};

const getData = async () => {
  try {
    console.log("async start");
    const user = await fetchUser();
    console.log(user);
    const posts = await fetchPosts(user._id);
    console.log(posts);
  } catch (error) {
    console.log("catch");
    console.log(error);
  }
};

// console.log("start");
// getData();
// console.log("end");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log("success");
//     // console.log(response);
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getAllUser = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/10",
    );
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

// getAllUser();

//* Promise.all() =>  -> 5 ->
//* Promise.allSettled() -> 5 ->
//* Promise.race() -> 5 ->
//* Promise.any() -> 5 ->

//! js  es6
//* let const
//* template literal ``
//* class
//* enhanced object literal  => {}
// let key = "name";
// let user = {
//   [key]: "john",
//   // getName: function () {
//   //   return this.name;
//   // },
//   getName() {
//     return this.name;
//   },
// };

//* spread op
//* rest op  ...
//* destructuring
//
let user = {
  name: "john",
  email: "john@gmail.com",
  password: "1234567654",
};
// const name = user.name;
// const email = user.email;
// const { name, email, password } = user;
// let { name: user_name, ...x } = user;
// console.log(user_name);

//* arrow function
//* default parameter
//* rest parameter ...
const add = (...numbers) => {
  console.log(numbers);
  return numbers.reduce((acc, num) => acc + num, 0);
  // return a + b;
};

console.log(add(12, 3));
console.log(add(12, 3, 45));
console.log(add(12, 3, 45, 5, 6, 79));

//* map , filter , reduce

//! ES module  -> import/export

//* map , set
