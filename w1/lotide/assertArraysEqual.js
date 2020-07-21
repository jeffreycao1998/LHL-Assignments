const eqArrays = (listA, listB) => {
  for (let i = 0; i < listA; i++) {
    if (listA[i] !== listB[i]) return false
  }
  return true;
};

const assertArraysEqual = (listA, listB) => {
  if (eqArrays(listA, listB)) {
    console.log(`✅✅✅ Assertion Passed: ${listA} === ${listB}`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3])