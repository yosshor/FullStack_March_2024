var arr = [9, 1, 2, 3, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6];
//function deceleration
function frequencyCounter(array) {
    try {
        //get array
        //count how much in each number
        var counted = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var elm = array_1[_i];
            console.log(elm);
            if (!counted[elm]) {
                counted[elm] = 1;
            }
            else {
                counted[elm]++;
            }
        }
        var items_1 = [];
        var elements_1 = [];
        var tempArray = [];
        counted.forEach(function (ele, item) {
            items_1.push(item);
            elements_1.push(ele);
        });
        console.log(items_1, elements_1);
        var sortingElements = elements_1.sort(function (a, b) { return a - b; }).reverse();
        console.log(sortingElements);
        // console.log(items[2])
        // for(let i:number = 1; i<=sortingElements.length-1; i++){
        var countLength = 0;
        for (var _a = 0, sortingElements_1 = sortingElements; _a < sortingElements_1.length; _a++) {
            var i = sortingElements_1[_a];
            console.log(i);
            if (tempArray.includes(i)) {
                console.log('inc', i, countLength);
                tempArray.push(items_1[countLength]);
            }
            tempArray.push(items_1[i - 1]);
            countLength++;
        }
        console.log(tempArray);
        // for(let i in sortingElements){
        //     // console.log(items[i+1])
        //     console.log(i);
        // }
        // counted.splice(ele,1);
        // console.log(Math.max(...counted.pop(undefined)))
        // var max = Math.max(...counted);
        // console.log(...counted)
        // console.log(counted)
        //go over counted
        //return array of ordered numbers
        return [];
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//invoke function
console.log(frequencyCounter(arr));
