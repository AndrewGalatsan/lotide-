const assertObjectsEqual = function(actual,expected){
  const inspect = require(`util`).inspect;
  if (actual !== expected) {
  console.log(`Assertion Failed:  ${inspect(ab)} !== ${inspect(ba)}`);   
  } else {
   console.log(`Assertion Passed:  ${inspect(ab)} === ${inspect(ba)}`)
}
}

// The assertObjectsEqual function takes in a parameter of 'actual' and expected' and makes use of a node function that returns a string representation
// of an object from the require(`util`).inspect line. If the actual input is not equal to the expected, there is a console.log string that pushes 
// out a fail message, making use of the newly defined variable 'inspect' using the node function. 


module.exports = assertObjectsEqual;




