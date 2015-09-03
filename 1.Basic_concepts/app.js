/*
@author Shafiq Mohammed
September 1, 2015
*/


console.log("potatoes");

/********Tutorial for beginners 3: Basic concepts
-Whenever you make objects in NodeJS, they're the exact same as JS Objects
-Whenever you're typing in JS, it's code that your browser runs, it completes and
it's done. However, this code below, think of it as code that will run on your server
continuously until you stop it.
	-->So basically, it's a process in execution that will still be running EVEN after it
	does what you tell it to do.
	-So it's server-side code
******/
var person = {
	firstName: "Shafiq",
	lastName: "Mohammed",
	age: 22,
};
console.log(person);

/*One thing to note is that in Node, whenever you have a function and you try
to log it out, it prints out the return data. */

function addNumber(a,b) {
	return a+b;
}

/* We don't need a name for a function. When we create functions, we name them 
so that we can use it. But when functions don't take parameters, then we can
use anonymous functions.
In NodeJS, we don't need to explicitly name functions. We can take functions
and assign them to variables.

Why would we want to do this? Whenever we have a function stored in a variable,
we can pass them to other functions. So for example, setTimeout is a function that
we will talk about it in the next tutorial.
*/