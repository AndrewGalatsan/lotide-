const map = require('../map');
const assert = require('chai').assert;



describe("creates a new array that has a callback function applied to it", () => {
  const words1 = ["hello", "my", "name", "is", "bob"];
  it("should return [ 'h', 'm', 'n', 'i', 'b' ] for 'words1, word => word[0]'", () => {
    assert.deepEqual(map(words1, word => word[0]), [ 'h', 'm', 'n', 'i', 'b' ]);
  });
  const numbers = [1, 2, 3, 4, 5];
  it("should return [ 2, 4, 6, 8, 10 ] for 'numbers, n => nn * 2'", () => {
    assert.deepEqual(map(numbers, n => n * 2), [ 2, 4, 6, 8, 10 ]);
  });
});