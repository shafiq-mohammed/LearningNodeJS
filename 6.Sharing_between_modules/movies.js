/*The below code would create a shared module object. Let's change that.
module.exports = {
	favMovie : ""
} */

//The below will change that, it'll create an "Object Factory" if you may.
module.exports = function() {
	return {
		favMovie : ""
	}
};