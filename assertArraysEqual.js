const eqArrays = require('./eqArrays'); 

const assertArraysEqual = function (eqArrays) {
  if(!eqArrays) {
    console.log("🛑🛑🛑 Assertion Failed:  Arrays are not identical.");
  } else {
    console.log("✅✅✅ Assertion Passed: Arrays are identical.");
  }
}; 

assertArraysEqual(eqArrays);

module.exports = assertArraysEqual; 