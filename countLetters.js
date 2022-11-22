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

  const countLetters = (obj) => {
    obj = obj.replace(/\s+/g, "");
    let final = {};
    for (let ob of obj) {
      if (final[ob]) {
        final[ob] += 1;
      } else {
        final[ob] = 1;
      }
    }
    return final;
  };
  
  // The countLetters function makes use of an arrow function and makes the parameter of 'obj' replace its input so that a new string is returned that 
  // matches the /\s+/g, "" code I input. I created an empty object variable and then a for of loop so that for each index under obj(which has the .replace
  // method applied to it), if there is a match that makes use of the .replace method, it takes that value and adds 1 to it, otherwise keeps it at 1.
  // Then it returns the object that has this number count stored. The below is an output of how it should look like when applying the countLetters
  // function to the Lighthouse string.

  assertEqual(countLetters("lighthouse in the house"), {
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
  });
  
  console.log(countLetters("lighthouse in the house"));