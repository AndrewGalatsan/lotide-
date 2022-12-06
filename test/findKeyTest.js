const findKey = require('../findKey')
const assert = require('chai').assert;

describe("findKey function", () => {
  const test = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  it("should return Blue Hill  for x => x.stars === 1", () => {
    assert.deepEqual(findKey(test, x => x.stars === 1), "Blue Hill");
  });
  it("should return Akaleri for x => x.stars === 3", () => {
    assert.deepEqual(findKey(test, x => x.stars === 3), "Akaleri");
  });
});
