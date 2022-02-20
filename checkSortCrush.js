"use strict";
//Given an array of numbers which is almost sorted in ascending order. Find the index
//where sorting order is violated.
function sortCheck(arr, index) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      index = i;
      return index + 1;
    } else {
      index = -1;
    }
  }
  return index;
}

console.log(sortCheck([10, 15, 2, 6]));
console.log(sortCheck([10, 15, 20, 333]));
console.log(sortCheck([10, 15, 44, 63, 2, 5]));
console.log(sortCheck([2, 12, 15, 48, 64]));
console.log(sortCheck([-9, -4, -4, 3, 12, 4, 5]));
