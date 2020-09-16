const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let object1Size = Object.keys(object1).length;
  let object2Size = Object.keys(object2).length;
  if (object1Size !== object2Size) {
    return false;
  } else if (object1Size === 0 && object2Size === 0) {
    return true;
  } else {
    for (let key in object1) {
      let keyValue1 = object1[key];
      let keyValue2 = object2[key];
      let testArray = eqArrays(object1[key], object2[key]);
      if (Array.isArray(keyValue1)) {
        if (!testArray) {
          return false;
        }
      } else if (keyValue1 !== keyValue2) {
        return false;
      }

    }
  }
  return true;
};
