function highestNumber(n1: number, n2: number, n3?: number, n4?: number): number | undefined {
    try {
        if (n4 && n3) {
            if (n4 > n1 && n4 > n2 && n4 > n3) {
                return n4;
            } else if (n3 > n4 && n3 > n2 && n3 > n1) {
                return n3
            } else if (n1 > n2 && n1 > n3 && n1 > n4) {
                return n1
            } else if (n2 > n1 && n2 > n3 && n2 > n4) {
                return n2;
            }

        } else if (n3) {
            if (n3 > n2 && n3 > n1) {
                return n3
            } else if (n1 > n2 && n1 > n3) {
                return n1
            } else if (n2 > n1 && n2 > n3) {
                return n2;
            }
        } else {
            if (n1 > n2) {
                return n1
            } else {
                return n2;
            }
        }

        throw new Error("couldn't find the highest number")


    } catch (error) {
        console.error(error);
        return undefined
    }
}



function sortArray(arr: number[]): number[] {
    try {
        let sortedArr: number[] = [];
        while (arr.length > 0) {
            let min = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            sortedArr.push(min);
            arr.splice(arr.indexOf(min), 1);
        }
        return sortedArr;
    } catch (error) {
        console.error(error);
        return []
    }
}

//a function gets 4 numbers, and return a string of the four numbers in order from the smallest to the largest, without using arrays sort method

function sortFourNumbers(n1: number, n2: number, n3: number, n4: number): string {
    try {
        let sortedArr = [n1, n2, n3, n4].sort((a, b) => a - b);
        return sortedArr.join(" -> ");
    } catch (error) {
        console.error(error);
        return ""
    }
}

console.log(sortFourNumbers(3,6,8,2)); // 2 -> 3 -> 6 -> 8