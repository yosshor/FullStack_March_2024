interface Student {
    name: string;
    yearOfBirth: number;
    getAge: () => number;
}

const lior: Student = {
    name: 'Lior',
    yearOfBirth: 1998,
    getAge: getAge
}

const israel: Student = {
    name: 'Israel',
    yearOfBirth: 1994,
    getAge: getAge
}

function getAge(): number {
    return new Date().getFullYear() - this.yearOfBirth;
}

console.log(lior!.getAge());
console.log(lior.getAge());
console.log(israel.getAge());