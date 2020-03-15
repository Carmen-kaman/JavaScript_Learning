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

// solution
const task1El1 = document.getElementById("task-1");
const taks1El2 = document.querySelector("li");

task1El1.style.color = "white";
taks1El2.style.backgroundColor = "black";

const docTitle1 = document.querySelector("title");
// docTitle1.textContent = 'Assignment - Solved!';

const docHead = document.head;
const docTitle2 = document.head.querySelector("title");

docTitle2.textContent = "Assignment - Solved!";

// const h1 = document.querySelector('h1');
const h1 = document.getElementsByTagName("h1");
h1[0].textContent = "Assignment - Solved!";
