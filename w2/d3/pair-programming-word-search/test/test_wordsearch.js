const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'], //"AWCFQUAL"
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  // it("(reverse) should return true if the word is present", function() {
  //   const result = wordSearch([
  //     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  //     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  //     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  //     ['H', 'M', 'K', 'C', 'A', 'J', 'R', 'G'],
  //     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  //     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  //     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  //     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  //     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  //   ], 'JACK')

  //   assert.isTrue(result);
  // });

  it("(diagonal search shift right) should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'J', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'C', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'K', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'JACK')

    assert.isTrue(result);
  });

  it("(revDiagonalSearch) should return true if the word is present", /*function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'K', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'A', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'A', 'S', 'J', 'E', 'R', 'L'],
      ['B', 'C', 'R', 'E', 'N', 'S', 'Y', 'B'],
      ['K', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'JACK')

    assert.isTrue(result);
  }*/);

  it("(diagonalSearch shift left) should return true if the word is present", /*function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'S', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'S', 'J', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'A', 'F', 'E', 'V', 'R', 'G'],
      ['W', 'C', 'A', 'S', 'S', 'E', 'R', 'L'],
      ['K', 'C', 'R', 'E', 'N', 'S', 'Y', 'B'],
      ['K', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'JACK')

    assert.isTrue(result);
  }
  */);
  
});





 