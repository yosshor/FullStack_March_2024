//ForEach loop example
function getSum(arr) {
    try {
        var sum = 0;
        arr.forEach(function (element) {
            sum += element;
        });
        console.log(sum);
        return sum;
    }
    catch (error) {
        console.log(error);
    }
}
console.log(getSum([1, 2, 3, 1]));
// var getSumArrow:number[] = (ele: number[]):number[] => ele.filter((elm) => elm % 2 == 0);
// var temp:number[] = getSumArrow([2, 4, 3, 2, 3, 3])
// console.log(temp)
// findIndex return the num of the searched index 
var _arr = ['yos', 'int', 4, 43, 90, true];
//with function
var findIndex = _arr.findIndex(function (ele) {
    return ele === true;
});
//with arrow function
var findIndexArrow = _arr.findIndex(function (ele) {
    return ele === true;
});
//with arrow function shorter
var findIndexArrowShort = _arr.findIndex(function (elm) { return elm === true; });
console.log(findIndex, findIndexArrow, findIndexArrowShort);
//map the items and return arr of booleans
var newArr = ['yos', 'Mike', 23, 2, 1, 12, false, true];
var include = _arr.map(function (ele) { return newArr.includes(ele); });
console.log(include);
var filterItems = _arr.filter(function (ele) { return newArr.includes(ele); });
console.log(filterItems);
function findIndexInArray(arr, item) {
    try {
        return arr.findIndex(function (ele) { return ele === item; });
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
var filteredArray = [];
newArr.forEach(function (ele) {
    if (findIndexInArray(_arr, ele) != -1) {
        filteredArray.push(findIndexInArray(_arr, ele));
    }
});
console.log(filteredArray);
