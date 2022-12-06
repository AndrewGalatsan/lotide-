const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("Should return true or false depending if objects are equal or not", () => {
  it("should return true for (ab, ba)", () => {
    const ba = {b: "2", a: "1"};
    const ab = {a: "1", b: "2"};
    assert.deepEqual(eqObjects(ba, ab), true)});
    it("should return false for (ab, abc)", () => {
      const abc = { a: "1", b: "2", c: "3" };
      const ba = {b: "2", a: "1"};
      assert.deepEqual(eqObjects(abc,ba), false);
    });
});

