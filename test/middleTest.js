const middle = require('../middle'); 
const assert = require('chai').assert; 

describe('#middle', () => {
  it('returns [2] for [1,2,3]', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  }); 
  it('return [4,5] with [1, 2, 3, 4, 5, 6, 7 ,8]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7 ,8]), [4,5]);
  }); 
  it('return [c] with ["a","b", "c", "d", "e"]', () => {
    assert.deepEqual(middle(["a","b", "c", "d", "e"]), ['c']);
  }); 
}); 
