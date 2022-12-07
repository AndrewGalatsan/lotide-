const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("Applied callback function to array and produces an array of items from an existing array, following specified callback condition", () => {
  const data1 = [1, 2, 5, 7, 2, -1];
  it("should return [ 1, 2, 5, 7, 2 ] for x => x > 0", () => {
    assert.deepEqual(takeUntil(data1, x => x > 0), [ true, true, true, true, true]);
  });
});