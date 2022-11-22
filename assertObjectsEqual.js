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


const eqObjects = function(object1, object2){
  if (Object.keys(object1).length === Object.keys(object2).length){
    for(let i of Object.keys(object1)){
        if(Array.isArray(object1[i]) && Array.isArray(object2[i])){
            if (!eqArrays(object1[i],object2[i])){
             return false;       
            }
        }
    }
    return true;
}
return false;    
};

// The function eqObjects takes in two parameters of object 1 and object 2. If the key length of object 1 and object 2 are the same,
// a loop is run which takes the index of object 1 and object 2, and then checks a condition to see if the value passed through it is an array (using the
// Array.isArray() method. Then it applies the eqArrays function and checks for a condition to see if the two arrays are not equal in length and value[index]. 
// If indeed it is not equal, it returns false. Otherwise it returns true. 

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




