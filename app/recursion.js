exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

	var list = [],
		new_dir_obj;



  	function getFiles(obj){

  		for(var i=0;i<obj.files.length;i++) {

  			if(typeof obj.files[i] == 'string') {
  				list.push(obj.files[i]);
  			}
  			else if(typeof obj.files[i] == 'object') {
  				getFiles(obj.files[i]);
  			}
  		};

  		return list;

  	};

  	function findDir(obj){

		if(obj.dir == dirName) {

			new_dir_obj = obj;

		}
		else {
			for(var i=0;i<obj.files.length;i++) {
				if(typeof obj.files[i] == 'object') {
					findDir(obj.files[i]);
				}
			}

		};

		return new_dir_obj;
  	};

  	if(dirName){

  		return getFiles(findDir(data));
  		
  	} else {

  		return getFiles(data);

  	};

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
