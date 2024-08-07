const student = {name: 'John', age: 25};

// shallow copy
const david = {...student}; //deconstructing by value
david.name = 'David';
david.age = 20;

const orly = {...student};
orly.name = 'Orly';
orly.age = 30;

const micahel = Object.assign({}, student);
micahel.name = 'Michael';
micahel.age = 35;

const olga = new Object(student) as {name: string, age: number};
olga.name = 'Olga';
olga.age = 30;

console.log('david',david);
console.log('orly',orly);
console.log('micahel',micahel);
console.log('olga',olga);