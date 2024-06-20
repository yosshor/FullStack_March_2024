var yossiCar = {
    year: 2012,
    model: 'Clio',
    brand: 'Toyota',
    color: 'white'
};
console.log("Your Car is: model " + yossiCar.model + " - brand " + yossiCar.brand + " " + yossiCar.year + " - " + yossiCar.color + " ");
function getCarAge(car) {
    try {
        var carYear = car.year;
        var currentDate = new Date();
        console.log(carYear, currentDate.getUTCFullYear());
        return currentDate.getUTCFullYear() - carYear;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(getCarAge(yossiCar));
