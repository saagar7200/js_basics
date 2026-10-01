//* async

// console.log("start");
// console.log("processing");
// console.log("end");

//* setTimeout(callback,timer,...arguments)
// console.log("start");
// setTimeout(
//   (a, b) => {
//     // console.log("processing", a, b);
//   },
//   2000,
//   //   "abc",
//   //   123,
// );

// const id = setTimeout(() => {
//   console.log("processing");
// }, 2000);

// console.log(id);

// clearTimeout(id);
// console.log(id);

// console.log("end");

//* setInterval(callback,timer,...args)

// console.log("start");
// let i = 1;
// const timer_id = setInterval(() => {
//   console.log(i);
//   if (i === 10) {
//     clearInterval(timer_id);
//   }
//   i++;
// }, 100);
// console.log("end");

//todo: function countdown(time_in_seconds) => countdown
// countdown(10)
// HH:MM:SS
// 00:00:10
// 00:00:09
// 00:00:08
// 00:00:07
//.
//.
// 00:00:00

const countDown = (seconds) => {
  // 3700
  const timer_id = setInterval(() => {
    //* total hours
    const hours = Math.floor(seconds / 3600);
    //* total minutes form remaining seconds
    const minutes = Math.floor((seconds % 3600) / 60);
    //* remaining seconds
    const sec = seconds % 60;

    const format = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    console.log(format);
    if (seconds === 0) {
      console.log("Time is up");
      clearInterval(timer_id);
    }
    seconds--;
  }, 1000);
};

// countDown(13);
// countDown(130);
// countDown(130);
// countDown(3700);

// let x = 1;
// console.log(String(x).padStart(2, "0"));

//* api req.
const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      _id: 110,
      name: "John Doe",
      email: "john@gmail.com",
    };

    callback(null, {
      message: "user fetched",
      data: {
        _id: 110,
        name: "John Doe",
        email: "john@gmail.com",
      },
    });
    // callback({ message: "user fetch failed" });
  }, 4000);
};

const getPost = (userId, callback) => {
  setTimeout(() => {
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

    callback(null, {
      message: `posts fetched`,
      data: posts,
    });
    // callback({ message: "post fetch failed" });
  }, 3000);
};

const getComments = (postId, callback) => {
  setTimeout(() => {
    callback(null, {
      message: "comments fetched",
      data: [
        {
          _id: 1,
          postId,
          text: "comment 1",
        },
        {
          _id: 2,
          postId,
          text: "comment 2",
        },
      ],
    });
  }, 2000);
};

getUser((error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
  getPost(data.data._id, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    getComments(data.data[1]._id, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(data);
    });
  });
});

//! callback hell
//* pyramid of doom
//todo: solution promise->

// const parent = (cb) => {
//   cb(10);
// };

// const callback = (a) => {
//   console.log("cb", a);
// };

// parent((a) => {
//   console.log("cb", a);
// });
// parent((a) => {
//   console.log("cb", a);
// });
