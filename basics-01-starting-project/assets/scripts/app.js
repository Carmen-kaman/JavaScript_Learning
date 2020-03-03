// alert("Welcome to my page!!!");
const defualtResult = 0;
let currentResult = defualtResult;
let logEntries = [];

function getValue() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operater, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operater} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeLog(operator, prevResult, number, result) {
  const logEntry = {
    operater: operator,
    prevResult: prevResult,
    number: number,
    result: result
  };
  logEntries.push(logEntry);
  // console.log(logEntry.operater);
  console.log(logEntries);
}

function add() {
  const enterNumber = getValue();
  // const calcDescription = `${currentResult} + ${enterNumber}`;
  const initialResult = currentResult;
  currentResult = currentResult + enterNumber;
  // outputResult(currentResult, calcDescription);
  createAndWriteOutput("+", initialResult, enterNumber);
  writeLog("ADD", initialResult, enterNumber, currentResult);
}

function subtract() {
  const enterNumber = getValue();
  // const calcDescription = `${currentResult} - ${enterNumber}`;
  const initialResult = currentResult;
  currentResult = currentResult - enterNumber;
  // outputResult(currentResult, calcDescription);
  createAndWriteOutput("-", initialResult, enterNumber);
  writeLog("SUBTRACT", initialResult, enterNumber, currentResult);
}

function multiply() {
  const enterNumber = getValue();
  // const calcDescription = `${currentResult} * ${enterNumber}`;
  const initialResult = currentResult;
  currentResult = currentResult * enterNumber;
  // outputResult(currentResult, calcDescription);
  createAndWriteOutput("*", initialResult, enterNumber);
  writeLog("MULTIPLY", initialResult, enterNumber, currentResult);
}

function divide() {
  const enterNumber = getValue();
  // const calcDescription = `${currentResult} / ${enterNumber}`;
  const initialResult = currentResult;
  currentResult = currentResult / enterNumber;
  // outputResult(currentResult, calcDescription);
  createAndWriteOutput("/", initialResult, enterNumber);
  writeLog("DIVIDE", initialResult, enterNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
