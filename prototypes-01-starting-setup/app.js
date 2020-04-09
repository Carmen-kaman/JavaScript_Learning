// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = "Json";
//   constructor() {
//     super();
//     // this.name = "Json";
//     this.age = 24;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
//   }
// }

// construtor function
// function Person() {
//   this.age = 30;
//   this.name = "Json";
//   this.greet = function () {
//     console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
//   };
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__);
// console.log(person.toString());

// const p2 = new person.__proto__.constructor();
// console.log(p2);

const course = {
  // new object
  title: "JS",
  rating: 5,
};

console.log(Object.getPrototypeOf(course));
console.log(course.__proto__);

Object.setPrototypeOf(course, {
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

course.printRating();

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Max",
      writable: true,
    },
  }
);

// adding property by different methods in empty object
student.name = "Janey";

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProgress();
console.log(student);
