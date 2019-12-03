const eqArrays = require('./eqArrays');

// PREVIOUS TESTING FUNCTION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


const eqObjects = function(object1, object2) {
  const object1Props = Object.keys(object1);
  const object2Props = Object.keys(object2);
  if (object1Props.length !== object2Props.length) {
    return false;
  }
  for (const key of object1Props) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;