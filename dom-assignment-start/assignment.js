// Q1-1
const lists = document.querySelectorAll("li");
for (const item of lists) {
  item.style.backgroundColor = "black";
  item.style.color = "white";
}

// Q1-2
const lists = document.getElementsByTagName("li");
for (const item of lists) {
  item.style.backgroundColor = "pink";
  item.style.color = "white";
}

// Q2-1
const title = document.querySelector("head title");
title.textContent = "Assignment - Solved !!!";

// Q3
const h1 = document.querySelector("h1");
h1.textContent = "Assignment - Solved !!!";
