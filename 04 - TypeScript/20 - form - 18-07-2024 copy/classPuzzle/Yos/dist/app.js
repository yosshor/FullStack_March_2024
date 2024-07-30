function handleSubmitEvent(event) {
    event.preventDefault();
    try {
        var form = event.target;
        var name = form.name.value;
        var type = form.type.value;
        var coffee = form.coffee;
        var size = form.size;
        var coffeeSize_1 = '';
        var coffees_1 = [];
        var strong = form.strong.checked;
        var sugar = form.sugar;
        var featuresArray_1 = [];
        var features = form.features;
        form.features.forEach(function (i) { if (i.checked) {
            featuresArray_1.push(i.defaultValue);
        } });
        coffee.forEach(function (item) { if (item.checked) {
            coffees_1.push(item.defaultValue);
        } });
        size.forEach(function (item) { if (item.checked) {
            coffeeSize_1 = item.defaultValue;
        } });
        if (coffees_1.length > 1) {
            alert('Please choose only one Coffee');
            form.reset();
            return;
        }
        console.log(coffees_1 + ", " + name + ",  " + type + ", " + sugar.value + ", " + featuresArray_1 + ", " + coffeeSize_1);
        form.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function handleCoffeeType(event) {
    try {
        var coffeeType = [];
        var form = event.target;
        var coffee = form.coffee;
        console.log(coffee);
        console.dir(event);
    }
    catch (error) {
        console.error(error);
    }
}
