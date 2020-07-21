const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const words = ["Yes", "No", "Maybe"];

const tail = (array) => {
  return array.slice(1);
};

tail(words);

assertEqual(words.length, 3);
assertEqual(tail(["yellow"]).length, 0);
assertEqual(tail([]).length, 0);