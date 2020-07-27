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

const takeUntil = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
module.exports = takeUntil;