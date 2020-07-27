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
    if (listA[i] !== listB[i]) return false
  }
  return true;
};

const eqObjects = (objectA, objectB) => {
  if (Object.keys(objectA).length !== Object.keys(objectB).length) return false;
  
  for (let property in objectA) {
    if (Array.isArray(objectA[property] || Array.isArray(objectB[property]))) {
      return eqArrays(objectA[property], objectB[property]);
    } else if (!Array.isArray(objectA[property] && typeof objectA[property] === 'object')) {
      return eqObjects(objectA[property], objectB[property])
    } else if (objectA[property] !== objectB[property]) {
      return false;
    }
  }
  return true;
};

// const ab = { a: '1', b: '2' };
// const ba = { b: '2', a: '1' };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: '1', b: '2', c: '3'};
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

// console.log(eqObjects({ a: { z: {p: 6 } }, b: 2 }, { a: { z: {p: 6 } }, b: 2 })); // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); //  => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

module.exports = eqObjects;