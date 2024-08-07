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
        var user = users.find(function (user) { return user.name === name; });
        if (user) {
            user.changeTitle(title);
            console.log('user title changed');
            return;
        }
        else {
            var user_1 = new User(name, age, title, married);
            users.push(user_1);
            console.log('user added successfully');
            return users.sort(function (a, b) { return (a.age - b.age); });
        }
    };
}
var addUser = setUser();
addUser('david', 25, 'manager', true);
addUser('shalom', 30, 'manager', true);
addUser('yossi', 12, 'developer', true);
addUser('yossi', 12, 'haircut', true);
var addUsers = addUser('yakov', 32, 'developer', false);
console.log(addUsers);
