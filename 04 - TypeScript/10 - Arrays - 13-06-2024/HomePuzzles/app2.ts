const arr = [9, 1, 2, 3, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6];

//function deceleration
function frequencyCounter(array: number[]): number[] | undefined {
    try {
        //get array

        //count how much in each number
        const counted: number[] = [];

        for (let elm of array) {
            console.log(elm)
            if (!counted[elm]) {
                counted[elm] = 1
            } else {
                counted[elm]++;
            }
        }


        let items: number[] = []
        let elements: number[] = []
        let tempArray: number[] = []
        counted.forEach((ele, item) => {
            items.push(item)
            elements.push(ele)
        })
        console.log(items,elements)
        var sortingElements = elements.sort((a, b) => a - b).reverse()
        console.log(sortingElements)
        // console.log(items[2])
        // for(let i:number = 1; i<=sortingElements.length-1; i++){
        let countLength:number = 0
        for (let i of sortingElements) {
            console.log(i)
            if(tempArray.includes(i)){
                console.log('inc',i,countLength)
                tempArray.push(items[countLength])
            }
            tempArray.push(items[i-1])
            countLength++;
        }
        console.log(tempArray)

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
        return []

    } catch (error) {
        console.error(error)
        return undefined
    }
}

//invoke function
console.log(frequencyCounter(arr))