// const movieList = document.getElementById("movie-list");
// movieList.style["backgroundColor"] = "red";
// movieList.style.display = "block";

// const userChosenName = "level";

// let person = {
//   "first name": "Max",
//   age: 30,
//   hobbies: ["Sport", "Cooking"],
//   [userChosenName]: "ccMax",
//   greet: function() {
//     alert("Hi there!!!!");
//   }
// };

// // adding, modifying & deleting Properties
// person.isAdmin = true;

// delete person.age;

// console.log(person);

// // properties access

// console.log(person["first name"]);

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movie = [];

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random()
  };

  movie.push(newMovie);
  console.log(newMovie);
};

addMovieBtn.addEventListener("click", addMovieHandler);
