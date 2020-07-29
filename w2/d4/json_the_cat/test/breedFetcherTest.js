const fetchBreedDescription = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {fetchBreedDescription('beng', (err, desc) => {

    assert.equal(err, null);

    const expectedDesc = "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.";

    assert.equal(expectedDesc, desc);

    done();
  });
  });
  it('returns an error message for invalid/non-existant breed', (done) => {
    fetchBreedDescription('bengasdfasdf', (err, desc) => {
      const expectedError = "Breed Not Found"

      // we expect an error to be thrown
      assert.equal(expectedError, err);

      // description should be null
      assert.equal(desc, null);

      done();
    });
  })
});