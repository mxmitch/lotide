let eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (typeof array1[i] !== typeof array2[i]) {
        return false;
      }
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        return true;
      }
      return false;
    }
  }
  return false;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), true);