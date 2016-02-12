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

    var funcs = [],
        x,
        sq;

    for (var i = 0; i < arr.length; i++) {

      function closure(sq) {

        function square() {

          return sq;
          
        };

        x = arr[i];
        sq = fn(x);
        funcs.push(square);

      };

      closure(sq);

    };

    return funcs;

  },

  partial : function(fn, str1, str2) {

    var partial = function(punctuation) {
      return fn(str1,str2,punctuation);
    }

    return partial;
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
    
    var args =[],
        args1 = [],
        args2 = [];

    for (var i = 0; i < arguments.length; i++) {
      args1.push(arguments[i]);
    };

    var partial = function() {

      args2 = [];

      for (var i = 0; i < arguments.length; i++) {
        args2.push(arguments[i]);
      };

      args = args1.concat(args2);
      args.shift();

      return fn.apply(this,args);
    };

    return partial;

  },

  curryIt : function(fn) {

    var args = [],
        length = fn.length;

    var partial = function(x) {

      args.push(arguments[0]);

      if(args.length<length) {

        return partial;

      }
      else {

        return fn.apply(this,args);
        
      };
    };

    return partial;

  }
};
