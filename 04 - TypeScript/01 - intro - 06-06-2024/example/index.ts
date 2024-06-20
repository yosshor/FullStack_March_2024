console.log("Hi")

function handleChange(event: any) {
    console.log(event.target?.value)

    const nameOutput = document.getElementById("nameOutput") as HTMLInputElement
    console.dir(name)
    nameOutput.innerText = event.target?.value

}