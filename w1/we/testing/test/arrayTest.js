const chai = require('chai');
const assert = chai.assert;

describe('Array', function() {
  it('should start empty', function() {
    const arr = [];

    assert.equal(arr.length, 0, 'Array length was not 0');
  });
});