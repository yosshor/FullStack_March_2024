
// x = "42"; 


//Data Types
//primitive data types
//number
const x: number = 23;
//string
const y: string = "Hello";
//boolean
const z: boolean = true;

console.log("first")
//reference data types

//Object
const obj: object = { name: "John", age: 23, isStudent: true };

//interface is a predefined type of object
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
    hasBikes?: boolean;
}

const ronny: Person = {
    name: "Ronny",
    age: 26,
    isStudent: true,
    hasBikes: true
};

class Student {
    name: string;
    age: number;
    isStudent: boolean;
    constructor(name: string, age: number, isStudent: boolean) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    //methods
    getDetails(): string {
        return `${this.name} is ${this.age} years old`;
    }
}
const eden = new Student("Eden", 23, true);
document.write(eden.getDetails());


//Array
const arr: number[] = [1, 2, 3, 4, 5];
const students: Student[] = [eden, new Student("John", 24, true), new Student("Jane", 25, false)];
console.log(students);

// ..array methods
//forEach --> loop through array

//filter --> filter out elements based on condition
//find student that register
const registeredStudents = students.filter((student) => { return student.isStudent});

//map --> transform each element of array

//reduce --> reduce array to single value (sum of all values)

//find --> find first element based on condition

//some --> check if any element satisfies the condition

//Function
const fun: Function = () => console.log("Hello");

const addNumbers: Function = (a: number, b: number) => { return a + b }; //arrow function
const addNumbers1 = function (a: number, b: number): number {
    return a + b;
} //anonymous function
function addNumbers2(a: number, b: number): number {
    return a + b;
} //regular function

// invoke function

console.log(addNumbers(2, 3));

//set
const set: Set<number> = new Set([1, 2, 3, 4, 5]);
//map
const map: Map<string, number> = new Map([["a", 1], ["b", 2], ["c", 3]]);