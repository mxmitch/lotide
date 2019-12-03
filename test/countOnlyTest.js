const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it(`returns 1 for Jason`, () => {
    const result1 = countOnly(firstNames, {
      "Jason": true,
      "Karima": true,
      "Fang": true
    });
    assert.strictEqual(result1["Jason"], 1);
  });
  it(`returns undefined for Karmina`, () => {
    const result1 = countOnly(firstNames, {
      "Jason": true,
      "Karima": true,
      "Fang": true
    });
    assert.strictEqual(result1["Karima"], undefined);
  });
  it(`returns 2 for Fang`, () => {
    const result1 = countOnly(firstNames, {
      "Jason": true,
      "Karima": true,
      "Fang": true
    });
    assert.strictEqual(result1["Fang"], 2);
  });
});

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];