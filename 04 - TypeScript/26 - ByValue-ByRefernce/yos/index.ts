

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
