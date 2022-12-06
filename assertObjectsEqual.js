const eqObjects = require('./eqObjects');

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

const ab = { a: "4", b: "2"};
const ba = { b: "2", a: "1"};
console.log(assertObjectsEqual(eqObjects(ab,ba),false));

module.exports = assertObjectsEqual;




