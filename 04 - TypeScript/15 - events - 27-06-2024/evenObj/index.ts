function handleClick(event) {
    console.log(event);
    console.dir(event.target); //the element that triggered the event
    event.target.innerText = "Clicked";
}

function handleBodyClick(event) {
    try {
        console.log("Body clicked", event.x, event.y);
        const boom = document.querySelector("#boom") as HTMLImageElement;
        if (!boom) throw new Error("Boom not found");

        boom.style.left = `${event.x}px`;
        boom.style.top = `${event.y}px`;
        boom.style.display = "block";
        setTimeout(() => {
            boom.style.display = "none";
        }, 800);
    } catch (error) {
        console.error(error);
    }

}