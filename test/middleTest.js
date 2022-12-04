const middle = require('../middle');
const assert = require('chai').assert;

console.log(middle[1, 2, 3])
describe("Checking for the middle value of an array and a string that specifies if it is odd or even numbered array", () => {
  it("returns string that says this has an odd numbers in the array and provides the middle value ", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns string that says this has an even numbers in the array and provides the middle values ", () => {
    assert.deepEqual((middle([1,2,3,4])), [2, 3]);
  });
});
