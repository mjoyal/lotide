const countInstances = function (array, item) {
  let count = 0; 
  for (let i = 0; i < array.length; i++) {
    if(array[i] === item) {
      count ++; 
    }
  }
  return count; 
};


const countOnly = function (arr, objectOriginal) {
  let newObject = {};
  for(let i = 0; i < arr.length; i++) {
    if(objectOriginal[arr[i]]) {
      newObject[arr[i]] = countInstances(arr, arr[i]);
    }
  }
  return newObject;
};




