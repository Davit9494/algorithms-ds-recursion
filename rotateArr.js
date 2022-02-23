"use strict";
//Given an array and a number N. Write a recursive function that rotates an array N
//places to the left. (Hint: to add element to the beginning use arr.unshift())

function rotateArr(arr, num, cutArr) {
  if (num < 0) {
    num = arr.length + num;
  }
  if (cutArr) {
    let result = [];
    result.unshift(...cutArr.slice(0, num));
    result.unshift(...arr);
    return result;
  } else {
    let slicedArr = arr.slice(num);
    return rotateArr(slicedArr, num, arr);
  }
}

console.log(rotateArr(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
console.log(rotateArr(["a", "b", "c", "d", "e", "f", "g", "h"], -2));
