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

// The eqArrays functions takes in a parameter of arr1 and array 2, and has an if condition to look for which checks if the length of array 1
// is not the same as array 2. If it is not the same, a boolean string of false is returned. Next, there is a for let loop that is ran through the index of
// array 1 and if it is found that the value of the same index between array 1 and array 2 is not the same, there is a boolean of false that is to be
// returned, otherwise true is returned. The below test cases produces the following output.
// true
// false
// true
// false

console.log(eqArrays([1, 2, 3], [1, 2, 3]))
console.log(eqArrays([1, 2, 3], [3, 2, 1]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) 
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) 