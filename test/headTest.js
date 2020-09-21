
const assert = require('chai').assert; 
const head = require('../head'); 

describe('#head', () => {
  it('returns 1 for [1,2,3]', () => {
    assert.strictEqual(head([1,2,3]), 1);
  }); 
  it('return undefined with []', () => {
    assert.strictEqual(head([]), undefined);
  }); 
  it('return hello with [hello, mackenzie, goodbye, mac]', () => {
    assert.strictEqual(head(['hello', 'mackenzie', 'goodbye', 'mac']), 'hello');
  }); 
}); 
