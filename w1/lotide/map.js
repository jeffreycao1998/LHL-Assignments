const eqArrays = (listA, listB) => {
  for (let i = 0; i < listA.length; i++) {
    if (listA[i] !== listB[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (listA, listB) => {
  if (eqArrays(listA, listB)) {
    console.log(`✅✅✅ Assertion Passed: ${listA} === ${listB}`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${listA} !== ${listB}`);
};

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];

  array.forEach( item => {
    results.push(callback(item));
  });

  return results;
};

// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(map(words, word => word.slice(1)), ['round', 'ontrol', 'o', 'ajor', 'om']);
// assertArraysEqual(map(words, word => word + 'XD'), ['groundXD', 'controlXD', 'toXD', 'majorXD', 'tomXD']);
module.exports = map;