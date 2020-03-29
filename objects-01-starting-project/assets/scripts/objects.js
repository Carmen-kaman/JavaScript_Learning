const movieList = document.getElementById("movie-list");
movieList.style["backgroundColor"] = "red";
movieList.style.display = "block";

const userChosenName = "level";

let person = {
  "first name": "Max",
  age: 30,
  hobbies: ["Sport", "Cooking"],
  [userChosenName]: "ccMax",
  greet: function() {
    alert("Hi there!!!!");
  }
};

// adding, modifying & deleting Properties
person.isAdmin = true;

delete person.age;

console.log(person);

// properties access

console.log(person["first name"]);
