//* array-methods
// forEach, map, filter, reduce , every , some ..

// const numbers = [12, 34, 76, 5];
// const doubled = [];
//* forEach
// loop
// arr_name.forEach(callback)
// const callback = (value, index, array) => {
//   console.log("callback", value, index, array);
// };

// numbers.forEach(callback);

// console.log(numbers);
// numbers.forEach((v, i) => {
//   console.log("callback", v, i);
//   console.log(v * 2);
//   numbers[i] = v * 2;
//   doubled[i] = v * 2;
// });

// console.log("result", numbers, doubled);

//* map -> transformation
// x -> 2x , {} => ''
// return new array

// const doubled = numbers.map((v) => {
//   console.log(v);
//   return v * 2;
//   //   return "x";
// });

// console.log(numbers);
// console.log(doubled);

//
let users = [
  {
    _id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    marks: [45, 67, 87, 90, 56],
  },
  {
    _id: 2,
    name: "Ram Karki",
    email: "ram@gmail.com",
    marks: [65, 67, 87, 40, 56],
  },
  {
    _id: 3,
    name: "Hari Karki",
    email: "hari@gmail.com",
    marks: [34, 67, 87, 56, 28],
  },
];

// users  -> name['John Doe' , 'Ram Karki' , 'Hari Karki']

const names = users.map((user) => {
  return user.name;
});
const emails = users.map((user) => {
  return user.email;
});
console.log(names);
console.log(emails);

// const names = users.map(({ name }) => {
//   return name;
// });

// {name,email,marks:[]}  => {name,email,marks, avg_marks:}
let students = [
  {
    _id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    marks: [45, 67, 87, 90, 56],
  },
  {
    _id: 2,
    name: "Ram Karki",
    email: "ram@gmail.com",
    marks: [65, 67, 87, 40, 56],
  },
  {
    _id: 3,
    name: "Hari Karki",
    email: "hari@gmail.com",
    marks: [34, 67, 87, 56, 28],
  },
];

const studentWithAvg = students.map((student) => {
  let total = 0;
  for (let mark of student.marks) {
    total += mark;
  }
  return {
    ...student,
    avg: total / student.marks.length,
  };
});

// console.log(studentWithAvg);

//* filter
//* array_name.filter(callback)
// return new array

// const numbers = [12, 31, 34, 76, 5];
//? 0 , -0 -> falsy value

// const even = numbers.filter((num, i) => {
// if (num % 2 === 0) {
//   return true;
// } else {
//   return false;
// }

// });

// const even = numbers.filter((num, i) => {
//   return num % 2 === 0;
// });

// const even = numbers.filter((num) => num % 2 === 0);
// const odd = numbers.filter((num) => num % 2 !== 0);
// odd

// console.log(even);
// console.log(odd);

// [12, 31, 34, 76, 5];
// student.avg >= 50
const studentPassed = students.filter((student) => {
  let total = 0;
  for (let mark of student.marks) {
    total += mark;
  }
  student.avg = total / student.marks.length;
  // return {
  //   ...student,
  //   avg: total / student.marks.length,
  // };

  return student.avg >= 50;
});

// console.log(studentPassed);

//* reduce
//? -> arr_name.reduce(callback,initial_value)
const numbers = [11, 31, 34, 76, 5]; // total_sum

// 12 = 12
// 12 + 31 = 43
// 43 + 34

const totalSum = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);

const avg =
  numbers.reduce((acc, num) => {
    return acc + num;
  }, 0) / numbers.length;
// console.log(totalSum, avg);

//
const cart = {
  userId: 1,
  items: [
    {
      product: {
        id: 1,
        price: 300,
      },
      quantity: 2,
    },
    {
      product: {
        id: 2,
        price: 500,
      },
      quantity: 3,
    },
    {
      product: {
        id: 100,
        price: 1000,
      },
      quantity: 2,
    },
  ],
};

//todo: every , some , find , findIndex

// const numbers = [11, 31, 34, 76, 5];
const isEveryEven = numbers.every((num) => num % 2 === 0);
console.log(isEveryEven);
const isSomeEven = numbers.some((num) => num % 2 === 0);
console.log(isSomeEven);

// find -> search -> return element
const res = numbers.find((num) => num % 2 === 0);
console.log(res);

const user = students.find((student, i) => {
  if (student.email === "ram@gmail.com") {
    // return i;
    return true;
  }
});
const index = students.findIndex(
  (student) => student.email === "ram1@gmail.com",
);

if (!user) {
  console.log("user not found");
} else {
  console.log(user);
}
if (index === -1) {
  console.log("user index not found");
} else {
  console.log(index);
}
