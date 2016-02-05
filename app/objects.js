exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {

  	var foo = obj;
	foo.sayIt = fn;

  	return foo.sayIt();
  },

  alterObjects : function(constructor, greeting) {

	var foo = function() {
		constructor.prototype.greeting = greeting;
	} 
	
  	return foo();
  },

  iterate : function(obj) {

  	var arr = [];

	for(var prop in obj) {
		if( obj.hasOwnProperty(prop) ) {
		  arr.push(prop+": "+obj[prop]);
		} 
	};
	
  	return arr;

  }
};
