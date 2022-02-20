"use strict";
function minPositive(arr, min) {
  if (min === undefined) min = Infinity;
  if (arr[0] < min && arr[0] >= 0) {
    min = arr[0];
  }
  if (arr.length === 0 && min === Infinity) {
    return -1;
  }
  if (arr.length === 0) {
    return min;
  }
  return minPositive(arr.splice(1), min);
}
console.log(minPositive([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(minPositive([45, -9, 15, 5, -78]));
console.log(minPositive([-5, -9, -111, -1000, -7]));
