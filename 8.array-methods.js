//*
//? push , pop , unshift shift , join , splice , .....
//! forEach , map , filter, reduce
// const numbers = [34, 5, 6, 8, 97, 34];
// const doubled = [];

//* forEach
// array.forEach(callback)
// const callback = (value, index, arr) => {
//   console.log(value, index, arr);
// };
// numbers.forEach(callback);
// const result = numbers.forEach((val, i, arr) => {
//   console.log(val, i, arr);
//   doubled[i] = val * 2;
// });

// console.log(doubled);

//* map
//? transformation -> returns new array
// array.map(callback)
// [34, 5, 6, 8, 97, 34]  => [undefined, undefined, undefined, undefined, undefined, undefined]
// const result = numbers.map((val) => {
//   console.log(val);
//   return val * 2;
//   //   return "x";
//  });
// console.log(numbers);
// console.log(result);

const users = [
  {
    name: "John",
    email: "john@gmail.com",
  },
  {
    name: "Alice",
    email: "alice@gmail.com",
  },
  {
    name: "Bob",
    email: "bob@gmail.com",
  },
];
// users  =>  ["john@gmail.com" , "alice@gmail.com" ,"bob@gmail.com"]

// const emails = users.map((user) => {
//   return user.email;
// });

const emails = users.map((user) => user.email);
// console.log(emails);

// console.log(emails);

//* filter
//* returns new array
const numbers = [34, 5, 6, 8, 97, 34];
// const even = numbers.filter((num) => {
//   if (num % 2 === 0) {
//     return true;
//   }else{
//     return false;
//    }
// });

// const even = numbers.filter((num) => {
//     return num % 2 === 0;
// });

const even = numbers.filter((num) => num % 2 === 0);

console.log(even);

// const students = [
//   {
//     name: "John",
//     email: "john@gmail.com",
//     marks: 29,
//   },
//   {
//     name: "Alice",
//     email: "alice@gmail.com",
//     marks: 92,
//   },
//   {
//     name: "Bob",
//     email: "bob@gmail.com",
//     marks: 49,
//   },
// ];

// const greaterThan50 = students.filter((student) => student.marks > 50);
// const greaterThan50 = students.filter((student) => {
//   if (student.marks > 50) return true;
// });
// // console.log(greaterThan50);
// const lessOrEqual50 = students.filter((student) => student.marks <= 50);

// console.log(lessOrEqual50);

//* reduce
//? arr.reduce(callback,initialValue)
// [] => single value
// [34, 5, 6, 8, 97, 34] => total_sum
const total_sum = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(total_sum);

// 5,5,5 -> 15/3   ,

// const avg_marks =
//   students.reduce((acc, student) => {
//     return acc + student.marks;
//   }, 0) / students.length;

// console.log(avg_marks.toFixed(2));

//* find
const result = numbers.find((num) => {
  if (num > 100) return true;
});
console.log(numbers);
console.log(result);
//* findIndex
const index = numbers.findIndex((number) => number === 98);
console.log(index);

// student  => find , index  name === ''
// console.log(students.find((stu) => stu.name === "John"));
// console.log(students.findIndex((stu) => stu.name === "John"));

// //* every ->

//? return boolean
console.log(numbers.every((num) => num % 2 === 0));
//* some
console.log(numbers.some((num) => num % 2 === 0));

const cart = {
  user: 1,
  items: [
    {
      product: {
        id: 1,
        name: "product 1",
        price: 1000,
      },
      quantity: 2,
    },
    {
      product: {
        id: 2,
        name: "product 2",
        price: 500,
      },
      quantity: 4,
    },
    {
      product: {
        id: 3,
        name: "product 3",
        price: 5000,
      },
      quantity: 1,
    },
    {
      product: {
        id: 4,
        name: "product 4",
        price: 200,
      },
      quantity: 4,
    },
  ],
};

const total_amount = cart.items.reduce((acc, item) => {
  return acc + item.product.price * item.quantity;
}, 0);

console.log(total_amount);

const products = [
  {
    id: 1,
    name: "product 1",
    price: 200,
    category: "category_A",
  },
  {
    id: 2,
    name: "product 2",
    price: 200,
    category: "category_B",
  },
  {
    id: 3,
    name: "product 3",
    price: 200,
    category: "category_A",
  },
  {
    id: 4,
    name: "product 4",
    price: 200,
    category: "category_C",
  },
  {
    id: 4,
    name: "product 4",
    price: 200,
    category: "category_C",
  },
  {
    id: 10,
    name: "product 4",
    price: 200,
    category: "category_D",
  },
];

// {category_A : 2 , category_B:1,category_C:1}

const map = products.reduce(
  (acc, product) => {
    // if (!acc[product.category]) {
    //   acc[product.category] = 1;
    //   return acc;
    // }
    // acc[product.category] += 1;
    // return acc;

    if (acc[product.category]) {
      acc[product.category] += 1;
    } else {
      acc[product.category] = 1;
    }
    return acc;
  },
  { category_A: 1, category_B: 1 },
);

// console.log(map);
//  {
//    category_A: 2,
//    category_B: 1,
//    category_C: 1
//  }

//*
const students = [
  {
    name: "John",
    email: "john@gmail.com",
    marks: [45, 67, 89, 98, 67],
  },
  {
    name: "Alice",
    email: "alice@gmail.com",
    marks: [92, 56, 87, 67, 67],
  },
  {
    name: "Bob",
    email: "bob@gmail.com",
    marks: [57, 65, 56, 60, 67],
  },
  {
    name: "Ram",
    email: "bob@gmail.com",
    marks: [47, 30, 50, 58, 60],
  },
];

//! calculate avg marks for each students
// const studentsWithAvgMarks = students.map((student) => {
//   const avg =
//     student.marks.reduce((acc, mark) => {
//       return (acc += mark);
//     }, 0) / student.marks.length;

//   student.avg_mark = avg;
//   return student;
// });

// console.log(studentsWithAvgMarks);
//! filter passed student :  avg >= 50 -> passed
// const passedStudents = studentsWithAvgMarks.filter(
//   (student) => student.avg_mark >= 50,
// );
// console.log(passedStudents);
//! passed student map to name array =>  ['John' ,"alice"]
// const passedName = passedStudents.map((student) => student.name);
// console.log(passedName);

const calculate = (student) => {
  const avg =
    student.marks.reduce((acc, mark) => {
      return (acc += mark);
    }, 0) / student.marks.length;

  student.avg_mark = avg;
  return student;
};

const passedStudents = students
  .map((student) => calculate(student))
  .filter((student) => student.avg_mark >= 50)
  .map((student) => student.name);

console.log(passedStudents);
