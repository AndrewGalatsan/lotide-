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

const assertObjectsEqual = function(actual,expected){
  const inspect = require(`util`).inspect;
  if (actual !== expected) {
  console.log(`Assertion Failed:  ${inspect(ab)} !== ${inspect(ba)}`);   
  } else {
   console.log(`Assertion Passed:  ${inspect(ab)} === ${inspect(ba)}`); 
}
}

const ab = { a: "4", b: "2"};
const ba = { b: "2", a: "1"};
console.log(assertObjectsEqual(eqObjects(ab,ba),false));

// Update 2


