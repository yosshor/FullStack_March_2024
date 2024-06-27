var yosa = document.getElementById("yos");
console.dir(yosa?.children[0].innerHTML);

function getText() {
    const input = document.getElementById('inputText')
    input?.style.width = '250px';
    input?.style?.height! = '50px';
    input?.style.fontSize = '50px';
    input?.style.backgroundColor = 'yellow'
    console.log(input?.value)
    input?.style.color = 'blue';
    input?.style.borderRadius = '15px'
    if (input?.value.length > 13) {
        const divInput = document.getElementById('inputDiv');
        divInput?.style.position = 'fixed'
        console.log('Length bigger than 13')
    }
}

function clicked() {
    const button = document.getElementById('button');
    const h1 = document.getElementById('yos1');
    if (button?.innerText === 'Clicked') {
        button?.innerText = 'Click'
    }

    else {
        // alert("You Just Clicked")
        h1?.innerText += ' You Just Clicked '   
        
        button?.innerText = 'Clicked'
    }
}