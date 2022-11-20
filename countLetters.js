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