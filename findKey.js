const findKey = function (object, callback) {
  for(let key in object) {
    console.log('key:', key); 
    console.log('value', object[key]); 
    if(callback(object[key])) {
      return key; 
    }
  }
  return undefined; 
};

module.exports = findKey; 