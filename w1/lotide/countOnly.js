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

module.exports = countOnly;