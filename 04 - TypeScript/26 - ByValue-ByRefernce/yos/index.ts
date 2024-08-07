


class Student {
    name: string;
    id: string;
    totalMarks: number = 0;
    constructor(name: string, totalMarks: number) {
        this.name = name;
        this.totalMarks = totalMarks;
        this.id = crypto.randomUUID().toString();
    }
}

// const students : Student[] = []

function setStudent() {
    const students: Student[] = [];
    return function addStudent(name: string, totalMarks: number) {
        const student = new Student(name, totalMarks);
        students.push(student);
        return students;
    }
}

const add = setStudent();
add('david', 12);
add('shalom', 234);
add('yosef', 12);
const students = add('yakov', 32);
console.log(students);



class Item {
    name: string;
    id: string;
    price: number;
    inStock: number;
    constructor(name: string, price: number, inStock: number) {
        this.name = name;
        this.price = price;
        this.id = crypto.randomUUID().toString();
        this.inStock = inStock;
    }
    sellItem() {
        this.inStock--;
    }
    addItem() {
        this.inStock++;
    }
    changePrice(price: number) {
        this.price = price;
    }
}

function setItem() {
    const items: Item[] = [];
    return function addItem(name:string, price:number, inStock:number ) {
        const findItem : Item = items.find(item => item.name === name) as Item;
        if(findItem){
            findItem.changePrice(price)
            return items.sort((a, b) => (a.price - b.price ));
        }
        const item: Item = new Item(name, price, inStock);
        items.push(item);
        return items;
    }
}

const items = setItem();
items('book', 12, 10);
items('pen', 2, 20);
items('phone', 8, 45);
items('pen', 1589, 20);
items('pencil', 1, 30);
items('notebook', 5, 15);

const addItems = items('pencil', 566, 1500);
console.log(addItems);



class User{
    id:string;
    name:string;
    age:number;
    title:string;
    married:boolean;

    constructor(name:string, age:number, title:string, married:boolean){
        this.name = name;
        this.age = age;
        this.title = title;
        this.married = married;
        this.id = crypto.randomUUID().toString();
    }
    changeTitle(title:string){
        this.title = title;
    }
    changeName(name:string){
        this.name = name;
    }
}


function setUser(){
    const users:User[] = [];
    return function addUser(name:string, age:number, title:string, married:boolean){
        const user = new User(name, age, title, married);
        users.push(user);
        return users.sort((a,b) => (a.age - b.age));
    }
}


const addUser = setUser();
addUser('david', 25, 'manager', true);
addUser('shalom', 30, 'manager', true);
addUser('yossi',12,'developer',true)

const addUsers = addUser('yakov', 32, 'developer', false);
console.log(addUsers);


let a = 12
const b = a;
a = 123;
console.log(b,a) // value by value

let obj = {
    name:'Yossi',
    age: 12,
    title:'developer'
}

const obj2 = obj;
obj.name = 'david';
console.log(obj2, obj) // object by reference


//if i want to copy object value
const obj3 = {...obj}
obj3.name = 'shalom';
console.log(obj3, obj) // object by value

//another way
const obj4 = Object.assign({}, obj); 
obj.name = 'yakov';
console.log(obj4, obj) // object by value
