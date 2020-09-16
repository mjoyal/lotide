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
  console.log("`✅✅✅ Assertion Passed: Arrays are identical.");
};

const countIndices = function (sentence, letter) {
  let indices = [];
  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] === letter) {
      indices.push(i);
    }
  }
  return indices; 
}

const letterPositions = function(sentence) {
  const results = {};
  for(letter of sentence) {
    if(letter !== ' ') {
      results[letter] = countIndices(sentence, letter);
    }
  }
  return results; 
};

assertEqArrays(letterPositions("hello").e, [1]);