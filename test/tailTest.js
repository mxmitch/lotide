const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// TEST CODE
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);