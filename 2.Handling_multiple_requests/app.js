/*

@author Shafiq Mohammed
@@date 09-02-2015
In order to learn how NodeJS handles multiple requests, let us create a 
restaurant mockup that only consists of one item (aka querying the database
for data) with multiple customers.
*/

//Function to place order
function placeOrder(orderNumber) {
	cookFood(function(){
		console.log ("Delivered food number: ", orderNumber);
	});
}


//Callback function-basically, you put the food to cook, and are like "Yo chef, brb, call me when you're done, 
//while you're doing that, i'll go fetch some more orders/do other things."
function cookFood(callback){
setTimeout(callback, 5000);
}


//Call the functions and watch the magic happen - They all get handled at the SAME time!
for(var i = 1; i <= 100; i++) {
	placeOrder(i);
}