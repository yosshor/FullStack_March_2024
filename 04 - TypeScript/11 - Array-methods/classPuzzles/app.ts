function filterStringsByLength(arr:string[], minLength:number):string[]{
    try {
        if(!Array.isArray(arr)){
            throw new Error("input is not an array");
    }
    if(typeof minLength !== 'number' || minLength < 0 ||!Number.isInteger(minLength)){
        throw new Error("minLength is not a valid number");
    }
    const filteredArray = arr.filter(str => str.length >= minLength);
    return filteredArray;
}
catch(error) {
    console.error(error.message);
    return [];
}
}

const words = ["hello", "world", "this", "is", "a", "beautiful", "day"];
const filteredWords = filterStringsByLength(words, 5);

console.log(filteredWords);

/* Filtering Words by Letter */

function filterWordsByLetter(arr:string[], letter:string):string[]{
    try {
        if(!Array.isArray(arr)){
            throw new Error("input is not an array");
    }
    if(typeof letter !== 'string' || letter.length!== 1){
        throw new Error("invalid input");
    }
    const filteredArray = arr.filter(word => word.includes(letter));
    return filteredArray;
    }
    catch(error) {
        console.error(error);
        return [];
    }
}

const words2 = ["hello", "world", "JavaScript", "coding"];
const filteredWords2 = filterWordsByLetter(words2, "o");
console.log(filteredWords2);

/* Filtering Strings from Mixed Data*/

function filterStrings(data:any[]):number[] {
    try {
        if(!Array.isArray(data)){
            throw new Error("input is not an array");
        }
       const onlyNums = data.filter(elm => typeof elm === "number");
       onlyNums.sort((a, b) => a - b);
       return onlyNums;
    }
    catch(error) {
        console.error(error);
        return [];
    
}
}
const mixedData = [1, "hello", 3.14, "world", true];
const onlyNums = filterStrings(mixedData);
console.log(onlyNums);