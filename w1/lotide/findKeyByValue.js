const { findKey } = require(".");

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKeyByValue = (object, value) => {
  for (let key in object) {
    if (object[key].toLowerCase().includes(value.toLowerCase())) {
      return key;
    }
  }
  return undefined;
}

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "brooklyn nine-nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
module.exports = findKeyByValue;