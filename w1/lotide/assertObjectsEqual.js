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
    } else if (objectA[property] !== objectB[property]) return false;
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;