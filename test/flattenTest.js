const flatten = require('../flatten')
const assert = require('chai').assert;

describe("flattening an array", () => {
  it("should return [1, 2, 3, 4, 5,] for [1, 2, [3, 4], [5]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], [5]]), [1, 2, 3, 4, 5]);
  });
  it("should return [1, 2, 3] for [1, [2, 3]", () => {
    assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3]);
  });
});
