const eqArrays = (listA, listB) => {
  for (let i = 0; i < listA.length; i++) {
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

// NON-RECURSIVE

// [1, 2, [3, 4], 5, [6]] => [1, 2, 3, 4, 5, 6]
// const flatten = (array) => {
//   let flattenedArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       flattenedArray = flattenedArray.concat(array[i]);
//     } else {
//       flattenedArray.push(array[i])
//     }
//   }
//   return flattenedArray;
// };

// RECURSIVE
const flatten = (array) => {
  let flattenedArray = [];

  for (let index of array) {
    if (!Array.isArray(index)) {
      flattenedArray.push(index);
    } else {
      const flatArray = flatten(index);
      flattenedArray = flattenedArray.concat(flatArray);
    }
  }
  return flattenedArray;
}

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;