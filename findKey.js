const findKey = function(obj, callback) {
  let result = '';
  for (const property in obj) {
    if (callback(obj[property]) === true) {
      result = property;
      break;
    }
  }
  if (result === '') {
    return undefined;
  }
  return result;
};


console.log(findKey({
  "Blue Hill": {
    stars: 1
  },
  "Akaleri": {
    stars: 3
  },
  "noma": {
    stars: 2
  },
  "elBulli": {
    stars: 3
  },
  "Ora": {
    stars: 2
  },
  "Akelarre": {
    stars: 3
  }
}, x => x.stars === 2)); // => "noma"


//Funciton to assert if arrays are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};