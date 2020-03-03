// alert("Welcome to my page!!!");
const defualtResult = 0;
let currentResult = defualtResult;

function getValue() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operater, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operater} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enterNumber = getValue();
  // const calcDescription = `${currentResult} + ${enterNumber}`;
  const initialResult = currentResult;
  currentResult = currentResult + enterNumber;
  // outputResult(currentResult, calcDescription);
  createAndWriteOutput("+", initialResult, enterNumber);
}

function subtract() {
  const enterNumber = getValue();
  // const calcDescription = `${currentResult} - ${enterNumber}`;
  const initialResult = currentResult;
  currentResult = currentResult - enterNumber;
  // outputResult(currentResult, calcDescription);
  createAndWriteOutput("-", initialResult, enterNumber);
}

function multiply() {
  const enterNumber = getValue();
  // const calcDescription = `${currentResult} * ${enterNumber}`;
  const initialResult = currentResult;
  currentResult = currentResult * enterNumber;
  // outputResult(currentResult, calcDescription);
  createAndWriteOutput("*", initialResult, enterNumber);
}

function divide() {
  const enterNumber = getValue();
  // const calcDescription = `${currentResult} / ${enterNumber}`;
  const initialResult = currentResult;
  currentResult = currentResult / enterNumber;
  // outputResult(currentResult, calcDescription);
  createAndWriteOutput("/", initialResult, enterNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
