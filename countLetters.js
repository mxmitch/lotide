const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(allLetters, lettersToCount) {
  const results = {};
  for (const letter of allLetters) {
    if (lettersToCount[letter]) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

const firstString = "lighthouse in the house";

const result1 = countLetters(firstString, {
  "l": true,
  "a": true,
  "e": true
});

assertEqual(result1["l"], 1);
assertEqual(result1["a"], undefined);
assertEqual(result1["e"], 3);