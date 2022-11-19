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

const flatten = function(arr1) {
  let flattened = [];
  for(let i = 0; i < arr1.length; i++){
    if (Array.isArray(arr1[i])){
      flattened = flattened.concat(flatten(arr1[i]));
    } else {
        flattened.push(arr1[i]);
    }
  }
  return flattened
};