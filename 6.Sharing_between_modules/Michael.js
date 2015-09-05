movies = require('./movies');
var MichaelsMovies = movies();
MichaelsMovies.favMovie = "Potatoes";

console.log("Michael's fav movie is: " + MichaelsMovies.favMovie);