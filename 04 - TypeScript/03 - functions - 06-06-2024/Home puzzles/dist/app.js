//function that show the name with his age if its a valid age
function introduce(name, age) {
    try {
        if (name.length > 2) {
            if (age === null || age === undefined) {
                console.error("Age not provided.");
                return "Hi, Im " + name;
            }
            return "Hi, i'm " + name + ", and I'm " + age + " years old";
        }
        throw new Error('Your Name is invalid, please try again!');
    }
    catch (error) {
        console.error("Error -> " + error);
        return false;
    }
}
function combineWords(str1, str2) {
    try {
        return str1.length > 2 && str2.length > 2 ? str1 + " " + str2 : 'please insert a valid words';
    }
    catch (error) {
        console.error("Error -> " + error);
        return 'Some error occurred';
    }
}
function capitalize(str) {
    try {
        return str[0].toUpperCase() + str.substring(1);
    }
    catch (error) {
        console.error("Error -> " + error);
        return false;
    }
}
console.log(introduce("Yosef", 23));
console.log(introduce("Yosef"));
console.log(combineWords("Hello", "World"));
console.log(capitalize("hello"));
