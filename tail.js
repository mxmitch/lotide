const _ = require('lodash');

// FUNCTION IMPLEMENTATION
const tail = function(myArray) {
  return _.tail(myArray);
};

const assertEqual = function(actual, expected) {
  let isTrue = true;

  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        isTrue = false;
        break;
      } else if (actual[i] === expected[i]) {
        isTrue = true;
      }
    }
  } else {
    isTrue = false;
  }

  if (isTrue === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs", "House"]);