const chai = require('chai');
const expect = chai.expect;

const sum = require('./index');

describe('sum', function() {
  it('returns 1 when summing 1 to 1', () => {
    expect(sum(1, 1)).to.equal(1);
  });
  it('returns 0 when summing 0 to 0', () => {
    expect(sum(0, 0)).to.equal(0);
  });
  it('returns 5 when summing 5 to 5', () => {
    expect(sum(5, 5)).to.equal(5);
  });
  it('returns 1 when summing 0 to 1', () => {
    expect(sum(0, 1)).to.equal(1);
  });
  it('returns 3 when summing 1 to 2', () => {
    expect(sum(1, 2)).to.equal(3);
  });
  it('returns 25 when summing 3 to 7', () => {
    expect(sum(3, 7)).to.equal(25);
  });
});