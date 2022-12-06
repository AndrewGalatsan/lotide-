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

// What the flatten function does is take in an arr as a perameter and we create an empty array. Using the parameter, we run a for let loop that goes over the
// index's of the array. If the input is truly an array, we take the empty array we made and concat it with the value from the array being ran as the parameter.
// Otherwise, we push the value of the array from the parameter into our empty array and return it.

module.exports = flatten;
