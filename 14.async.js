// async js

// console.log("start");
// console.log("processing");
// console.log("end");

//* setTimeout
//setTimeout(callback , timer , arg1,arg2....argn)
// console.log("start");

// const timer_id = setTimeout(
//   (name, age) => {
//     console.log("processing", name, age);
//   },
//   2000,
//   "John",
//   28,
// );

// console.log(timer_id);

// clearTimeout(timer_id);

// console.log(timer_id);

//* setInterval
// const timer_id = setInterval(() => {
//   console.log("interval");
// }, 1000);

// let i = 1;
// const timer_id = setInterval(() => {
//   console.log(i);
//   if (i === 10) {
//     clearInterval(timer_id);
//   }
//   i++;
// }, 1000);

// console.log(timer_id);
// console.log("end");

// 80
// 00:01:20
// 00:01:19
// 00:01:18
// 00:01:0
// 00:00:59

// const countDown = (seconds) => {};

//!

//* get user
const getUser = (callback) => {
  setTimeout(() => {
    console.log("user fetched");
    const user = {
      _id: 10,
      name: "John Doe",
      email: "john@gmail.com",
    };
    callback(null, user); //! success
    // callback({ message: "user fetch failed" }); //! error
  }, 2000);
};

//* get users posts
const getPosts = (userId, callback) => {
  setTimeout(() => {
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
    callback(null, posts);
  }, 1000);
};

const getComments = (postId, callback) => {
  setTimeout(() => {
    console.log("comments fetched");
    const comments = [
      {
        _id: 1,
        postId: postId,
        text: "Comment 1",
      },
      {
        _id: 2,
        postId: postId,
        text: "Comment 2",
      },
    ];
    callback(null, comments);
  }, 1000);
};

console.log("Start");
getUser((error, user) => {
  if (error) {
    console.log("error");
    console.log(error);
    return;
  }
  console.log(user);
  getPosts(user._id, (error, posts) => {
    if (error) {
      console.log("error");
      console.log(error);
      return;
    }

    console.log(posts);
    getComments(posts[0]._id, (error, comments) => {
      if (error) {
        console.log("error");
        console.log(error);
        return;
      }
      console.log(comments);
    });
  });
});
// getPosts(1);
console.log("end");
//! callback hell
//* pyramid of doom

//todo: promise
