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

function calculateResult(calculationType) {
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBSTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE"
  ) {
    return;
  }

  const enterNumber = getValue();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult = currentResult + enterNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult = currentResult - enterNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult = currentResult * enterNumber;
    mathOperator = "*";
  } else {
    currentResult = currentResult / enterNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialResult, enterNumber);
  writeLog(calculationType, initialResult, enterNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
