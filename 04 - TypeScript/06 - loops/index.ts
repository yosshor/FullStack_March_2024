
function factorial(num:number):string|undefined{
    try {
        let result = 1;
        console.time('factorial')
        for(let i:number = 1; i <= num; i++){
            if(i%2 == 0){
                console.log(i);
                result *= i;
            }
        }
        console.timeEnd('factorial');
        return 'Factorial result ' + String(result);
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

console.log(factorial(5));