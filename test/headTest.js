
const assertEqual = require('../assertEqual'); 
const head = require('../head'); 

assertEqual(head([1,2,3,3,4]), 1)
assertEqual(head([8,2,3,3,4]), 8)