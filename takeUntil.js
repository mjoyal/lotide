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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertEqArrays(results1, data1));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertEqArrays(results2, data2));




