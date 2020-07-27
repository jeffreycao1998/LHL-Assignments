const eqArrays = require('./eqArrays');

const assertArraysEqual = (listA, listB) => {
  if (eqArrays(listA, listB)) {
    console.log(`✅✅✅ Assertion Passed: [${listA}] === [${listB}]`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: [${listA}] !== [${listB}]`);
};

module.exports = assertArraysEqual;