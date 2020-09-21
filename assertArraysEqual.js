const eqArrays = require('./eqArrays'); 

const assertArraysEqual = function (actual, expected) {
  let result = eqArrays(actual, expected); 
  if(!result) {
    console.log(`🛑🛑🛑 Assertion Failed:  Arrays are not identical. ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: Arrays are identical. ${actual} === ${expected}`);
  }
}; 

module.exports = assertArraysEqual; 