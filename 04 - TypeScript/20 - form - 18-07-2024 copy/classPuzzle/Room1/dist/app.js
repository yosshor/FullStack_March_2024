var Coffee = /** @class */ (function () {
    function Coffee(name, type, size, extra) {
        this.name = name;
        this.type = type;
        this.size = size;
        this.extra = extra;
    }
    return Coffee;
}());
var coffees = [];
function handleAddCoffeeOrder(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var form = ev.target;
        var name = form.name.value;
        var type = form.coffeeType.value;
        var size = form.size.value;
        var extras = [];
        for (var i = 0; i < form.elements.length; i++) {
            var element = form.elements[i];
            if (element.type === "checkbox" && element.checked) {
                extras.push(element.value);
            }
        }
        var coffee = new Coffee(name, type, size, extras);
        coffees.push(coffee);
        console.log(coffees);
        form.reset();
    }
    catch (e) {
        console.error("Error:", e);
    }
}
