"use strict";
//Given a number. Write a function that calculates its sum of the digits and if that sum has
//more than 1 digit find the sum of digits of that number. Repeat that process if needed
//and return the result.

function calculateSumOfDigits(num, sum = 0) {
  num = num + "";
  for (let i = 0; i < num.length; i++) {
    if (/\d/.test(num[i])) {
      sum += Number(num[i]);
    }
  }
  if (sum < 10) {
    return sum;
  }
  return calculateSumOfDigits(sum);
}

console.log(calculateSumOfDigits(14));
console.log(calculateSumOfDigits(999999999999));
