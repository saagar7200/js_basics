//! promise
// promise -> object represents eventual completion or failure of a async task

//* creating promise
//? promise constructor

//* states/status
//? pending
//? fulfilled
//? rejected

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("promise resolved");
//     reject("promise failed");
//   }, 2000);
// });

// console.log(promise);
//! handling promise
// promise
//   .then((data) => {
//     console.log("success");
//     console.log(data);
//     // console.log("task completed");
//   })
//   .catch((error) => {
//     console.log("error");
//     console.log(error);
//     // console.log("task completed");
//   })
//   .finally(() => {
//     console.log("finally");
//     console.log("task completed");
//   });
// console.log("end");

//*
const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isError = false;
      if (!isError) {
        resolve({
          message: "user fetched",
          data: {
            _id: 100,
            name: "Joh Doe",
            email: "john@gmail.com",
          },
        });
      } else {
        reject({
          message: "user fetched failed",
          data: null,
        });
      }
    }, 3000);
  });
};

//! handling user promise
// fetchUser()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! posts
const fetchPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isError = false;
      if (!isError) {
        resolve({
          message: "posts fetched",
          data: [
            {
              _id: 1,
              title: "Post 1",
              userId: userId,
            },
            {
              _id: 2,
              title: "Post 2",
              userId: userId,
            },
          ],
        });
      } else {
        reject({
          message: "posts fetched failed",
          data: null,
        });
      }
    }, 2000);
  });
};

// fetchPosts(110)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetchUser -> user -> fetchPosts(userId)  -> users posts

//! promise chain
// fetchUser()
//   .then((data) => {
//     console.log(data);
//     return fetchPosts(data.data._id);
//   })
//   .then((posts) => {
//     console.log(posts);
//     // return fetchPosts(12);
//   })
//   //   .then()
//   .catch((error) => {
//     console.log(error);
//   });

// fetch api
// fetch("https://jsonplaceholder.typicode.com/users/8")
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => {
//     console.log("users", users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//* async function
//* async/await
//! try/catch block  -> error handling

const getData = async () => {
  try {
    const user = await fetchUser();
    console.log(user);
    const posts = await fetchPosts(user.data._id);
    console.log(posts);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};

// getData();

//! promise chain
// fetch("https://jsonplaceholder.typicode.com/users/8")
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => {
//     console.log("users", users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! try/catch - async/await
const getUsers = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/8",
    );
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

getUsers();
