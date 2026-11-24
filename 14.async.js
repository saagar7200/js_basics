//! synchronous programming
// console.log("Start");
// console.log("Processing");
// console.log("End");

//! async
//* setTimeout(callback,timeout,args...)
// console.log("Start");
// const timer_id = setTimeout(
//   (x, y, z) => {
//     console.log("Processing", x, y, z);
//   },
//   2000,
//   "x100",
//   10,
//   100,
// );

// console.log(timer_id);
//! clearTimeout(timer_id);
// console.log(timer_id._timerArgs); // []

// console.log("End");

//* setInterval
//? setInterval(callback,timer/interval,args..)

// let i = 0;
// const timer_id = setInterval(() => {
//   console.log(i);

//   if (i === 10) {
//     clearInterval(timer_id);
//     // console.log(timer_id);
//   }
//   i++;
// }, 1000);

// console.log(timer_id);

//todo: countdown(time_in_sec) => 10
//countdown(10)
// HH:MM:SS
// 00:00:10
// 00:00:09
// 00:00:08

const countDown = (seconds) => {
  const timer_id = setInterval(() => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = Math.floor(seconds % 60);

    console.log(
      `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`,
    );
    if (seconds === 0) {
      console.log("Times up");
      clearInterval(timer_id);
    }
    seconds--;
  }, 1000);
};

// countDown(3700);
// countDown(3600);
countDown(30);
countDown(10);
