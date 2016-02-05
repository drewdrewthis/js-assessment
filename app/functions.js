exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {

    return fn.apply(this, arr);

  },

  speak : function(fn, obj) {

    var newContext = obj;

    newContext.sayIt = fn;

    return newContext.sayIt();
  
  },

  functionFunction : function(str) {

    var function4you = function(str) {
      return function(str2){
        return(str+", "+str2);
      };
    };

    return function4you(str);

  },

  makeClosures : function(arr, fn) {

  },

  partial : function(fn, str1, str2) {
    
  },

  useArguments : function() {

    var result = null;

    for (var i=0; i<arguments.length; i++) {
      result+=arguments[i];
    };

    return result;
  },

  callIt : function(fn) {

    var argArr = [];

    for (var i = 0; i < arguments.length; i++) {
      argArr.push(arguments[i]);
    };

    var func = argArr[0];
    var args = argArr.slice(1);

    return func.apply(this,args);

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
