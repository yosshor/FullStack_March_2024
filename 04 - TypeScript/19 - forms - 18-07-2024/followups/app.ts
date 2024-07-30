function handleChange(event: Event) {
    try {
        console.log(event.target.value!);
    } catch (error) {
        console.error(error)
    }
}

function handleClick2(event){
    console.log(event)
}
function handleClick(event: Event) {
    try {
        console.log(event?.target.value)
    } catch (error) {
        console.error(error)
    }
}


function handleMouseOut(event: Event) {
    try {
        console.log(event?.target.value)
    } catch (error) {
        console.error(error)
    }
}

function handleChangeNumber(event: Event) {
    try {
        const value = event.target.value
        if (value > 2) {
            alert("Number must be less than 2")
        }
    } catch (error) {
        console.error(error)
    }
}

function handleSubmit(event: Event) {
    try {
        event.preventDefault()
        console.log(event.target)
        let features = event.target.features
        console.dir(features)
        let selectedCheckbox = []
        features.forEach(element => {
            if(element.checked)
                selectedCheckbox.push(element.value)
        });
    
        console.log(selectedCheckbox)
        console.log(event!.target['name']!.value)
        console.log(event.target.email.value)
        console.log(event!.target.checkbox!.checked)
        console.log(event!.target.select!.value)
        const form = event!.target as HTMLFormElement
        form.reset()

    } catch (error) {
        console.error(error)
    }
}