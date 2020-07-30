var express = require('express');


var PORT = process.env.PORT || 8080


var app = express();

app.use(express.static('public'));

app.listen(8080, () => {
  console.log(`Listening on port ${PORT}`);
});
