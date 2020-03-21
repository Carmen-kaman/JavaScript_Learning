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

// adding element via createELement()
const item = document.createElement("li");
// list.appendChild(item);
item.textContent = "createElemt Item 5";
item.style.backgroundColor = "blue";

// inserting DOM element
list.lastElementChild.before(item);

list.lastElementChild.after(item);

list.firstElementChild.replaceWith(item);

const secLi = list.children[1];
const newItem = document.createElement("li");
newItem.textContent = "Item 6";
newItem.style.backgroundColor = "red";
secLi.insertAdjacentElement("beforebegin", newItem);
