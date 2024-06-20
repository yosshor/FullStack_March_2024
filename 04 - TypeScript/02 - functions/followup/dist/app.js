var x = 12;
var y = 23;
// console.log(x + y);
function divide(a, b) {
    if (b > 0)
        return (a / b);
    else
        console.error('cant divide by zero');
    return 0;
}
function add(a, b) {
    return a + b;
}
function multiple(a, b) {
    return a * b;
}
// console.log(divide(12, 32));
// console.log(add(12, 32));
// console.log(multiple(12, 32));
function greet(name) {
    try {
        return "Hello " + name;
    }
    catch (error) {
        console.error("Some error occurred - " + error);
        return false;
    }
}
// console.log(greet("Alice"));
function returnDouble(number) {
    try {
        return number / 1.0;
    }
    catch (error) {
        console.error("Error : " + error);
        return 0;
    }
}
function rectangleArea(width, height) {
    try {
        if (height === 0) {
            throw new Error("Cant divide by zero");
        }
        return width * height;
    }
    catch (error) {
        console.error("Error = {error}");
        return 0;
    }
}
function square(num) {
    try {
        if (num === 0) {
            throw new Error("Insert number greater than zero");
        }
        return Math.sqrt(num);
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}
function stringLength(str) {
    try {
        return "The Length is " + str.length;
    }
    catch (error) {
        console.error("Error -> " + error);
        return undefined;
    }
}
console.log(returnDouble(12));
console.log(rectangleArea(12, 23));
console.log(square(4));
console.log(stringLength("12"));
