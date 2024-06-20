// array is a list of elements
var numbers = [76, 22, 30, 4, 5];
var strings = ['a', 'b', 'c', 'dear', 'e'];
var anys = [1, 'a', true, [1, 2, "3"]];
console.log(numbers);
console.log(numbers[2]);
console.log(strings);
console.log(strings[3]);
console.log("length:", numbers.length);
console.log("sort by ascending:", numbers.sort(function (a, b) { return a - b; }));
console.log("sort by descending:", numbers.sort(function (a, b) { return b - a; }));
console.log("get max", Math.max.apply(Math, numbers));
