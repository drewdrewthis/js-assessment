exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {

    return arr.indexOf(item);
  },

  sum : function(arr) {
    for(var i=0, sum = 0; i<arr.length; i++) {
      sum+=arr[i];
    };

    return sum;
  },

  remove : function(arr, item) {

    for(var i=0; i<arr.length; i++) {
      if(arr[i] == item) {
        arr.splice(i,1);
      }
    };

    return arr;

  },

  removeWithoutCopy : function(arr, item) {

    for(var i=0; i<arr.length; i++) {
      if(arr[i] == item) {
        arr.splice(i,1);
        i--;
      }
    };

    return arr;
  },

  append : function(arr, item) {
    
    arr.push(item);
    return arr;

  },

  truncate : function(arr) {

    arr.pop();
    return arr;

  },

  prepend : function(arr, item) {

    arr.unshift(item);
    return arr;

  },

  curtail : function(arr) {

    arr.shift();
    return arr;

  },

  concat : function(arr1, arr2) {

    var arr3 = arr1.concat(arr2);
    return arr3;

  },

  insert : function(arr, item, index) {

    arr.splice(index,0,item);

    return arr;

  },

  count : function(arr, item) {

    for(var i=0, count=0;i<arr.length;i++) {
      if(arr[i]==item){
        count++;
      };
    };

    return count;

  },

  duplicates : function(arr) {

    var dupes = [];

    arr.sort();

    for(var i=0, watcher=undefined;i<arr.length;i++) {
      for(var j=0;j<arr.length;j++) {
        if( arr[i]==arr[j] && i!=j && arr[i]!=watcher) {
          dupes.push(arr[i]);
          watcher = arr[i];
        };
      };
    };

    return dupes;

  },

  square : function(arr) {

    for(var i=0;i<arr.length;i++) {
      arr[i]*=arr[i]
    };

    return arr;
  },

  findAllOccurrences : function(arr, target) {

    for (var i = 0, arr2 = []; i < arr.length; i++) {
      if(arr[i]==target){
        arr2.push(i);
      }
    };

    return arr2;

  }
};
