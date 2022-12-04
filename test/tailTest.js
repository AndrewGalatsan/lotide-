const tail = require('../tail')
const assert = require('chai').assert;


describe("Provides us with a string of all values of an array except the first one and compares to see if the input is the same with output", () => {
  it("returns assertion failed", () => {
    assert.deepEqual(tail([5,6,7,6]), [6,7,6]);
  });
  it("returns assertion passed", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});

