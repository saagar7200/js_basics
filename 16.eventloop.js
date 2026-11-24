//* event loop

//* 1. callstack
//* 2. web apis:- Timer: timeout & interval , Promises:{status:fulfilled, onSuccess:(){then},onRejected:(){catch},} , geolocation ,fetch, dom_event_callbacks
//* 3. task queue:
//? 3a. macro task queue / callback queue : timer  =>  task3
//? 3b. microtask queue : promises/ fetch  =>   task1, task2 task3 task4
//* 4. event loop

// console.log("start");

// setTimeout(() => {
//   console.log("Processing");
// }, 2000);

// fetchUser()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log("end");

// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 0);

// console.log("C");

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");

//--------------
console.log("A");

setTimeout(() => {
  console.log("B");
  Promise.resolve().then(() => {
    console.log("C");
  });
}, 0);

setTimeout(() => {
  console.log("D");
}, 0);

console.log("E");

// A , E , B , C , D
