//* class

// let user = {
//   name: "",
//   email: "",
//   password: "",
// };

// let user1 = {
//   name: "",
//   email: "",
//   password: "",
// };

class Person {
  name;
  email;
  #password; // private property

  constructor(userName, email, password) {
    this.name = userName;
    this.email = email;
    this.#password = password;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.#password;
  }

  introduce() {
    console.log("this is Person class");
  }
}

// let user1 = {name:'' , email:'' , password:''}
let john = new Person("John Doe", "john@gmail.com", "123456");
let ram = new Person("Ram Adhikari", "ram@gmail.com", "123456");
// console.log(john.#password); //!SyntaxError: Private field '#password' must be declared in an enclosing class
// console.log(john.getPassword());
// console.log(john.getEmail());
john.introduce();

//* Employee -> name ,email ,private password , department , private salary , => getPassword, getEmail

// class Employee  {
//   //   name;
//   //   email;
//   //   department;
//   #password;
//   #salary;

//   constructor(name, email, password, department, salary) {
//     this.name = name;
//     this.email = email;
//     this.#password = password;
//     this.department = department;
//     this.#salary = salary;
//   }

//   getEmail() {
//     return this.email;
//   }

//   getPassword() {
//     return this.#password;
//   }

//   getSalary() {
//     return this.#salary;
//   }
// }

//! inheritance
class Employee extends Person {
  department;
  #salary;
  constructor(name, email, password, department, salary) {
    super(name, email, password);
    // new Person()
    this.department = department;
    this.#salary = salary;
  }

  getSalary() {
    return this.#salary;
  }
  static abc() {}

  introduce() {
    console.log("this is Employee class");
  }
}

const emp1 = new Employee("emp one", "emp1@gmail.com", "1234556", "HR", 15000);
// console.log(emp1);
// console.log(emp1.getPassword());

emp1.introduce();

//* polymorphism

//* abstraction
class Payment {
  pay() {
    console.log("implementation needed");
  }
}

// payment with khalti
class PayWithKhalti extends Payment {
  // initiate payment
  pay(amount) {
    this.#connect();
    this.#successConnection();
    this.#auth();
    this.#paymentStart();
    this.#paymentSuccess(amount);
  }
  // connection
  #connect() {
    console.log("connecting to khalti");
  }
  #successConnection() {
    console.log("successfully connected");
  }
  #auth() {
    console.log("authentication success");
  }
  // start payment
  #paymentStart() {
    console.log("processing payment");
  }
  //
  // completion status
  #paymentSuccess(amt) {
    console.log(`Rs. ${amt} payment success`);
  }
}

const khaltiPayment = new PayWithKhalti();
khaltiPayment.pay(1000);

//! getter & setter

class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }

  get area() {
    console.log(Math.PI);
    return (Math.PI * this.#radius * this.#radius).toFixed(2);
  }

  //get perimeter -> 2 * pi * r

  set radius(r) {
    this.#radius = r;
  }
}

const c1 = new Circle(10);
console.log(c1.area);
c1.radius = 12;
console.log(c1.area);

//! static method

//* calculator

// add , sub , div , mul , ....
// 10,2
// 23,7

class Calculator {
  static add(a, b) {
    console.log(a + b);
    return a + b;
  }
  static sub(a, b) {
    console.log(a - b);
    return a - b;
  }

  static div(a, b) {
    console.log(a / b);
    return a / b;
  }
}

// const calc = new Calculator();
// calc.add()
Calculator.add(12, 3);
Calculator.sub(120, 14);

//* multiple inheritance
// A , B
// C
//* multilevel inheritance
// A -> B -> C -> D
