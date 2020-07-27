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

const letterPositions = (sentence) => {
  const results = {};

  sentence = sentence.split('').filter( letter => letter !== " ");
  for (let letter of sentence) {
    if (!results.hasOwnProperty(letter)) {
      results[letter] = [results[letter]].concat(sentence
        .map( (letterInSentence, index) => {
          if (letterInSentence === letter) {
            return index;
          }
        }))
    }
  }

  for (let letter in results) {
    results[letter] = results[letter].filter( index => index !== undefined)
  }

  console.log(results);
  return results;
}

// assertArraysEqual(letterPositions('hello').h, [0]);
// assertArraysEqual(letterPositions('hello').e, [1]);
// assertArraysEqual(letterPositions('hello').l, [2, 3]);
// assertArraysEqual(letterPositions('hello').o, [4]);
module.exports = letterPositions;