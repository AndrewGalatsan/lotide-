const letterPositions = require('../letterPositions');
const assert = require('chai').assert;


describe('#letterPositions function', () => {
  it('returns each letter with their index for hello', () => {
    assert.deepEqual(letterPositions('hello'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] })
  });
});

