# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jeffreycao1998/lotide`

**Require it:**

`const _ = require('@jeffreycao1998/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual(arrayA, arrayB)`: shows pass/fail in console depending if both Arrays are equal
* `assertEqual(itemA, itemB)`: shows pass/fail in console depending if both Variables are equal
* `assertObjectsEqual(objA, objB)`: shows pass/fail in console depending if both Objects are equal
* `countLetters(string)`: returns an object with the number of times each letter occurs in a string
* `countOnly(array, itemsToCount)`: returns an object with the number of times each item in itemsToCount appears in a array.
* `eqArrays(arrayA, arrayB)`: returns true if both arrays are equal
* `eqObjects(objA, objB)`: returns true if both objects are equal
* `findKey(object, callback)`: returns key if callback(object.key) is true
* `findKeyByValue(object, value)`: returns key if it exists in object, otherwise returns undefined
* `flatten(array)`: returns flat array with no nesting
* `head(array)`: returns the first element of an array
* `letterPositions(sentence)`: returns an object that shows every letter in the string and the index's they appear in the string
* `map(array, callback)`: return a new array after calling a callback function on each item in the given array
* `middle(array)`: return the middle of the array, if the middle has 2 elements return both.
* `tail(array)`: return a array without the first element
* `takeUntil(array, callback)`: return an array up to the point where the callback on the item in the array returns true
* `without(array, itemsToRemove)`: return an array without any items that occurs in itemsToRemove