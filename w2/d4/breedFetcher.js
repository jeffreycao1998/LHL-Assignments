const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/images/search?api_key=cb9e83dc-d200-49b8-bc80-1f5739ff6fcb&breed_ids=${args[0]}`, (err, __, body) => {
  if (err) {
    console.log(err);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed Not Found');
    } else {
      console.log(data[0].breeds[0].description);
    }
  }
});