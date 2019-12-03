const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [1] for when passed ('hello').e", () => {
    assert.deepEqual(letterPositions('hello').e, [1]);
  });
  it("returns [4, 9] for when passed ('watercolor').r", () => {
    assert.deepEqual(letterPositions("watercolor").r, [4, 9]);
  });
});