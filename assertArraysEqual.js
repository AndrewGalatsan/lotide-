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

// What the eqArrays function does is take in 2 parameters, array 1 and array 2. If the length of both arrays are not the same, a boolean value of
// false gets returned. Furthermore, through a loop if the indexed value of array 1 and 2 are not the same, a boolean value of false is returned. 
// For all other cases, a boolean value of true is to be returned.

// What the assertArraysEquals function does is take in 2 parameters, array 1 and array 2. There is a named variable as 'result' which contains the
// results of applying eqArrays functions to the new array 1 and 2. Through an if statement if the result is false; console.log a string noting
// that these are not equal, otherwise console.log a string saying they are equal.

