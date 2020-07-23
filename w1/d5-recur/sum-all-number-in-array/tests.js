const chai = require('chai');
const expect = chai.expect;

const sumItems = require('./index');

describe('sum', function() {
  it('handles a single item array fine', () => {
    expect(sumItems([25])).to.equal(25);
  });
  it('handles no nested arrays fine', () => {
    expect(sumItems([1, 3, 3, 5, 5])).to.equal(17);
  });
  it('handles four levels of nesting fine', () => {
    expect(sumItems([[1, 2, [[3], 4]], 5, []])).to.equal(15);
  });
  it('handles even more levels of nesting fine', () => {
    expect(sumItems([[[5], [[[4]]], [[3], 2]], 1, []])).to.equal(15);
  });
});
