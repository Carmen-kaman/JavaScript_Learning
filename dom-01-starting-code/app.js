const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector("section");
const buttton = document.querySelector("button");
// section.style.backgroundColor = "blue";
section.className = "red-bg";

buttton.addEventListener("click", () => {
  // if (section.className === "red-bg visible") {
  //   section.className = "red-bg invisible";
  // } else {
  //   section.className = "red-bg visible";
  // }

  // section.classList.toggle("visible");
  section.classList.toggle("invisible");
});

// add element via html code
const list = document.querySelector("ul");
// list.innerHTML = "<li>Intem 4</li>";
list.innerHTML = list.innerHTML + "<li>Intem 4</li>";

const div = document.querySelector("div");
div.innerHTML = div.innerHTML + "<p>Something went wrong!!!</p>";

div.insertAdjacentHTML("beforebegin", "<p>BeforeBegin</p>");

div.insertAdjacentHTML("afterbegin", "<p>afterBegin</p>");

div.insertAdjacentHTML("beforeend", "<p>BeforeEnd</p>");

div.insertAdjacentHTML("afterend", "<p>afterEnd</p>");
