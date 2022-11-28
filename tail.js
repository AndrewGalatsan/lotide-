const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  }else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
  };
  
  let tail = function(arr){
    return arr.slice(1)
  }

// What the tail function does is returns the array input however removes the first value

  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 2);
  assertEqual(head([5,6,7]), 6);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  
  