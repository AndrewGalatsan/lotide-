# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @andrewgalatsan/lotide`

**Require it:**

`const _ = require('@andrewgalatsan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: function that asserts if two arrays are equals
* `function2(assertEqual)`: function that asserts if two values are equals
* `function3(assertObjectsEqual)`: function that asserts if two object are equals
* `function4(countLetters)`: function that returns the count of each letter of a string
* `function5(countOnly)`: function that takes elements and returns counts for a specific subset of those elements
* `function6(eqArrays)`: function that checks if two arrays are equal
* `function7(eqObjects)`: function that checks if two objects are equal
* `function8(findKey)`: function that scans the object and return the first key for which the callback returns a truthy value
* `function9(findKeyByValue)`: function that searches for a key on an object where its value matches an inputted value
* `function10(flatten)`: function that flattens an array of arrays into a single-level array
* `function11(head)`: function that returns the first element in an array
* `function12(index)`: an object containing a list of all the functions
* `function13(letterPositions)`: returns a string of all the index's where each character in the string is found
* `function14(map))`: a function that mimics the map method which takes in a callback and applies a specific callback function to a set of array
* `function15(middle)`: function that returns the middle element(s) of an array
* `function16(tail)`: function that returns the elements except the first value
* `function17(takeUntil)`: a function that uses slice to return an array with elements with specifications listed in the callback
* `function18(without)`: function that removes specific elements from an array