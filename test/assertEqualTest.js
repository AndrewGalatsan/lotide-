const assert = require('chai').assert;
const assertEqual = require('../assertEqual');


describe("Checking if the inserted is equal to the expected", () => {
  it("returns assertion failed'", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it("returns assertion failed", () => {
    assert.strictEqual(assertEqual(1, 2)); 
  });
});

