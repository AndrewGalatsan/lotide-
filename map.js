const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// Here we are creating a function with two parameters, an array and a callback function. We start off by creating an empty array and then running a 
// for of loop to go through the index's of the array. We then take the empty array we created and push the result of indexed array value where the callback function
// is applied to it, and return the newly created array. In the example below the callback function specifies to identiy the first value inputted, 
// represented as word[0]. When applying our map function the output should be g,c,t,m,t since that's the first values of the array in words.


const results1 = map(words, word => word[0]);
console.log(results1);

module.exports = map;