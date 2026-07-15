// // for in
// // for of

// const numbers = [12, 4, 5, 6, 8];

// // for (let i = 0; i <= numbers.length - 1; i++) {
// //   console.log(numbers[i]);
// // }

// for (value of numbers) {
//   console.log(value);
// }

// for (value of "numbers") {
//   console.log(value);
// }

// let user = {
//   name: "John",
//   email: "john@gmail.com",
//   key: "123432",
// };

// for (key in user) {
//   console.log(key, ":", user[key]);
// }

// for (index in numbers) {
//   console.log(index);
// }

// const numbers = [34, 5, 6, 7]; // =>  [68,10,12,14]

//! array methods

//* forEach()
// arr.forEach(callback)
// const callback = (value, index, arr) => {
//   // logic
//   // console.log(value, index, arr);
//   // console.log(value);
//   console.log(index);
//   // numbers[index] = value * 2;
//   // return value;
// };

// const res = numbers.forEach(callback);

// console.log(numbers);

const numbers = [34, 5, 6, 7, 31]; // =>  [68,10,12,14]
// const doubled = [];

//? [34, 5, 6, 7]  =>  [68,10,12,14]
// numbers.forEach((value, index) => {
//   console.log(value, index);
//   doubled[index] = value * 2;
// });

// numbers.forEach(function (value, index) {
//   console.log(value, index);
// });

// console.log(doubled); //

//* map
//? transformation
// numbers.map(callback)

const doubled = numbers.map((val, i, arr) => {
  return val * 2;
  // return "X";
});

// console.log(doubled);

const users = [
  {
    name: "John",
    email: "john@gmail.com",
  },
  {
    name: "Ram",
    email: "ram@gmail.com",
  },
  {
    name: "Dinesh",
    email: "dinesh@gmail.com",
  },
];

// users  => ["John" , 'Ram' ,'Dinesh']

const userNames = users.map((user) => {
  return user.name;
});

const userEmails = users.map((val) => {
  return val.email;
});

// console.log(userNames);
// console.log(userEmails);

//* filter
// arr.filter(callback)
// return new array
const even = numbers.filter((num, i) => {
  if (num % 2 === 0) {
    return true;
  }
});

const even1 = numbers.filter((num, i) => {
  //   return true;
  // } else {
  //   return false;
  // }
  return num % 2 === 0;
});

const even2 = numbers.filter((num, i) => num % 2 === 0);

//* reduce
// arr.reduce(callback,initial_val)
// return single value

const total = numbers.reduce((acc, val) => {
  acc = acc + val;
  return acc;
}, 0);

// console.log(total);

// const numbers = [ 34, 5, 6, 7, 31 ]
// console.log(even);

//* find():value | undefined
// findLast()
const res = numbers.find((num, index) => {
  if (num >= 30) {
    return true;
  }
});

const res1 = numbers.find((num, index) => num >= 30);
console.log(res1);

//* findIndex(callback):index / -1
//* findLastIndex(callback):index / -1
console.log(numbers);
const index = numbers.findIndex((num, index) => {
  if (num >= 30) {
    return true;
  }
});

console.log(index);

// every  : boolean
const isEvery = numbers.every((num, index) => {
  if (num >= 30) {
    return true;
  }
});
// console.log(isEvery);
// some :boolean
const some = numbers.some((num, index) => {
  if (num >= 30) {
    return true;
  }
});

// console.log(some);

// const getCurrAge = (dob) => {
//   const date = new Date(dob);
//   const currDate = new Date();
//   console.log(date.getDate());
//   console.log(date.getMonth() + 1);
//   console.log(date.getFullYear());
//   let age = currDate.getFullYear() - date.getFullYear();

//   if (currDate.getMonth() + 1 < date.getMonth() + 1) {
//     age -= 1;
//   }

//   return age;
// };

// console.log(getCurrAge("1998/12/07"));

//

//? calculate totalCost of user cart
const cart = {
  userId: 1,
  items: [
    {
      product: {
        _id: 1,
        name: "product1",
        price: 1000,
      },
      quantity: 3,
    },
    {
      product: {
        _id: 2,
        name: "product2",
        price: 1200,
      },
      quantity: 2,
    },
    {
      product: {
        _id: 10,
        name: "product10",
        price: 12000,
      },
      quantity: 4,
    },
  ],
};

// for loop
// for of
// forEach

//? reduce
const totalPrice = cart.items.reduce((acc, item) => {
  return (acc += item.product.price * item.quantity);
}, 0);

// console.log(totalPrice);

// const students = [
//   {
//     name: "stu 1",
//     grade: 10,
//     marks: [34, 56, 78, 87, 56],
//   },
//   {
//     name: "stu 2",
//     grade: 10,
//     marks: [24, 13, 23, 87, 56],
//   },
//   {
//     name: "stu 3",
//     grade: 10,
//     marks: [49, 31, 45, 87, 56],
//   },
//   {
//     name: "stu 4",
//     grade: 10,
//     marks: [49, 31, 23, 74, 56],
//   },
// ];

const products = [
  {
    _id: 1,
    name: "product 1",
    price: 1000,
    category: "electronics",
  },
  {
    _id: 2,
    name: "product 2",
    price: 1300,
    category: "clothes",
  },
  {
    _id: 4,
    name: "product 4",
    price: 1000,
    category: "electronics",
  },
  {
    _id: 3,
    name: "product 3",
    price: 13000,
    category: "furniture",
  },
  {
    _id: 5,
    name: "product 5",
    price: 1300,
    category: "clothes",
  },
  {
    _id: 5,
    name: "product 5",
    price: 1300,
    category: "abc",
  },
];

// {clothes:[{},{}],furniture:[{},{}],electronics:[{},{}]}

// const catGroup = products.reduce((acc, product) => {
//   if (!acc[product.category]) {
//     acc[product.category] = [];
//   }
//   acc[product.category].push(product);
//   return acc;
// }, {});

const catGroup = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = 0;
  }
  acc[product.category] += 1;
  return acc;
}, {});

console.log(catGroup);
