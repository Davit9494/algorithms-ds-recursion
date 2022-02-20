"use strict";
//Write a recursive function to determine whether all digits of the number are odd or not.
//Solution without recursion
// function checkNumberOdd(num) {
//   let flag = true;
//   let str = num + "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] % 2 === 0) {
//       flag = false;
//     } else {
//       flag = true;
//     }
//   }
//   return flag;
// }
// console.log(checkNumberOdd(5));

//Solution with recursion
function checkNumberOddOrNot(num, flag) {
  flag = true;
  num = num.toString();
  if (num.length === 0) return flag;
  if (num[0] % 2 === 0) {
    flag = false;
    return flag;
  } else {
    return checkNumberOddOrNot(num.slice(1), flag);
  }
}
console.log(checkNumberOddOrNot(5));
