var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Student = /** @class */ (function () {
    function Student(name, totalMarks) {
        this.totalMarks = 0;
        this.name = name;
        this.totalMarks = totalMarks;
        this.id = crypto.randomUUID().toString();
    }
    return Student;
}());
// const students : Student[] = []
function setStudent() {
    var students = [];
    return function addStudent(name, totalMarks) {
        var student = new Student(name, totalMarks);
        students.push(student);
        return students;
    };
}
var add = setStudent();
add('david', 12);
add('shalom', 234);
add('yosef', 12);
var students = add('yakov', 32);
console.log(students);
var Item = /** @class */ (function () {
    function Item(name, price, inStock) {
        this.name = name;
        this.price = price;
        this.id = crypto.randomUUID().toString();
        this.inStock = inStock;
    }
    Item.prototype.sellItem = function () {
        this.inStock--;
    };
    Item.prototype.addItem = function () {
        this.inStock++;
    };
    Item.prototype.changePrice = function (price) {
        this.price = price;
    };
    return Item;
}());
function setItem() {
    var items = [];
    return function addItem(name, price, inStock) {
        var findItem = items.find(function (item) { return item.name === name; });
        if (findItem) {
            findItem.changePrice(price);
            return items.sort(function (a, b) { return (a.price - b.price); });
        }
        var item = new Item(name, price, inStock);
        items.push(item);
        return items;
    };
}
var items = setItem();
items('book', 12, 10);
items('pen', 2, 20);
items('phone', 8, 45);
items('pen', 1589, 20);
items('pencil', 1, 30);
items('notebook', 5, 15);
var addItems = items('pencil', 566, 1500);
console.log(addItems);
var User = /** @class */ (function () {
    function User(name, age, title, married) {
        this.name = name;
        this.age = age;
        this.title = title;
        this.married = married;
        this.id = crypto.randomUUID().toString();
    }
    User.prototype.changeTitle = function (title) {
        this.title = title;
    };
    User.prototype.changeName = function (name) {
        this.name = name;
    };
    return User;
}());
function setUser() {
    var users = [];
    return function addUser(name, age, title, married) {
        var user = new User(name, age, title, married);
        users.push(user);
        return users.sort(function (a, b) { return (a.age - b.age); });
    };
}
var addUser = setUser();
addUser('david', 25, 'manager', true);
addUser('shalom', 30, 'manager', true);
addUser('yossi', 12, 'developer', true);
var addUsers = addUser('yakov', 32, 'developer', false);
console.log(addUsers);
var a = 12;
var b = a;
a = 123;
console.log(b, a); // value by value
var obj = {
    name: 'Yossi',
    age: 12,
    title: 'developer'
};
var obj2 = obj;
obj.name = 'david';
console.log(obj2, obj); // object by reference
//if i want to copy object value
var obj3 = __assign({}, obj);
obj3.name = 'shalom';
console.log(obj3, obj); // object by value
//another way
var obj4 = Object.assign({}, obj);
obj.name = 'yakov';
console.log(obj4, obj); // object by value
