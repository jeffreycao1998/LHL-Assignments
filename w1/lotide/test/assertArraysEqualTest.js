const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, [2, 3], 4, 5], [1, [2, 3], 4, 5]);