const tail = require('../tail'); 
const assertArraysEqual = require('../assertArraysEqual'); 

assertArraysEqual(tail([1,2,3,3,4]), [2,3,3,4]); 
assertArraysEqual(tail([8,"string", "hello", true]), ["string", "hello", true])