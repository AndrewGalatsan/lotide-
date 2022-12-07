const without = require('../without');
const assert = require('chai').assert;

describe ("without function that takes in an input and then specifies which items to push into a new array (spliced)", () => {
  it("should return [2, 3, 4] for ([1, 2, 3, 4], [1])", () => {
    assert.deepEqual(without([1, 2, 3, 4], [1]), [2, 3, 4]);
  });
  const words = ["hello", "world", "lighthouse"];
  it("should return [ 'hello', 'world' ] for (words, ['lighthouse'])", () => {
    assert.deepEqual(without(words, [ "lighthouse" ]), [ "hello", "world" ]);
  });
});