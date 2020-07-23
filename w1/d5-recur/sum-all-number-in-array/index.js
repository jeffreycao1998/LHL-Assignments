function sumItems(array) {
  let total = 0;
  for (let index of array) {
    if (Array.isArray(index)) {
      total += Number(sumItems(index));
    } else {
      total += Number(index);
    }
  }
  return total;
}

module.exports = sumItems;