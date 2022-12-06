const assertEqual = require('./assertEqual');

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
const results = {};
for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}

// The countOnly function is similar to the countLetters function, however the main difference here is that we don't need the .replace method because
// we're not looking to find exact matches of letters, but moreso exact counts of strings. This function takes in a parameter of allItems and itemsToCount,
// and a new object is created named results. There is a for of loop ran that looks at each item in the input of allItems and writes a condition that 
// says, if there is an identified indexed value under 'itemsToCount', take that indexed value and add 1 to it, within the results array. Otherwise
// keep the value at 1. Then we return the new object 'results'.


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1)


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;

