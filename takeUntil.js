const takeUntil = function (arr, callback) {
    let sliced = []; 
    for(let element of arr) {
      if(!callback(element)) {
        sliced.push(element); 
      } else {
        return sliced;
      }
    }
    return sliced; 
}; 

module.exports = takeUntil; 



