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

module.exports = takeUntil;
