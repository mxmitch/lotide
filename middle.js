//FUNCTIONS
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (typeof array1[i] !== typeof array2[i]) {
        return false
      }
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      }
    }
    return true;
  }
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function (array) {
  let newArray = [];
  if (array.length >= 3) {
    if (array.length % 2 !== 0) {
      let middle = Math.floor(array.length / 2);
      newArray.push(array[middle]);
    } else if (array.length % 2 === 0) {
      let highMiddle = Math.floor(array.length / 2);
      newArray.push(array[highMiddle - 1]);
      newArray.push(array[highMiddle]);
    }
  }
  return newArray;
}

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);