function handleClicked(event) {

    console.log(event)
    console.log(event.x)
    console.log(event.y)
    const dom = WriteToDom(event.x, event.y)
    console.log(dom)


}



function WriteToDom(x: number, y: number): string | undefined {
    try {
        const clickEvent = document.getElementById('#clicked');
        console.log(clickEvent)
        const addDiv = document.createElement('div');
        addDiv.style.width = '10px';
        addDiv.style.height = '10px';
        addDiv.style.backgroundColor = 'red';
        addDiv.style.top = `${y}px`;
        addDiv.style.left = `${x}px`;
        addDiv.style.position = 'absolute';
        addDiv.style.transform = 'translate(-10px, -95px)';
        // addDiv.style.border = '2px solid black';

        clickEvent?.appendChild(addDiv)

        // clickEvent?.innerText += clickEvent;
        return `
            <div style="width:10px;height:10px;background-color:red;top:${y}px;left:${x}px;position: absolute"></div>
        `;
    } catch (error) {
        console.error(error);
        return undefined
    }
}


function handleChange(event) {
    const text = event.target.value;
    console.log(event)
    const p = document.getElementById('#upper');
    p?.innerHTML = text.toUpperCase()
    if (text.length > 5) {
        p?.style.color = 'green';
    }
    console.log(text.toUpperCase())

}

function handleClickMakeBigger(event): undefined | void {
    try {
        // const buttonId = document.getElementById("buttonId");
        // buttonId?.style.width += '10px'
        const button: number = event.target.style.width.split('px')[0] * 1.1;
        event.target.style.width += button + 'px'
        console.log(button)
    } catch (error) {
        console.error(error);
        return undefined;
    }

}

function disappear() {
    try {
        const disappear = document.getElementById('catch');
        disappear?.style.display = 'none'
        console.log('clicked')
    } catch (error) {
        console.error(error);
        return undefined;
    }
}