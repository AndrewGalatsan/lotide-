const eqArrays = require('../eqArrays');
const assert = require('chai').assert;



describe("Checking if the length and values within an array are equal", () => {
  it("returns true", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });
  it("returns true'", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("returns false", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  });
});



