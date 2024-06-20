function divide(a:number, b:number):number {
    try {
        //assertion
        if (b === 0) {
            
            throw new Error('Cannot divide by zero');
        }

        return a / b;
    } catch (e) {
        console.error(e);
        return 0;
    }
    
}

console.log(divide(4, 0));