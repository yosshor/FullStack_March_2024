function handleClick(event) {
    document.body.style.backgroundColor = randomColor();
}
function handleRightClick(event) {
    event.preventDefault();
    alert("WoW! You right clicked!");
}
//create function that create random color
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
