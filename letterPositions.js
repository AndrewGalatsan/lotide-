// What the countLetters function does is take in an input as a parameter and here below we are also creating an empty object. We start off by defining a 
// variable by making it equivalent to the parameter and having it split by space. Then we run a for let loop in the parameter and define the character as
// the splitted letters from the parameter. From there we have a condition that says if that character does not have a space, for the new object we created 
// the character in it, add 1 to it, otherwise equal it to 1. We then return the object that we have created. 
// What the output does is provide a new object with keys which are equal to the characters in the inputted string, and has an associated counted value with it.

const countLetters = require('./countLetters');

function letterPositions (input) {
  const obj = {}; 
  const letter = input.split('');
  for (let i = 0; i < input.length; i++) {
      const characters = letter[i];
      if (characters !== ' ') {
        if (obj[characters]){
          obj[characters] += 1;
      }
          else {
            obj[characters] = 1;             
        }   
      }
    }
      return obj
    }

console.log(countLetters("lighthouse in the house"));

module.exports = letterPositions;


