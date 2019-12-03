const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it(`returns true for (ab, ba)`, () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it(`returns false for (abc, ba)`, () => {
    assert.deepEqual(eqObjects(abc, ba), false);
  });
  it(`returns false for (abc, ab)`, () => {
    assert.deepEqual(eqObjects(abc, ab), false);
  });
  it(`returns true for (cd, dc)`, () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it(`returns false for (dc, cd2)`, () => {
    assert.deepEqual(eqObjects(dc, cd2), false);
  });
});

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