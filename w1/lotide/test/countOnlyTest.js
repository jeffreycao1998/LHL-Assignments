const countOnly = require('../countOnly');
const { assert } = require('chai');

describe('#countOnly', () => {
  it("should return 2 for countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true }) and a list of firstNames", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

    assert.equal(result1['Fang'], 2);
  });
});