const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = (listA, listB) => {
  for (let i = 0; i < listA; i++) {
    if (listA[i] !== listB[i]) return false
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);