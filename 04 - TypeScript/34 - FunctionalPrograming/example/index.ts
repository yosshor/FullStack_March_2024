//predictability

//pure functions

let x = 10;

function add(a: number, b: number): number {

    return a + b;
}

const obj = {
    name: "John",
    age: 25
}

obj.name="poop";
console.log(obj);

function changeName(obj: any): any {
    //immutability
    const _obj = { ...obj };
    _obj.name = "Doe";
    return _obj;
}


const obj2 = changeName(obj);

console.log(obj);
console.log(obj2);