const flatten = function (array) {
  let newArray = [];
  for(element of array) {
    if(Array.isArray(element)) {
      for(let i = 0; i < element.length; i++) {
        newArray.push(element[i]);
      }
    } else {
      newArray.push(element);
    }
  }
  return newArray; 
};

console.log(flatten());