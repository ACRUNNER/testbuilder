// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	if((cardNumber.substr(0,6) >= 622126 && cardNumber.substr(0,6) <= 622925) || (cardNumber.substr(0,3) >= 624 && cardNumber.substr(0,3) <= 626) ||
	(cardNumber.substr(0,4) >= 6282 && cardNumber.substr(0,4) <= 6288)){
		return "China UnionPay";
	}else if(cardNumber.substr(0,4) == 5018 || cardNumber.substr(0,4) == 5020 || cardNumber.substr(0,4) == 5038 || cardNumber.substr(0,4) == 6304){
		return "Maestro";
	}else if(cardNumber.length == 14){
		return "Diner's Club";
	}else if(cardNumber.length == 15){
		return "American Express";
	}else if(cardNumber.substr(0,4) == 4903 || cardNumber.substr(0,4) == 4905 || cardNumber.substr(0,4) == 4911 || cardNumber.substr(0,4) == 4936 ||
	cardNumber.substr(0,4) == 6333 || cardNumber.substr(0,4) == 6759 || cardNumber.substr(0,6) == 564182 || cardNumber.substr(0,6) == 633110){
		return "Switch";
	}else if((cardNumber.length == 13 || cardNumber.length == 19|| cardNumber.length == 16) && cardNumber[0] == 4){
		return "Visa";
	}else if((cardNumber.length == 16 || cardNumber.length == 19) && (cardNumber.substr(0,4) == 6011 || cardNumber.substr(0,2) == 65 || 
	((cardNumber.substr(0,3) >= 644 && cardNumber.substr(0,3) <= 649)))){
		return "Discover";
	}else{
		return "MasterCard";
	}
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


