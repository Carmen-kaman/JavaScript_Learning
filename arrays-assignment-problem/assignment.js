const testArray = [10.99, 3.99, 4.59, 2.99, 6.99, 20];

const filterGreaterFive = testArray.filter(num => num > 5);
console.log(filterGreaterFive);

const mapToNum = testArray.map((num, index) => ({ index: index, num: num }));
console.log(mapToNum);

const multiplicationResult = testArray.reduce(
  (preValue, curValue) => preValue * curValue,
  1
);
console.log(multiplicationResult);

function findMax(numList) {
  let max = +numList[0];
  for (let index = 1; index < numList.length; index++) {
    if (+numList[index] > max) {
      max = +numList[index];
    }
  }
  return max;
}
function findMinMax(numList) {
  const sortedArray = numList.sort((a, b) => {
    if (+a > +b) {
      return 1;
    } else if (+a === +b) {
      return 0;
    } else {
      return -1;
    }
  });
  // console.log(sortedArray);
  return new Array([+sortedArray[0], +sortedArray[sortedArray.length - 1]]);
}

const strNum = testArray.join();
const Max = findMax(strNum.split(","));
console.log(Max);
const [min, max] = findMinMax(strNum.split(","));
console.log(min, max);

function addItem(numList, num) {
  if (!numList.includes(num)) {
    numList.push(num);
  }
}

addItem(testArray, 10.99);
addItem(testArray, 0.99);
console.log(testArray);
