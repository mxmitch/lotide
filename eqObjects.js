// FUNCTION IMPLEMENTATION
let eqArrays = function(array1, array2) {
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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



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
      return false
    }
  }
  return true;
};



const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};
const abc = {
  a: "1",
  b: "2",
  c: "3"
};

const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};
const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(abc, ba), false);
assertEqual(eqObjects(abc, ab), false);

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(dc, cd2), false);