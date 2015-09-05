/*
-Vanilla JS was made for the web browser.
-The code we will be writing will be code on the server.
-So people will be able to connect to the server, make a request, and your server
 will be responsible for looking at the request and sending them back some information
 and files.
-The code that we will be writing will be code that will be on the server.
-You don't need to worry about downloading some OS, and Apache and all that good
stuff, but in node it's different
*/

//First, let's import the http module built into node:
var http = require('http');


/*
 @request - information about user's request-what were they trying to get,
  what webpage were they trying to get to? etc. 
 @response - the object that we can send back to  them. So if they're looking for a web
 file, we can send that. Or even a status, like if the connection was good or if it failed, etc
 *The request is sent from them, the response is what we send back.
*/
function onRequest(request, response) {
	//So we can see if our terminal that a user made a request
	console.log("A user made a request" + request.url);
	/*
	-Now we have to create a response. For the first parameter, you send a status:
		200 means everything went ok. 404 means couldn't find it/failed.
	-The second part of the header is the header info, what type of data are you
		sending back to them. These can be files or even plaintext, so lets put
		some plaintext.
	*/
	response.writeHead(200, {"Context-Type": "text/plain"});
	//This allows you to write your response:
	response.write("Here is my response-here is some data.");
	//Signifies that the response is ending.
	response.end();
}
//
/*The only thing you need to do to turn your NodeJS code into a serve is this:
The parameter, the requestListener, is essentially your callback (what code do 
you wanna run whenever a user wants to connect to your server?) and this function 
that we will write will send back the webpage or a file or something from the db, etc.
*/
http.createServer(onRequest).listen(8888);
console.log("Server is now running!!!");

