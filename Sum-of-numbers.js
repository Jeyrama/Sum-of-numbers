/*
Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and then return it. 
If the two numbers are equal, return a or b.

Note: a and b are not ordered!
*/


// Solution

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

// or

function GetSum(a, b) {
  return (a + b) * (Math.abs(a - b) + 1) / 2;
}