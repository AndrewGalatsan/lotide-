// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
if (actual === expected){
  console.log(`Assertion Passed: ${actual} === ${expected}`)
}else{
  console.log(`Assertion Failed: ${actual} !== ${expected}`)
}
};

// The function 'assertEqual' takes in two parameters of actual and expected and creates an 'if' condition to see if the actual and expected value are equal.
// If equal, it console logs the string that says assertion as passed, noting the actual and expected value. Otherwise it console logs a failure.
// THe below two tests should provide a 'fail' because they are not equal.

module.exports = assertEqual
