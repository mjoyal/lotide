
const without = function (source, itemsToRemove) {
  let filtered = [];
  let remove = false; 
  for(let i = 0; i < source.length; i++) {
    for(let k = 0; k < itemsToRemove.length; k++) {
      if(source[i] === itemsToRemove[k]) {
        remove = true; 
      }
    }
    if(!remove) {
      filtered.push(source[i]);
    }
    remove = false; 
  }
  return filtered; 
};

module.exports = without; 