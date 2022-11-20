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

const assertArraysEqual = function(arr1,arr2){
  const result = eqArrays(arr1,arr2)
    if (!result){
        console.log(`BOO These arrays are NOT equal`)
    }
    else {
        console.log(` YAY These arrays ARE equal`)
    }
}

function countLetters (input) {
  const obj = {}; 
  const letter = input.split('');
  for (let i = 0; i < input.length; i++) {
      const characters = letter[i];
      if (characters !== ' ') {
        if (obj[characters]){
           obj[characters] = obj[characters] + 1;
       } else {
             obj[characters] = 1;             
          }   
      }
    }
      return obj
    }

console.log(countLetters("lighthouse in the house"));

