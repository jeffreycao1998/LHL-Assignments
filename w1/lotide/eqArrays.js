const eqArrays = (listA, listB) => {
  if (listA.length !== listB.length) return false;

  for (let i = 0; i < listA.length; i++) {
    if (Array.isArray(listA[i]) && Array.isArray(listB[i])) {
      if (!eqArrays(listA[i], listB[i])) {
        return false;
      }
    } else if (!Array.isArray(listA[i]) && !Array.isArray(listB[i])) {
      if (listA[i] !== listB[i]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;