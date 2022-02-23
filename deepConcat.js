"use strict";
//Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
//function that concats arrays).
function deepConcat(arr, target = 0, result) {
  if (result === undefined) result = [];
  arr.map((item) => {
    if (Array.isArray(item)) {
      result.push(...deepConcat(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log(deepConcat([1, [3, 4, [1, 2]], 10])); // [1, 3, 4, 1, 2, 10]
console.log(deepConcat([1, [3, 4, [1, 2], [12, 12, [], 11]], 10])); // [1, 3, 4, 1, 2, 12, 12, 11, 10]
console.log(deepConcat([14, [1, [[[3, []]], 1], 0]])); // [14, 1, 3, 1, 0]
