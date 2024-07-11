var Pet = /** @class */ (function () {
    function Pet(name, src, description, age, price) {
        this.name = name;
        this.src = src;
        this.description = description;
        this.age = age;
        this.price = price;
        this.position = this.getPosition();
    }
    Pet.prototype.getPosition = function () {
        try {
            return { top: Math.random() * 100 + "vh", left: Math.random() * 100 + "vh" };
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    };
    return Pet;
}());
