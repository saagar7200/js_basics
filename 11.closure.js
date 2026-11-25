//* closure

const parent = () => {
  const x = "parent var";

  const child = () => {
    let y = "child var";
    console.log(x); //
    console.log(y);
  };
  console.log("parent execution complete");
  // child()
  return child;
};

// const a = parent();
// // console.log(a);
// a(); //

//* private variable
// const Counter = () => {
//   let count = 0;

//   const increment = () => {
//     count++;
//     console.log(count);
//   };

//   return increment;
// };

// // console.log(count);
// const counter = Counter(); // {count:3}
// const counter1 = Counter(); // {count:2}
// counter(); // 1
// counter1(); // 1
// counter(); // 2
// counter1(); //  2
// counter(); // 3

const Counter = (initial = 0) => {
  let count = initial;

  const increment = () => {
    count++;
    console.log(count);
  };

  return {
    increment,
    decrement: () => {
      count--;
      console.log(count);
    },
  };
};

// console.log(count);
const counter = Counter(); // {count:3}
const counter1 = Counter(10); // {count:3}
counter1.increment();
counter1.increment();
counter1.decrement();
counter1.decrement();

//* caching
const calculate = () => {
  const cache = {};
  const child = (number) => {
    if (cache[number]) {
      console.log("from cache");
      return cache[number];
    }

    console.log("calculating...");
    for (let i = 0; i <= 9999999999; i++) {
      //
    }
    console.log("calculation complete");

    return (cache[number] = number * number);
  };
  return child;
};
const cacheFunction = calculate(); // {cache:{}}
// console.log(cacheFunction(2));
// console.log(cacheFunction(2));
// console.log(cacheFunction(2));
// console.log(cacheFunction(2));
// console.log(cacheFunction(3));
// console.log(cacheFunction(3));
// console.log(cacheFunction(2));
// console.log(cacheFunction(5));

//todo: CreateAccount(acc_name , initial_amt) -> deposit(amt) , withdraw(amt) , blc_inq() , get_detail()

const CreateAccount = (acc_name, initial_amt = 1000) => {
  // let count = initial;
  let balance = initial_amt;
  let name = acc_name;

  const deposit = (amt) => {
    if (amt <= 0) {
      console.log("Invalid amount");
      return;
    }
    balance += amt;
    console.log(`Your new balance is: ${balance}`);
  };

  const withdraw = (amt) => {
    if (amt <= 0) {
      console.log("Invalid amount");
      return;
    }
    if (amt >= balance) {
      console.log("Insufficient balance");
      return;
    }
    balance -= amt;
    console.log(`Your new balance is: ${balance}`);
  };

  return {
    deposit,
    withdraw,
  };
};

const acc = CreateAccount("John Doe", 1000); // {}
const acc1 = CreateAccount("John Doe", 1000); // {}

acc.deposit(100);
acc.deposit(-1200);
