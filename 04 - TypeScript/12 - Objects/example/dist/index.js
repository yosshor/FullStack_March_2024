var firstName = "david";
var yearOfBirth = 1998;
var david = {
    // key:value
    yearOfBirth: -1040,
    firstName: "David",
    lastName: "King"
};
var Johnny = {
    yearOfBirth: -1038,
    firstName: "Johnny",
    lastName: "Son of Shaul"
};
var sara = {
    yearOfBirth: -1300,
    Father: "Haran"
};
console.log("The name is: " + david.firstName + " and his family name is: " + david.lastName);
var poffi = {
    color: ["blue", "yellow"],
    bread: "Budgie",
    age: 2,
    gender: "male",
    favoriteFood: "Millets",
    owner: "Naama"
};
console.log(poffi.owner + "'s parrot is a " + poffi.bread);
var michealCar = {
    brand: "Renault",
    model: "Clio",
    color: "White",
    year: 2018
};
var israelCar = {
    brand: "Toyota",
    model: "Corolla",
    color: "silver",
    year: 2008
};
function getCarsAge(car) {
    try {
        var year = car.year;
        var currentYear = new Date().getFullYear();
        return currentYear - year;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(getCarsAge(israelCar));
console.log(getCarsAge(michealCar));
