


function calculateBusTicketPrice(age: number, ticketPrice: number): number | undefined {
    try {
        if (age < 18) {
            ticketPrice *= 0.5;
        }
        else if (age >= 18 && age <= 67) {
            ticketPrice *= 1;
        }
        else {
            ticketPrice *= 0.8;
        }
        return ticketPrice;
    } catch (error) {
        console.error(error);
        return undefined;

    }
}


// # Sum of Odd Numbers Function
function sumOfOddNumbers(n: number): number | undefined {
    try {
        if (n < 0) {
            throw new Error("Enter positive number");
        }
        let count = 0;
        for (let i: number = 1; i <= n; i++) {
            if (i % 2 != 0) {
                count += i;
            }
        }
        return count;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

// console.log(sumOfOddNumbers(-3))



// # FizzBuzz Function
function fizzBuzz(num: number): void | undefined {
    try {
        if (num < 0) { throw new Error('Insert Positive number') }
        for (let i: number = 1; i <= num; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                console.log(`${i} FizzBuzz`);
            }
            else if (i % 3 == 0) {
                console.log(`${i} Fizz`);
            }
            else if (i % 5 == 0) {
                console.log(`${i} Buzz`);
            }
        }
    } catch (error) {
        console.error(error);
        return undefined;
    }

}

// console.log(fizzBuzz(12))
// console.log(fizzBuzz(-15))
// console.log(fizzBuzz(3))
// console.log(fizzBuzz(4))
// console.log(fizzBuzz(5))



// # Prime Number Checker

function isPrime(num: number): boolean {
    try {
        if(num == 1 || num == 2) {return true;}
        if(num == 0){ throw new Error("You should insert positive number")}
        for (let i = 2; i < num; i++) {
                if (num % i  == 0) {
                    console.log(i)
                    return false;
                }
        }
        return true;

    } catch (error) {
        console.error(error);
        return false;
    }

}
console.log(isPrime(7));




const b = Math.random() * 4;