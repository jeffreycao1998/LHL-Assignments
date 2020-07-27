const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = (string) => {
  const object = {};
  const splitString = string.split('').filter( letter => letter !== ' ');
  for (let letter of splitString) {
    if (!object.hasOwnProperty(letter)) {
      object[letter] = splitString
        .filter( letterInString => letterInString === letter)
        .length
    }
  }
  return object;
}

// console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;
