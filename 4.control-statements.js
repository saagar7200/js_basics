//! control flow

//! control statements

//* conditionals
// if

// let age = 17;
// if (age >= 18) {
//   console.log("can vote");
// }

// if else
// if (age >= 18) {
//   console.log("can vote");
// } else {
//   console.log("Can not vote");
// }

// else if ladder

// age >= 60  => Major

// age >= 18  => adult

// else -> minor

// let age = 70;

// if (age >= 60) {
//   console.log("Major");
// } else if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

//* switch
// let day = 4;

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
//     console.log("enter day betn 1-7");
//   }
// }

let day = 4;

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
//     console.log("Work day");
//     break;
//   }

//   default: {
//     console.log("enter day betn 1-7");
//   }
// }

// case 1,7  -> weekend
// 2-6   -> work day

//* loops
//!
//* do while

// console.log("do while");

// let i = 11;
// do {
//   console.log(i);
//   // block
//   i++;
// } while (i <= 10);

//* while
// console.log("while");

// let j = 0;
// j = 34;
// while (j <= 10) {
//   console.log(j);
//   j++;
// }

//* for
let i = 100;

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//*  jump / branch keywords
//? break
// for (let i = 0; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

//? continue
// for (let i = 0; i <= 10; i++) {
//   if (i === 6) {
//     continue;
//   }
//   console.log(i);
// }

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

//? return

// for in
// for of
