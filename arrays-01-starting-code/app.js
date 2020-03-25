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
