const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = (listA, listB) => {
  if (listA.length !== listB.length) return false;

  for (let i = 0; i < listA.length; i++) {
    if (Array.isArray(listA[i]) && Array.isArray(listB[i])) {
      if (!eqArrays(listA[i], listB[i])) {
        return false;
      }
    } else if (!Array.isArray(listA[i]) && !Array.isArray(listB[i])) {
      if (listA[i] !== listB[i]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false