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

const without = function(source,itemsToRemove){
  let newArr = [...source];
  for(let i = 0; i <= newArr.length;i++) {
    for (let values of itemsToRemove){
      if(source[i] === values){
        let removedItem = newArr.indexOf(values);
        newArr.splice(removedItem,1);
      }
    }
  }
  return newArr;
} 

// The without function takes in a source as a parameter and also the itemsToRemove. We started off by creating a new array which contains all the elements
// of the source. We run a for let loop through it and then run a for of loop through the itemsToRemove values. From here we see that if the source[i] is
// is equal to the values of the for of loop, we create a new variable which is the index of thaat value. WE then take that array, splice the value that is
// at the 'removeItem' index, and delete 1. We then return that new array.

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// testing
