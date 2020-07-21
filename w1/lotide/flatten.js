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
  console.log(`🛑🛑🛑 Assertion Failed: ${listA} !== ${listB}`);
};

// [1, 2, [3, 4], 5, [6]] => [1, 2, 3, 4, 5, 6]
const flatten = (array) => {
  let flattenedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenedArray = flattenedArray.concat(array[i]);
    } else {
      flattenedArray.push(array[i])
    }
  }

  return flattenedArray;
};

console.log(flatten([1, 2, [[3, 3.5], 4], 5, [6]]));