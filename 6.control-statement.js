//* control flow
//* control statements

// console.log("start");
// console.log("A");
// console.log("B");
// console.log("C");

//? 1. conditionals
// const age = 17;
//* if
// if (age >= 18) {
//   console.log("can vote");
// }

//* if-else
// if (age >= 18) {
//   console.log("can vote");
// } else {
//   console.log("can not vote");
// }

//* else-if ladder
// let score = 80;
// if -> score >= 80 -> A+
// else if -> score >= 70 -> A
// else if -> score >= 60 -> B+
// else if -> score >= 50 -> B
// else if -> score >= 40 -> c+
// else if -> score >= 30 -> c
// else -> fail
// if (score >= 80) {
//   console.log("A+");
// } else if (score >= 70) {
//   console.log("A");
// } else if (score >= 60) {
//   console.log("B+");
// } else if (score >= 50) {
//   console.log("B");
// } else if (score >= 40) {
//   console.log("C+");
// } else if (score >= 30) {
//   console.log("C");
// } else {
//   console.log("Fail");
// }

//* switch-case
// let day = 5;
// switch (day) {
//   case 1: {
//     console.log("Sunday");
//     break;
//   }
//   case 2: {
//     console.log("Monday");
//     break;
//   }
//   case 3: {
//     console.log("Tuesday");
//     break;
//   }
//   case 4: {
//     console.log("Wednesday");
//     break;
//   }
//   case 5: {
//     console.log("Thursday");
//     break;
//   }
//   case 6: {
//     console.log("Friday");
//     break;
//   }
//   case 7: {
//     console.log("Saturday");
//     break;
//   }
//   default: {
//     console.log("Enter day between 1-7");
//   }
// }

// 1,7 -> weekend
// 2-6 -> Working days

// let day = 8;
// switch (day) {
//   case 1:
//   case 7: {
//     console.log("Weekend");
//     break;
//   }
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6: {
//     console.log("Working day");
//     break;
//   }

//   default: {
//     console.log("Enter day between 1-7");
//   }
// }

//? 2. loops / iterative

//* do-while
// console.log("----do-while----");

// let i = 0;
// do {
//   console.log(i); // 0,1,2,3,4 -> 0
//   i++;
// } while (i <= 10);

//* while
// console.log("----while----");
// // console.log(i);
// let j = 0;
// while (j <= 10) {
//   console.log(j);
//   j++;
// }

//* for loop
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

//* for-of
const numbers = [23, 45, 67, 89];
// for (let i = 0; i <= numbers.length -1; i++) {
// for (let i = 0; i < numbers.length; i++) {
//   console.log(i, numbers[i]);
// }

// for (let value of numbers) {
//   console.log(value);
// }

// let userName = "John Doe";

// for (let value of userName) {
//   console.log(value);
// }
//* for-in
// let user = {
//   name: "John",
//   email: "john@gmail.com",
//   password: "1234543",
// };

// for (let key in user) {
//   console.log(key, user[key]); //
// }

// for (let value in numbers) {
//   console.log(value);
// }

// for (let key of user) {
//   console.log(key, user[key]); //
// }

//* jump keywords
//! break , continue , return

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

//
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

//* return value
// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     return;
//   }
//   console.log(i);
// }
