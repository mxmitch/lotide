const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [5, 6] for [1, 2, 5, 6, 8, 10]", () => {
    assert.deepEqual(middle([1, 2, 5, 6, 8, 10]), [5, 6]);
  });
});