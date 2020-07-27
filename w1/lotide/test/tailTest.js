const tail = require('../tail');
const { assert } = require('chai');

describe('#tail', () => {
  it("should return 0 for ['yellow'].length", () => {
    assert.strictEqual(tail(['yellow']).length, 0);
  });
  it("should return 2 for ['Yes', 'No', 'Maybe'].length", () => {
    assert.strictEqual(tail(['Yes', 'No', 'Maybe']).length, 2);
  });
  it("should return ['No', 'Maybe'] for ['Yes', 'No', 'Maybe']", () => {
    assert.deepEqual(tail(['Yes', 'No', 'Maybe']), ['No', 'Maybe']);
  })
  it("should return 0 for [].length", () => {
    assert.strictEqual(tail([]).length, 0);
  })
})