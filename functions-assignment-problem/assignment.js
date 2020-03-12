function sayHello(name) {
  console.log("Hi " + name);
}

sayHello();

//Q1
const say = name => {
  console.log("Hi =>" + name);
};

say("Arrow function");

// Q2
const sayTwo = (phrase, name) => {
  console.log(phrase, "+", name);
};

sayTwo("sorry", "ArrowFunction");

const sayZero = () => {
  console.log("Say no perameter!!!");
};

sayZero();

const sayReturn = () => {
  return "sayReturnValue";
};

console.log(sayReturn());

// Q3
const sayDefualt = (name = "Max", pharse = name !== "Max" ? "Hi" : "Hey") => {
  console.log(pharse, name);
};

sayDefualt("Jhon");
sayDefualt();
sayDefualt("Jhon", "Sorry");

// Q4
function checkInput(check, ...string) {
  // console.log(string);
  let result = "";
  for (const item of string) {
    if (item) {
      result += item;
    } else {
      check();
      break;
    }
  }
  if (result) {
    console.log(result);
  }
}

function printStr() {
  console.log("It's empty string");
}

checkInput(printStr, "1", "2", "3", "4", "5");
checkInput(printStr, "");
