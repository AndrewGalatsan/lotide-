const findKey = function (object, callback) {
    for(let key in object) {
     if (callback(object[key])) {
         return key;
     } 
  }
  return undefined
};

// What the findKey function does it take in 2 parameters, object and callback, and because we're working with objects, I use a for in loop
// to get the indexed key within the object. With that, there is a set condition that if whatever the callback function value is identified,
// it takes the key of that. So for example in the below the callback function is look for the key that has the value 'of 2 stars associated with it. The
// output should be noma and Ora

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))

module.exports = findKey;



