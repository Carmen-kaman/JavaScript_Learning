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

const renderMovies = (filters = "") => {
  const movieList = document.getElementById("movie-list");

  if (movie.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  // const filteredMovie = !filters
  //   ? movie
  //   : movie.filter(item => {
  //       return item.info.title.includes(filters);
  //     });

  const filteredMovie = !filters
    ? movie
    : movie.filter(item => item.info.title.includes(filters));

  filteredMovie.forEach(item => {
    const movieEL = document.createElement("li");
    // movieEL.textContent = item.info.title;
    let text = item.info.title + " - ";
    for (const key in item.info) {
      if (key !== "title") {
        text += `${key}: ${item.info[key]}`;
      }
    }
    movieEL.textContent = text;
    movieList.append(movieEL);
  });
};

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
  renderMovies();
  // console.log(newMovie);
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
