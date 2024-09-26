const h1Div = document.querySelector('h1') as HTMLHeadingElement;
const pDiv = document.querySelector('p') as HTMLParagraphElement;

if(h1Div){
    h1Div.addEventListener('click', (event) => {
        console.log('h1 clicked');
        if(h1Div.style.color === 'red'){
            h1Div.style.color = 'black'
            return;
        }
        h1Div.style.color = 'red';
    })
}