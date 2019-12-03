// PREVIOUS TESTING FUNCTION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const findKeyByValue = function(obj, value) {
  let result = '';
  for (const property in obj) {
    if (obj[property] === value) {
      result = property;
    }
  }
  if (result === '') {
    return undefined;
  }
  return result;
};

module.exports = findKeyByValue;