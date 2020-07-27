const assert = require('chai').assert;
const { encrypt } = require('../caesar');

describe("caesar.encrypt", () => {
  // tip: try to make this single test pass first, before implementing the whole thing
  it("encrypts a single letter with a left shift of 3", () => {
    assert.equal(encrypt("e", -3), "b");
  });

  // tip 2: then make this one pass, before handling all letters in the given string
  it("characters should wrap around the alphabet", () => {
    assert.equal(encrypt("b", -3), "y");
  });

  it('encrypts the string "hello" to "ebiil" with a left shift of 3', () => {
    assert.equal(encrypt("hello", -3), "ebiil");
  });

  it('encrypts a sentence "hello world" => "mjqqt btwqi", skips spaces (right shift of 5)', () => {
    assert.equal(encrypt("hello world", 5), "mjqqt btwqi");
  });
});