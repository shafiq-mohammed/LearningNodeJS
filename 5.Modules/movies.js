//We want to use this code in our app.js file.

function printAvatar() {
	console.log("Avatar: PG-13");
}

function printChappie() {
	console.log("Chappie: R");
}

//We can specify what code we want to export. The code that gets exported
//is determined by module.exports:

module.exports.avatar = printAvatar;

//Now everytime someone tries to import movies.js, the printAvatar function is imported.
s