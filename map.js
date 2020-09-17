const map = function (arr, callback) {
  let mapped = []; 
  for(let element of arr) {
    mapped.push(callback(element)); 
  }
  return mapped; 
};
