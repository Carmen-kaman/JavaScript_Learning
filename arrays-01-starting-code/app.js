// common way to create the array
const numbers = [1, 2, 3];
console.log(numbers);

// more helpful way
const from_array = Array.from([1, 2, 3]);
console.log(from_array);
const str_array = Array.from("hi!");
console.log(str_array);
// result: ['h', 'i', '!']
const nodeList = document.querySelectorAll("li");
console.log(nodeList[0]);
const arrsyList = Array.from(nodeList);
console.log("arratList", arrsyList[0]);

// call array constructor
const moreNumbers = new Array("hi", "welcome");
console.log(moreNumbers);

// fix the size or the length
const specialNumber = new Array(2);
console.log(specialNumber);

// specialNumber.push(1);
// specialNumber.push(2);
// console.log(specialNumber);
// specialNumber.push(3);
// console.log(specialNumber);

// create array call function
const fuc_num = Array(5, 3);
console.log(fuc_num);

const obj_num = Array.of(1, 2);
console.log(obj_num);
// obj_num.push(6);
// console.log(obj_num);

// push(),pop(), unshift(), shift() adding & removing
const hobbies = ["sports", "cooking"];
hobbies.push("reading"); //add the element in the end of the array
hobbies.unshift("coding"); //add the element in the start of the array

hobbies.pop(); // remove the last element from the array and return it
hobbies.shift(); // remove the first element from the array and return it
console.log(hobbies);

// splice() method
hobbies.splice(0, 0, "Good Food");
console.log(hobbies);

hobbies.splice(1, 0, "Good Nice");
console.log(hobbies);

// negative number is right index of the array
const removeEle = hobbies.splice(-2, 2);
console.log(removeEle);
console.log(hobbies);

// selecting ranges and creating copy with slice() method
const testResult = [1, 5.3, 1.5, 10.99, -5, -11.11];
const res = testResult.slice(0, 3); //this is a copy of the testResult, range [0,3) or range[0, length)=(0)
testResult.push(5.99);

console.log(testResult, res);

// adding array to array with concat();
// concat() adding the element in the end of the array.
const concatArray = testResult.concat(hobbies);
console.log(concatArray);

console.log(concatArray.indexOf("Good Nice"));

// find object index in the array
const personInfo = [{ name: "max" }, { name: "tom" }];
const per = personInfo.find((person, idx, persons) => {
  return person.name === "max";
});

console.log(per);

const perIndex = personInfo.findIndex((person, idx, persons) => {
  return person.name === "max";
});

console.log(perIndex);

// foreach
const prices = [10.99, 5.99, 4.99, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const p of prices) {
//   taxAdjustedPrices.push(p * (1 + tax));
// }

// prices.forEach((p, idx, prices) => {
//   // taxAdjustedPrices.push(p * (1 + tax));
//   const priceObj = { index: idx, taxPrice: p * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// transforming data with map()
const taxAdjustedPrices = prices.map((p, idx, prices) => {
  const priceObj = { index: idx, taxPrice: p * (1 + tax) };
  // taxAdjustedPrices.push(priceObj);
  return priceObj;
});

console.log(prices, taxAdjustedPrices);

// the other ways of transforming array
const sortPrice = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortPrice.reverse);

// filtering the array with filter()
// const filteredArray = prices.filter((p, id, ps) => {
//   return p > 6;
// });

const filteredArray = prices.filter(p => p > 6);
console.log(filteredArray);

// let sum = 0;
// prices.forEach(p => {
//   sum += p;
// });

// console.log(sum);

// const sum = prices.reduce((preValue, curValue, curIndex, prices) => {
//   return preValue + curValue;
// }, 0);

const sum = prices.reduce((preValue, curValue) => preValue + curValue, 0);

console.log(sum);

// split and join
const data = "new york; 10.99; 2000";

const transferedData = data.split(";");
transferedData[1] = +transferedData[1];
console.log(transferedData);

const nameFragements = ["Max", "Schwarz"];
const name = nameFragements.join(" "); // comma is defualt
console.log(name);

// spread operator
const copyNameFragments = [...nameFragements];
copyNameFragments.push("John");
console.log(nameFragements, copyNameFragments);

console.log(Math.min(...prices));

const persons = [
  { name: "max", age: 30 },
  { name: "Manuel", age: 31 }
];
const copyPersons = [...persons];
copyPersons.push({ name: "Anne", age: 25 });
const copyPersons2 = [
  ...persons.map(person => ({ name: person.name, age: person.age }))
];

persons[0].age = 18; //also affect copyPersons, not affect copyPerson2
console.log(persons, copyPersons, copyPersons2);

// array destructor
const nameArray = ["max", "john", "Mr", 30];
// const firstName = nameArray[0];
// const lastName = nameArray[1];
const [firstName, lastName, ...otherInfo] = nameArray;
console.log(firstName, lastName, otherInfo);
