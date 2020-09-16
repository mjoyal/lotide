const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countInstances = function (sentence, letter) {
  let count = 0; 
  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] === letter) {
      count++; 
    }
  }
  return count; 
};

const countLetters = function (sentence) {
  let newObject = {};
  for(letter of sentence) {
    if(letter !== ' ') {
      newObject[letter] = countInstances(sentence, letter);
    }
  }
  return newObject;
};

console.log(countLetters("lighthouse in the house"));