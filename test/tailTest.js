const tail = require('../tail'); 
const assert = require('chai').assert; 

describe('#tail', () => {
  it('returns [2,3,3,4] for [1,2,3,3,4]', () => {
    assert.deepEqual(tail([1,2,3,3,4]), [2,3,3,4]);
  }); 
  it('return ["string", "hello", true] with [8,"string", "hello", true]', () => {
    assert.deepEqual(tail([8,"string", "hello", true]), ["string", "hello", true]);
  }); 
}); 
