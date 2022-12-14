// What the eqObjects function does it takes in two parameters, object1 and object2. It then uses a built in method of Object.keys and applies it to
// and if statement to see if the key of object1 and object2 are the same. If so, there is a let of loop ran that runs through object1 and uses a 
// built in method to check if there is an array in the object of obect1 and object2. Then if the values in the array of object1 and object2 are not the same,
// (symbolized by the !eqArrays function), a boolean of false is returned, otherwise it returns true.
// The console logged test below should return true.
const eqArrays = require('./eqArrays');

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


module.exports = eqObjects;


         