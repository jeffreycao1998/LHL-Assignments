const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yes", "No", "Maybe"];

tail(words);

assertEqual(words.length, 3);
assertEqual(tail(["yellow"]).length, 0);
assertEqual(tail([]).length, 0);