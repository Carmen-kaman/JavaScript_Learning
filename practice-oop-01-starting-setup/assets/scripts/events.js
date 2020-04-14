const button = document.querySelector("button");

// button.onclick = function () {
//   alert("this is onclick!!!");
// };

const onButtonClickHandler = () => {
  alert("button on click by arrow function!!!");
};

const anotherButtonCLick = () => {
  console.log("this is another click!!");
};

button.onclick = onButtonClickHandler;
button.onclick = anotherButtonCLick; // the first one onclike function never execute
