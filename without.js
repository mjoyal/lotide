const eqArrays = function (array1, array2) {
  if(array1.length !== array2.length) {
    return false;
  } else {
    for(let i = 0; i < array1.length; i++) {
      if(array1[i] !== array2[i]) {
        return false; 
      }
    }
  }
  return true; 
};

const assertEqArrays = function (array1, array2) {
  if(array1.length !== array2.length) {
    console.log("🛑🛑🛑 Assertion Failed:  Arrays are not identical.");
  } else {
    for(let i = 0; i < array1.length; i++) {
      if(array1[i] !== array2[i]) {
        console.log("🛑🛑🛑 Assertion Failed:  Arrays are not identical.");
      }
    }
  }
  console.log("✅✅✅ Assertion Passed: Arrays are identical.");
};


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

console.log(assertEqArrays(without([1, 2, 3], [1]), [2, 3]));
console.log(assertEqArrays(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']));

// check if 1st item of source doesn't match the items to remove. 
// if that's true, then add 