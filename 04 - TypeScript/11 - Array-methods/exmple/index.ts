const arr: number[] = [1, 3, 45, 6, 7, 8, 9, 0, 34];
console.log(arr)
// array methods

let sum = 0;

arr.forEach(function (elm: number) {
    console.log(elm)
    sum += elm
})

console.log(sum)


console.log(arr.includes(222))

const index = arr.findIndex(function (elm: number) {
    return elm === 3;
})

//arrow function
const index2 = arr.findIndex((elm: number) => {
    return elm === 3;
})

const index3 = arr.findIndex(elm => {
    return elm === 3;
})

const index4: number = arr.findIndex(elm => elm === 3);

console.log(index)

//push = add
const fruits = ["Banana", "melon"];
fruits.push("Apple");
console.log('fruits', fruits)

fruits.unshift("Grapes")
console.log('fruits', fruits)

const arr2 = arr.filter(elm => elm >= 4);
console.log('arr2',arr2)

const word = "world";
