var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//set user name in the local storage
localStorage.setItem('name', "Yossi");
//get user name from the local storage
var userName = localStorage.getItem('name');
//update inner html of user div
var div = document.getElementsByClassName('user')[0];
if (div) {
    div.innerHTML = " Hello " + userName + " Welcome";
}
//set user name in the session storage
sessionStorage.setItem('name', "Session Yossi");
//get user name from the session storage
var userNameSession = sessionStorage.getItem('name');
// userNameSession += " LastName"
var sessionDiv = document.getElementById('user-session');
if (sessionDiv) {
    sessionDiv.innerHTML = "Hello " + userNameSession;
}
//trying to save object
var obj = { a: 2, b: 3, c: 4 };
//convert obj to string 
var json = JSON.stringify(obj);
console.log(json);
sessionStorage.setItem("obj", json);
var objSession = document.getElementById("session-obj");
if (objSession) {
    objSession.innerHTML = json;
    console.log(JSON.parse(json));
}
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.id = crypto.randomUUID();
    }
    return User;
}());
//trying closures
function setUser() {
    var users = [];
    return function addUser(name) {
        var userExists = users.find(function (user) { return user.name === name; });
        if (userExists) {
            console.error("user already exist");
            return __spreadArrays(users);
        }
        var user = new User(name);
        users.push(user);
        console.log("user added");
        console.log(users);
        return users;
    };
}
var addUsers = setUser();
var addUser = function (name) { return addUsers(name); };
function handleAddUser(event) {
    event.preventDefault();
    //get user name
    var name = event.target.userName.value;
    console.log(name);
    var users = addUser(name);
    var usersStr = JSON.stringify(users);
    sessionStorage.setItem("users", usersStr);
    //parse str users into json 
    var json = JSON.parse(sessionStorage.getItem("users"));
    console.log(json);
    //reset form
    event.target.reset();
}
