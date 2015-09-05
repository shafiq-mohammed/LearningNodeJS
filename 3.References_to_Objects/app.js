/*
@author Shafiq Mohammed
@@date 09-04-2015
Understanding references to Objects - JS refresher
*/

/*
IN Node, everything is a reference. What that means is that if you were to make a 
person variable and set it equal to an existing Shafiq object, and then change a 
property of the person variable, then it actuall 
*/
//So if we have

var Shafiq = {
	favorite_food : "Margherita Pizza",
	favorite_drink : "Starbucks Coffee",
	school : "Georgia Tech",
	major : "Computer Science"
};

var randoPerson = Shafiq;
randoPerson.favorite_drink = "Dunkin Donuts' Coffee";

//You would expect the following to print out "Starbucks coffee, but look:"
console.log(Shafiq.favorite_drink); //prints "Dunkin Donuts' Coffee"


/*What is the difference between two equal signs and three equal signs?

In a double equal sign, it only compares the values, not the type. 
--> So 19 == "19" returns TRUE

However, with ===, both the value AND the type is compared. 
--> So 19 === "19" returns FALSE.
*/

//************How to use the "this" keyword***********//

//Whenever you see the keyword "This", it simply refers to the thing that called it.

var Shafiq = {
	printFirstName : function () {
		console.log("My name is Shafiq.");
		console.log(this === Shafiq);
	}
};

Shafiq.printFirstName();

var Bob = Shafiq;
Bob.printFirstName();


