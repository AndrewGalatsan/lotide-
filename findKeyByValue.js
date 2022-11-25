const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arr1,arr2){
  const result = eqArrays(arr1,arr2)
    if (!result){
        console.log(`BOO These arrays are NOT equal`)
    }
    else {
        console.log(` YAY These arrays ARE equal`)
    }
}


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
// the first test should console.log the key and return true because drama is the key for 'The Wire"

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
