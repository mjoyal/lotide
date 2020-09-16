const middle = function (arr) {
  let middleArr = [];
  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else if(arr.length % 2 === 0) {
    middleArr.push(arr[(arr.length / 2) - 1]);
    middleArr.push(arr[(arr.length) / 2]);
  } else {
    middleArr.push(arr[(arr.length - 1) / 2]);
  }
  return middleArr;
};


console.log(middle(["a","b", "c", "d", "e"])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6, 7 ,8])); // => [3, 4]

