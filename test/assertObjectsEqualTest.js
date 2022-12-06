const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

const ab = { a: "4", b: "2"};
const ba = { b: "2", a: "1"};

describe("Checking if objects are equal", () => {
  it("returns 'Assertion failed'", () => {
    assert.deepEqual(assertObjectsEqual(ab, ba));
  });
});