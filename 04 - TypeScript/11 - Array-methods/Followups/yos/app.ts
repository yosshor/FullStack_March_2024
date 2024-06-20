
//ForEach loop example
function getSum(arr: number[]): number | undefined {
    try {
        var sum = 0;
        arr.forEach(element => {
            sum += element;
        })
        console.log(sum);

        return sum;
    } catch (error) {
        console.log(error);
    }
}

console.log(getSum([1, 2, 3, 1]))


// var getSumArrow:number[] = (ele: number[]):number[] => ele.filter((elm) => elm % 2 == 0);
// var temp:number[] = getSumArrow([2, 4, 3, 2, 3, 3])
// console.log(temp)

// findIndex return the num of the searched index 
var _arr: any[] = ['yos', 'int', 4, 43, 90, true]

//with function
const findIndex = _arr.findIndex(function (ele): any {
    return ele === true;
})
//with arrow function
const findIndexArrow = _arr.findIndex((ele): any =>
    ele === true
)
//with arrow function shorter
const findIndexArrowShort: number = _arr.findIndex(elm => { return elm === true })

console.log(findIndex, findIndexArrow, findIndexArrowShort)

//map the items and return arr of booleans
var newArr: any[] = ['yos', 'Mike', 23, 2, 1, 12, false, true]
const include: boolean[] = _arr.map(ele => newArr.includes(ele))
console.log(include)

const filterItems = _arr.filter((ele) => newArr.includes(ele));
console.log(filterItems)

function findIndexInArray(arr: any[], item: any): number | undefined {
    try {
        return arr.findIndex(ele => ele === item)
    } catch (error) {
        console.error(error)
        return undefined;
    }
}

let filteredArray:any[] = []
newArr.forEach(ele => {if(findIndexInArray(_arr, ele) != -1){
    filteredArray.push(findIndexInArray(_arr, ele))}
});

console.log(filteredArray);

