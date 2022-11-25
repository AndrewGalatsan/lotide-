const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  }else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
  };
  
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 2);

let head = function(arr){
  return arr[0]
}

// What the head function simply does is take in an array as a parameter and returns the first value of that array (index of 0) For the below test, it should
// return passed because the index of [0] for both arrays are equal, and we are applying the assertEqual function to it as well.

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

