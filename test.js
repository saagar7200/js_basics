// const parent = (a) => {
//   let x = a;
//   console.log(x);
// };

//* garbage collection

// const parent = (a) => {
//   let x = a;
//   x = x + 12;
//   return () => {
//     console.log(x);
//   };
// };

// const inner = parent(10); // {x:10}
// const inner1 = parent(20); // {x:20}
// inner();

const outer = (callback) => {
  console.log("outer");
  callback();
  return () => {};
};

outer(() => {
  console.log("callback");
});

// main branch changes
