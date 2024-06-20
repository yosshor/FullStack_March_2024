// array is a list of elements

const numbers: number[] = [76, 22, 30, 4, 5];
const strings: string[] = ['a', 'b', 'c', 'dear', 'e'];
const anys: any[] = [1, 'a', true,  [1, 2, "3"]];

console.log(numbers);
console.log(numbers[2]);    
console.log(strings);
console.log(strings[3]);
console.log("length:",numbers.length);
console.log("sort by ascending:",numbers.sort((a,b)=>a-b));
console.log("sort by descending:",numbers.sort((a,b)=>b-a));
console.log("get max",Math.max(...numbers));
