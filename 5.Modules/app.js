/*
@author Shafiq Mohammed
@@date 09-03-2015
Learning about modules
*/

/*
when you take code and break it up into different files. These different files
are called modules. You group similar code together.

So for example, if you're making a webapp, and you have a section for movie and one
for music. You take the movie-related coe and put it in one module and same with
the music.

To do that, you use the import statement. So let's import movies.js:
*/

var movies = require("./movies");
//now movies is equal to the movies.js module
movies.avatar();