"use strict";

function isLonger(str1, str2) {
  try {
    if (str1.length > str2.length) {
      return str1;
    } else if (str2.length > str1.length) {
      return str2;
    } else {
      return "Even";
    }
  } catch (error) {
    console.error(error);
    return "Some Error Occurred";
  }
}

console.log(isLonger("Tal", "Roni"));
console.log(isLonger("Yossi", "Tal"));
console.log(isLonger("Tal", "Shimon"));