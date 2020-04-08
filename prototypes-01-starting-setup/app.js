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
function Person() {
  this.age = 30;
  this.name = "Json";
  this.greet = function () {
    console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
  };
}

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

Person.prototype.printAge = function () {
  console.log(this.age);
};

console.dir(Person);

const person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__);

const p2 = new person.__proto__.constructor();
console.log(p2);
