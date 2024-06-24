interface StudentNew {
    name: string;
    age: number;
    getAge: () => number;
}



const yos = {
    name: 'yos',
    age: 23,
    getAge: getAge
}


function getAge(this:StudentNew): number {
    return this.age * 2
}

console.log(yos.getAge())