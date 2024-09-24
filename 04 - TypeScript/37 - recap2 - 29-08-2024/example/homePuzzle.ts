//model
const text = {text: 'Hello World'};

//view

function renderText(text: string, element: HTMLElement) {
    
    element.textContent = text;
}

//controller
const myInput = document.querySelector('#myInput') as HTMLInputElement;

myInput.addEventListener('keyup', (event:any) => {
    text.text = event.target.value;

    const output = document.querySelector('#output') as HTMLDivElement;
    renderText(text.text, output);
    
    
});




