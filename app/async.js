exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	var p1 = new Promise(function(resolve,reject) {
  		if(value)
  			resolve(value);
  		else
  			reject(console.log("Promise #1 Rejected"));
  		done();
  	});
  	return p1;
  },

  manipulateRemoteData : function(url) {

	var arr = [],
		result = "";

  	var p2 = new Promise(function(resolve,reject) {

	  	$.getJSON(url, function(data){})
		.done(function(data){
			for(i=0;i<data.people.length;i++){
				arr.push(data.people[i].name);
			};
			arr.sort();
			//console.log("success");
			resolve(arr);
		})
		.fail(function(){
			reject(console.log("Promise #2 Rejected"));
		}).always(function(){
			//console.log("complete");
		});
  	});

  	return p2;
  }
};
