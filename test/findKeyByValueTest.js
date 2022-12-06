const findKeyByValue = require('../findKeyByValue')
const assert = require('chai').assert;

describe("findKeyByValue function", () => {
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it("should return 'drama' when 'The Wire' is ran", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), true);
  });
  it("should return 'sci_fi' when 'The Expanse' is ran", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'The Expanse'), true);
  });
});
