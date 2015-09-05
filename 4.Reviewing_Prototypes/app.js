/*
@author Shafiq Mohammed
@@date 09-03-2015
Learning how prototypes work
*/

/*
Basically, what prototyping does is that it enables you, the programmer, to add
functions and variables/characteristics to an existing object AFTER it's been 
created. So basically modifying the object and inserting variables and functions
*/

//So to demonstrate this, let's create a video-game scenario
function User() {
	this.name = "";
	this.health = 100;
	this.heal = function(recipient) {
		recipient.health++;
		console.log(this.name + " healed " + recipient.name);
		console.log(this.name + "'s health: " + this.health);
		console.log(recipient.name + "'s health:" + recipient.health);
	}
}

var Shafiq = new User();
Shafiq.name = "Shafiq";

var Michael = new User();
Michael.name = "Michael";

Shafiq.heal(Michael);