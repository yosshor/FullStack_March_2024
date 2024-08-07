//closures



const newFunction = outerFunction('Hello');
console.log(newFunction('World')); // Hello World 1
console.log(newFunction('TypeScript')); // Hello TypeScript 2
console.log(newFunction('JavaScript')); // Hello JavaScript 3
console.log(newFunction('Python')); // Hello Python 4
console.log(newFunction('Java')); // Hello Java
console.log(newFunction('C#')); // Hello C#


let x = 5;

for (let i = 0; i < 5; i++) {

    console.log(i + x);

}


function stam(word) {
    let count = 0;
    console.log(word + count);
    count++;
}

stam('hello'); // hello 0
stam('world'); // world 0
stam('TypeScript'); // TypeScript 0

function outerFunction(outerVariable: string) {

    let count = 0;

    return function innerFunction(innerVariable: string) {
        count++;
        return `${outerVariable} ${innerVariable} (${count})`;
    };
}

class Student {
    id: string;
    name: string;
    totalMarks: number = 0;
    constructor(name: string) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.name = name;
    }

    setMarks(marks: number) {
        this.totalMarks = marks;
    }
}



function setStudents() {
    const students: Student[] = [];
    return function addStudent(name: string, totalMarks: number = 0) {
        const student = new Student(name);
        student.setMarks(totalMarks);
        students.push(student);
        return students;
    }
}

const addStudent = setStudents();

addStudent('John', 67);
addStudent('Jane', 78);
const students = addStudent('Alice', 100);
students[0].setMarks(90);
console.log(students); // [ Student { id: '0.123456789', name: 'John' }, Student { id: '0.123456789', name: 'Jane' }, Student { id: '0.123456789', name: 'Alice' } ]



