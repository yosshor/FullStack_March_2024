//create model for counter
let counter: number = 1;

//controller function
function handleClick(): number {
    counter++;
    console.log(counter);
    renderCounter(counter); //invocation of view function
    return counter;
}

//view function
function renderCounter(counter: number): void {
    try {
        const screenCounter = document.querySelector('#counter');
        if (!screenCounter) {
            throw new Error('Element not found');
        }
        screenCounter.textContent = counter.toString();
    } catch (error) {
        console.error(error);

    }
}