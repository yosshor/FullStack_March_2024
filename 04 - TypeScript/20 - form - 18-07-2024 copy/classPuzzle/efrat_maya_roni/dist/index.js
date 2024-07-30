var Coffee = /** @class */ (function () {
    function Coffee(coffeeType, milk, features) {
        this.coffeeType = coffeeType;
        this.milk = milk;
        this.features = features;
    }
    return Coffee;
}());
var coffees = [];
function handleCoffeeOrder(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var form = ev.target;
        var coffeeType = form.coffeeType.value;
        var milk = form.milk.value;
        var features = form.features;
        features.forEach(function (feature) {
            if (feature.checked) {
                console.log('feature', feature.value);
            }
        });
        var coffee = new Coffee(coffeeType, milk, features);
        coffees.push(coffee);
        console.log(coffees);
        form.reset();
    }
    catch (error) {
        console.error(error);
    }
}
