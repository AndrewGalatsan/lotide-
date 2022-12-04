const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');



describe("Checking if arrays are equal", () => {
  it("returns 'Yay these arrays are equal'", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns 'Yay these arrays are equal'", () => {
    assert.deepEqual(assertArraysEqual(['5'], ['5'])); 
  });
});


