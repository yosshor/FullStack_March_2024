//loops
//for loop
for (let i: number = 0; i < 10; i += 2) {
    // a block code that runs X amount of times
    console.log(i)
}

// factorial n!  5! = 1*2*3*4*5

function factorial(num: number): number | undefined {
    try {
        console.time("factorial")
        let count = 1
        for (let i = 1; i <= num; i++) { 
            count *= i
        }
        console.timeEnd("factorial")
        return count;
    } catch (error) {
        console.error(error)
        return undefined
    }
}

console.log(factorial(150))

// function evenFactorial  7! = 2*4*6