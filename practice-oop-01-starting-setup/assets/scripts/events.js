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

// button.onclick = onButtonClickHandler;// never execute
// button.onclick = anotherButtonCLick; // the first one onclike function never execute

const btnBind = onButtonClickHandler.bind(this);

button.addEventListener("click", btnBind);

setTimeout(() => {
  button.removeEventListener("click", btnBind);
}, 2000); // cannot remove arrow fuction in add even listener
