const button = document.querySelector("button");

// button.onclick = function () {
//   alert("this is onclick!!!");
// };

// const onButtonClickHandler = () => {
//   alert("button on click by arrow function!!!");
// };

// const anotherButtonCLick = () => {
//   console.log("this is another click!!");
// };

// button.onclick = onButtonClickHandler;// never execute
// button.onclick = anotherButtonCLick; // the first one onclike function never execute

// const btnBind = onButtonClickHandler.bind(this);

// button.addEventListener("mouseenter", btnBind);

// setTimeout(() => {
//   button.removeEventListener("click", btnBind);
// }, 2000); // cannot remove arrow fuction in add even listener

// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  console.log("click div");
  console.log(event);
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("click button");
  console.log(event);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");
// listItems.forEach((listItem) => {
//   listItem.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });

list.addEventListener("click", (event) => {
  // event.target.classList.toggle("highlight");
  event.target.closest("li").classList.toggle("highlight");
  button.click();
});
