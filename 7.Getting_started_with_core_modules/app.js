/*
@author Shafiq Mohammed
@@date 09-05-2015

Let's see how core modules work, and let's test the fs module
*/
var fs = require("fs");
var fileOut = [];

for(var i = 0; i < 100; i++){
	fileOut[i] = "I like cereealllll";
}

fs.writeFileSync("food.txt", fileOut);
fs.writeFileSync("sample.txt", "Hey guys, what be up?");


console.log(fs.readFileSync('sample.txt').toString());