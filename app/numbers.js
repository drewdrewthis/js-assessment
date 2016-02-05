exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  	var bite = ("000000000" + num.toString(2)).substr(-8);

  	return (parseInt(bite[8-bit]));

  },

  base10: function(str) {

  	return parseInt(str, 2);

  },

  convertToBinary: function(num) {

  	return ("000000000" + num.toString(2)).substr(-8);

  },

  multiply: function(a, b) {

  	return +(a*b).toPrecision(1);

  }
};
