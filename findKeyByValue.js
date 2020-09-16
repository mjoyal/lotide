const findKeyByValue = function (object, value) {
  let firstKey = '';
  for(let key in object) {
    if(object[key] === value) {
      return key; 
    }
  }
  return undefined; 
};
