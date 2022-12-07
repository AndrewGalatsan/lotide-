const takeUntil = function(array, callback) {
  const arr = [];
  for (let item of array){
    let value = callback(item)
    if (value){
      arr.push(value)
    }
  }
  return arr
}

// Here we are making use of callback functions. In the takeUntil function we have an array as a parameter and a callback. We start off by making a new 
// empty array and then running a for of loop of the items within the array. We define a new variable which is the value of when the callback is applied
// to the array items. We then create an if statement to show that if value is generated, we push that value into the newly created array and then return it.
// In the below test we have an array and a callback function that generates the values that are less than 0. When applied, this should produce a new array
// that has less than 0  values.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// a function that is passed into another function as an argument - callback function

module.exports = takeUntil;
