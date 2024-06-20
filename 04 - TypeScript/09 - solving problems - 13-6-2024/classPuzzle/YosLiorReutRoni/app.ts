
function sort(n1: number, n2: number, n3: number, n4: number): string | undefined {

    try {
        var array = [n1, n2, n3, n4];
        var temp = [];
        for (let i = 0; i < array.length; i++) { 
            var highest = highestNumber(n1, n2, n3, n4);
            // temp[i] += highest
        }
        // console.log(highest);
        // return `${highest}`
        array = array.sort((a, b) => a - b);
        return `${array[0]},${array[1]},${array[2]},${array[3]}`
    } catch (error) {
        console.error(error);
        return undefined;
    }

}
console.log(sort(-1, 3, 1, 49));


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