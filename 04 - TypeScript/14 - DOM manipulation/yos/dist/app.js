var yosa = document.getElementById("yos");
console.dir(yosa === null || yosa === void 0 ? void 0 : yosa.children[0].innerHTML);
function getText() {
    var _a;
    var input = document.getElementById('inputText');
    input === null || input === void 0 ? void 0 : input.style.width = '250px';
    (_a = input === null || input === void 0 ? void 0 : input.style) === null || _a === void 0 ? void 0 : _a.height = '50px';
    input === null || input === void 0 ? void 0 : input.style.fontSize = '50px';
    input === null || input === void 0 ? void 0 : input.style.backgroundColor = 'yellow';
    console.log(input === null || input === void 0 ? void 0 : input.value);
    input === null || input === void 0 ? void 0 : input.style.color = 'blue';
    input === null || input === void 0 ? void 0 : input.style.borderRadius = '15px';
    if ((input === null || input === void 0 ? void 0 : input.value.length) > 13) {
        var divInput = document.getElementById('inputDiv');
        divInput === null || divInput === void 0 ? void 0 : divInput.style.position = 'fixed';
        console.log('Length bigger than 13');
    }
}
function clicked() {
    var button = document.getElementById('button');
    var h1 = document.getElementById('yos1');
    if ((button === null || button === void 0 ? void 0 : button.innerText) === 'Clicked') {
        button === null || button === void 0 ? void 0 : button.innerText = 'Click';
    }
    else {
        // alert("You Just Clicked")
        h1 === null || h1 === void 0 ? void 0 : h1.innerText += ' You Just Clicked ';
        button === null || button === void 0 ? void 0 : button.innerText = 'Clicked';
    }
}
