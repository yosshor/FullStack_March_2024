function handleClick(event) {
    console.log(event);
    console.dir(event.target); //the element that triggered the event
    event.target.innerText = "Clicked";
}
function handleBodyClick(event) {
    try {
        console.log("Body clicked", event.x, event.y);
        var boom_1 = document.querySelector("#boom");
        if (!boom_1)
            throw new Error("Boom not found");
        boom_1.style.left = event.x + "px";
        boom_1.style.top = event.y + "px";
        boom_1.style.display = "block";
        setTimeout(function () {
            boom_1.style.display = "none";
        }, 800);
    }
    catch (error) {
        console.error(error);
    }
}
