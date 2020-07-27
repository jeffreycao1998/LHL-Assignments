const assertEqual = require('./assertEqual');

assertEqual(head([1]), 1);
assertEqual(head(['Yellow', 'Red']),'Yellow');
assertEqual(head([]), undefined);