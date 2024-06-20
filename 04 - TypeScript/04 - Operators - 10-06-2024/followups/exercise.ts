function isEven(num:number):boolean|undefined{
    try {
        if(num % 2 == 0){
            return true;
        }
        else{
            throw new Error("num is not defined")
        }
        return  false 
    } catch (error) {
        console.error(error);
        return false;
    }
}


console.log(isEven(12));

let x:number = 12;
x += 12;
x *= 2;
x /= 2;
console.log(x);

// console.log(x === u)

function isToddler(age:number):boolean|undefined{
    try {
        let maxToddlerAge = 2;
        return  age <= maxToddlerAge ? true : false
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

console.log(isToddler(3));


