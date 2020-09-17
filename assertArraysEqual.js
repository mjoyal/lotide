const assertEqArrays = function (array1, array2) {
  if(array1.length !== array2.length) {
    return "🛑🛑🛑 Assertion Failed:  Arrays are not identical.";
  } else {
    for(let i = 0; i < array1.length; i++) {
      if(array1[i] !== array2[i]) {
        return "🛑🛑🛑 Assertion Failed:  Arrays are not identical.";
      }
    }
  }
  return"✅✅✅ Assertion Passed: Arrays are identical.";
};
