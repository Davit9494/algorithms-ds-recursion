"use strict";
//Given an array. Write a recursive function that removes the first element and returns the
//given array. (without using arr.shift())

function fakeShift(arr, index = 1, newArr) {
  if (newArr === undefined) newArr = [];
  if (index < arr.length) {
    newArr.push(arr[index]);
  } else {
    return newArr;
  }

  return fakeShift(arr, ++index, newArr);
}

console.log(fakeShift([6, 78, "n", 0, 1]));
