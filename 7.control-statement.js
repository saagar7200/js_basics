//* control flow

//* control statements

//? conditional statements
//! if
// const age = 17;
// if (age >= 18) {
//   console.log("can vote");
// }

//! if-else
// const age = 17;

// if (age >= 18) {
//   console.log("can vote");
// } else {
//   console.log("can not vote");
// }

//! if-else ladder
// const age = 17;
// const score = 81;
// if (score >= 90) {
//   console.log("Grade: A+");
// } else if (score >= 80) {
//   console.log("Grade: A");
// } else if (score >= 60) {
//   console.log("Grade: B");
// } else if (score >= 40) {
//   console.log("Grade: C");
// } else {
//   console.log("Fail");
// }

//! switch case
// const day = 8;
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

//* day 1 & 7 -> weekend
//* 2-6 work day
// const day = 7;
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
//     console.log("Working Day");
//     break;
//   }

//   default: {
//     console.log("Enter day between 1-7");
//   }
// }

//? iterative / loop
//! do-while
// console.log("do-while");
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//! while
// let j = 0;
// console.log("while");
// while (i <= 20) {
//   console.log(i); //
//   i++;
// }
//! for
// for (let x = 0; x <= 10; x++) {
//   console.log(x);
// }

// console.log(x);

//* for of
//? array & strings
const numbers = [23, 45, 6, 7, 9];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
for (let value of numbers) {
  console.log(value);
}

let str = "Hello world";

for (let value of str) {
  console.log(value);
}

//* for in
//? object
let user = {
  name: "John Doe",
  email: "john@gmail.com",
  password: "123456",
};

for (let key in user) {
  console.log(key, user[key]);
}

for (let value of Object.values(user)) {
  console.log(value);
}

//* jump keywords
//? break
//? continue
//? return

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
