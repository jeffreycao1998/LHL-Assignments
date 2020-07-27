const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  for (let person in itemsToCount) {
    itemsToCount[person] = [itemsToCount[person], 0];
  }
  
  for (let name of allItems) {
    if (itemsToCount.hasOwnProperty(name) && itemsToCount[name][0]) {
      itemsToCount[name][1] = itemsToCount[name][1] + 1;
    }
  }

  for (let person in itemsToCount) {
    if (itemsToCount[person][1] === 0) {
      delete itemsToCount[person];
    } else {
      itemsToCount[person] = itemsToCount[person][1];
    }
  }
  return itemsToCount;
}

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);

module.exports = countOnly;