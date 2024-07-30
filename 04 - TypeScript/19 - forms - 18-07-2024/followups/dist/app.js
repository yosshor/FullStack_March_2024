function handleChange(event) {
    try {
        console.log(event.target.value);
    }
    catch (error) {
        console.error(error);
    }
}
function handleClick2(event) {
    console.log(event);
}
function handleClick(event) {
    try {
        console.log(event === null || event === void 0 ? void 0 : event.target.value);
    }
    catch (error) {
        console.error(error);
    }
}
function handleMouseOut(event) {
    try {
        console.log(event === null || event === void 0 ? void 0 : event.target.value);
    }
    catch (error) {
        console.error(error);
    }
}
function handleChangeNumber(event) {
    try {
        var value = event.target.value;
        if (value > 2) {
            alert("Number must be less than 2");
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleSubmit(event) {
    try {
        event.preventDefault();
        console.log(event.target);
        var features = event.target.features;
        console.dir(features);
        var selectedCheckbox_1 = [];
        features.forEach(function (element) {
            if (element.checked)
                selectedCheckbox_1.push(element.value);
        });
        console.log(selectedCheckbox_1);
        console.log(event.target['name'].value);
        console.log(event.target.email.value);
        console.log(event.target.checkbox.checked);
        console.log(event.target.select.value);
        var form = event.target;
        form.reset();
    }
    catch (error) {
        console.error(error);
    }
}
