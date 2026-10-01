//* class

// let user = {
//   name: "",
//   email: "",
//   password: "",
//   getName: function () {},
// };

// let user1 = {
//   name: "",
//   email: "",
//   password: "",
//   getName: function () {},
// };

// class class_name {
//   // properties
//   // methods
// }

class User {
  //   name;
  //   email;
  #password; //? private property
  //constructor
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }

  getName() {
    return this.name;
  }

  // getPassword() {
  //   return this.#password;
  // }
  // get name() {
  //   return this.name;
  // }

  get password() {
    return this.#password;
  }

  set password(password) {
    this.#password = password;
  }
  introduce() {
    console.log(this.name, "this is user class");
  }
}

// john -> John Doe , john@gmail.com , '12345632
const john = new User("John doe", "john@gmail.com", "123765432");
// console.log(john.#password); //! Property '#password' is not accessible outside class 'User' because it has a private identifier
// console.log(john.getName());
// john.name = "Abc";
// console.log(john.name);
// console.log(john.getPassword());

john.introduce();

// Student(name , email ,password , roll , faculty , batch)
class Student extends User {
  constructor(name, email, password, roll, faculty, batch) {
    super(name, email, password);
    this.batch = batch;
    this.roll = roll;
    this.faculty = faculty;
  }
  introduce() {
    console.log(this.name, "this is Student class");
  }
}

const student = new Student(
  "Ram",
  "ram@gmail.com",
  "123456543",
  65,
  "BCT",
  2073,
);

console.log(student.name);
// console.log(student.getPassword());
student.introduce();

//! abstraction

class Payment {
  pay(amount) {
    console.log("Payment must be implemented");
  }
}

// esewa
class PaymentWithEsewa extends Payment {
  pay(amount) {
    this.#connectWithEsewa();
    console.log(`Rs.${amount} payment success`);
  }

  #connectWithEsewa() {
    this.#sendRequest();
    this.#waitingForResponse();
    console.log("connection success....");
  }

  #sendRequest() {
    console.log("connection request sent");
  }

  #waitingForResponse() {
    console.log("waiting...");
  }
}

const payWithEsewa = new PaymentWithEsewa();
// payWithEsewa.pay(1000);

//khalti

//* getter & setter
class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }

  get area() {
    return (Math.PI * this.#radius * this.#radius).toFixed(2);
  }

  set radius(r) {
    this.#radius = r;
  }
}

const circle = new Circle(10);
// console.log(circle.getArea());
console.log(circle.area);
// circle.setRadius(12);
// circle.radius(12);
circle.radius = 12;
// console.log(circle.getArea());
console.log(circle.area);

// A , B , C

// C -> inherit A & B  -> multiple inheritance
// A -> B -> C  => multilevel inheritance

//! static

//* Calculator

// add -> 10,12

// add -> 12,56

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }
}

// const ob1 = new Calculator(12, 3);
// console.log(ob1.add());
// console.log(ob1.add());
// console.log(ob1.sub());
// const ob2 = new Calculator(12, 12);

// console.log(ob2.add());
// console.log(Calculator.add(12, 3));
// console.log(Calculator.add(12, 12));
// console.log(Calculator.multiply(12, 12));

//*

class CreateAccount {
  //* properties: balance & acc_name
  #acc_name;
  #balance;
  #min_balance = 500;

  constructor(acc_name, balance = 1000) {
    this.#acc_name = acc_name;
    this.#balance = balance;
  }

  //? methods
  //* deposit
  deposit(amount) {
    if (amount < 10) {
      console.log("amount must be greater or equal to 10");
      return;
    }

    this.#balance += amount;
    return `New Available balance:${this.#balance - this.#min_balance}`;
  }

  //* withdraw
  withdraw(amount) {
    if (amount < 10) {
      console.log("amount must be greater or equal to 10");
      return;
    }

    if (this.#balance - amount < this.#min_balance) {
      console.log("Insufficient Balance");
      return;
    }

    this.#balance -= amount;
    return `New Available balance:${this.#balance - this.#min_balance}`;
  }

  //* balance_inq
  balance_inq() {
    return {
      actual_balance: this.#balance,
      available_balance: this.#balance - this.#min_balance,
    };
  }

  //* get_details
  get_detail() {
    return {
      acc_name: this.#acc_name,
      actual_balance: this.#balance,
      available_balance: this.#balance - this.#min_balance,
    };
  }
}

const account1 = new CreateAccount("John Doe", 1000);
console.log(account1.deposit(500));
console.log(account1.deposit(500));
console.log(account1.balance_inq());

console.log(account1.withdraw(500));
console.log(account1.balance_inq());
console.log(account1.withdraw(1001));
console.log(account1.balance_inq());
console.log(account1.get_detail());
