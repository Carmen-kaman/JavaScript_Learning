// class Person {
//   constructor() {
//     this.name = "Json";
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

const person = new Person();
console.log(person);
person.greet();
console.log(person instanceof Person);
