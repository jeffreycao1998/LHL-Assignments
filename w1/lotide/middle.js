const middle = (list) => {
  if (list.length % 2 === 0) {
    let middle_left = Math.floor(list.length / 2);
    let middle_right = middle_left + 1;
    return [middle_left, middle_right];
  }
  const middle = Math.floor(list.length / 2);
  return [list[middle]];
};

module.exports = middle;