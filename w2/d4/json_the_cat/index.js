const fetchBreedDescription = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (err, desc) => {
  if (err) {
    return err;
  } else {
    return desc;
  }
});