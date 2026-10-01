//* promise
//? -> object represents eventual completion or failure of async task

//* states of promise
//? pending
//? fulfilled
//? rejected

//* creating promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (error) {
      reject({ message: "Something went wrong" });
    } else {
      resolve({ message: "fetch successful!" });
    }
  }, 3000);
});
// console.log(promise);

//! handling promise
// console.log("start");

// promise
//   .then((data) => {
//     console.log("promise resolved");
//     console.log(data); //
//     // console.log(promise);
//   })
//   .catch((error) => {
//     // console.log(promise);
//     console.log("promise rejected");
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// console.log("end");

//* fetchUser
const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isError = false;
      const error = { message: "user fetch failed" };
      const data = {
        message: "user fetched",
        data: {
          _id: 110,
          name: "John Doe",
          email: "john@gmail.com",
        },
      };

      if (isError) {
        reject(error);
      } else {
        resolve(data);
      }
    }, 4000);
  });
};

//! handling user promise
// const userPromise = fetchUser()
// userPromise.then()
// fetchUser()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//* fetchPost
const fetchPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isError = true;
      const error = { message: "posts fetch failed" };
      const data = {
        message: "posts fetched",
        data: [
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
        ],
      };

      if (isError) {
        reject(error);
      } else {
        resolve(data);
      }
    }, 3000);
  });
};

// fetchPosts();
//! handling post promise
// fetchPosts(10)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//* fetchComments

//! promise chain
// fetchUser()
//   .then((data) => {
//     console.log(data);
//     return fetchPosts(10);
//   })
//   .then((posts) => {
//     console.log(posts);
//     //todo: return fetchComments()
//   })
//   //todo:   .then(()=>{})
//   .catch((error) => {
//     console.log(error);
//   });

// fetchPosts(10)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//*
// fetch()
// fetch("https://jsonplaceholder.typicode.com/users/2")
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! async/await
// async function
//* try/catch

// getUser
// getPosts(userId)
// async function fetchData() {
//   try {
//     const user = await fetchUser();
//     console.log(user);
//     const posts = await fetchPosts(user.data._id);
//     console.log(posts);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("finally");
//   }
// }

// console.log("start");
// fetchData();
// console.log("end");

// fetch()
// fetch("https://jsonplaceholder.typicode.com/users/2")
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const fetchData = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
//     const user = await res.json();
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchData();

async function fetchData() {
  try {
    const userPromise = fetchUser();
    const postPromise = fetchPosts(12);
    // const [userRes, postRes] = await Promise.all([userPromise, postPromise]);
    // const res = await Promise.allSettled([userPromise, postPromise]);
    // const res = await Promise.race([userPromise, postPromise]);
    const res = await Promise.any([userPromise, postPromise]);
    // console.log(userRes, postRes);
    console.log(res);
    // console.log(user);
    // console.log(posts);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
}

fetchData();

// Promise.allSettled()
//.all()
