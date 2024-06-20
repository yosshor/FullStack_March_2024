"use strict";

//ForEach loop example
function getSum(arr) {
  try {
    var sum = 0;
    arr.forEach(function (element) {
      sum += element;
    });
    console.log(sum);
    return sum;
  } catch (error) {
    console.log(error);
  }
}

console.log(getSum([1, 2, 3, 1]));

var getSumArrow = function getSumArrow(ele) {
  return function (ele) {
    return ele % 2 == 0;
  };
};

console.log(getSumArrow([2, 4, 3, 2, 3])); // findIndex return the num of the searched index 

var arr = ['yos', 'int', 4, 43, 90, true];
console.log(arr.findIndex(function (ele) {
  console.log(arr.findIndex(ele));
}));