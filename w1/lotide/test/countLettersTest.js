const countLetters = require('../countLetters');
const { assert } = require('chai');

describe('#countLetters', () => {
  it('should return 2 for countLetters("hello").l', () => {
    assert.equal(countLetters('hello').l, 2);
  });
});