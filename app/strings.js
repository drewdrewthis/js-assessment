exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

    //console.log("Initial: "+str);

    for (var i = 0, letter='', count = 0; i < str.length; i++,count=0) {
      letter = str.charAt(i);
      for (var j = 0; j < str.length; j++) {
        if(letter==str.charAt(j)){
          count++;
          //console.log(letter+"-Pos"+j+": count:" + count);
          if(count>amount){
            str=str.replace(str.charAt(j),"");
            j--;
            //console.log(count+"! - New string: "+str);
          };
          if(str.charAt(j)!=str.charAt(j+1)){
            j=str.length;
          };
        };
      };
      //console.debug("New Character");
    };

  	//console.debug("Final: "+str);

  	return str;
  },
  wordWrap: function(str, cols) {

  	console.log("Orig: "+str);

    var letterblock = "";

    for (var i = 0, count = 0, marker = undefined; i < str.length; i++) {
      
      count++;

      if( str[i]==" " && count>=cols){
        marker = i;
      };

      /*if( count>cols && !hasSpace && str[i]==" " ){
        str = str.replace(str[i],"\n");
        count=0;
      };*/

      if( count=cols && str[i]!=" " ){
        str = str.replace(str[marker],"\n");
        count=i-marker;
      };

      /*if( str[i] == " " ){
        letterblock = str.substr(-i);
        console.log(letterblock);
      };*/

    };

  	console.log(str); 

  	return str;
  },
  reverseString: function(str) {

    for (var i = str.length-1, newStr = ""; i >= 0; i--) {
      newStr += str[i];
    };

    return newStr;
  }
};
