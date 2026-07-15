//! event loop

//? 1. callstack
//? 2. web apis : timers-> setTimeout , setInterval , fetch , promise:{status:pending, onResolved:(){},onReject:(){},finally:(){}} , dom events , geo location
//? 3. task queue  -> FIFO
// callback queue / macro task queue -> 3
// microtask queue -> 0
//? 4. event loop

//empty  micro task queue
// 1 callback queue
//empty  micro task queue
// 1 callback queue

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

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log("success");
    return response.json();
  })
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  });

//* setTimeout
// setTimeout(callback , timer , arg1,arg2....argn)

setTimeout(() => {
  console.log("processing");
}, 2000);

fetchUser()
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });
