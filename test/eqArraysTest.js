const eqArrays = require('../eqArrays');

// Test code
console.log(eqArrays([1, 2, 3], [1, 2, 3]))
console.log(eqArrays([1, 2, 3], [3, 2, 1]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) 
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) 
