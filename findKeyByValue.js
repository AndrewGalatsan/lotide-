const assertEqual = require('./assertEqual');

const findKeyByValue = function(object,value){  
  for(let i in object){
      if (value === object[i]){
          console.log(i)
          return true;
      }
  }
  return undefined;
};

// What the findKeyByValue function does is take in 2 parameters; object and a value. Using a for in loop, we loop in through the index's of the object keys
// and set a condition to see if the value is equal to the key, to console.log that value and return true, otherwise we return undefined. In the below test,
// the first test should console.log the key and return false because the drama is not equal to the 'The Wire'. The second test should work however because 
// there is no 'That 70s Show' key, and so it is associated with undefined.

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
