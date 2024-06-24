// ## Student Object:
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var student1 = {
    name: 'yos',
    grades: [2, 32, 1, 23, 4],
    calculateAverage: calculateClassAverage
};
var student2 = {
    name: 'yos2',
    grades: [2, 32, 1, 23, 4, 23],
    calculateAverage: calculateClassAverage
};
var student3 = {
    name: 'yos1',
    grades: [2, 32, 1, 23, 4, 34],
    calculateAverage: calculateClassAverage
};
var student4 = {
    name: 'yos3',
    grades: [2, 32, 1, 23, 4, 89],
    calculateAverage: calculateClassAverage
};
var student5 = {
    name: 'yos4',
    grades: [2, 32, 1, 23, 4, 2],
    calculateAverage: calculateClassAverage
};
console.log(student5.calculateAverage());
console.log(student5);
// # Calculate All Students' Average:
// 1) Write a function calculateClassAverage(students: Student[]): number that takes the students array as input.
// Iterate through the students, calling the calculateAverage() method for each student.
// Calculate and return the overall average grade for the entire class.
// Sort Students by Average:
function calculateClassAverage() {
    try {
        if (this.grades.length === 0) {
            throw new Error('Please insert some grades into the array list');
        }
        var average = this.grades;
        var sumGrades_1 = 0;
        average.forEach(function (element) {
            sumGrades_1 += element;
        });
        return this.grades.reduce(function (a, b) { return a + b; }) / this.grades.length;
        // return sumGrades / this.grades.length;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
// 2) Write a function sortStudentsByAverage(students: Student[]): 
// Student[] that takes the students array as input.
// Sort the students array in descending order based on 
// their average grades (highest average first).
// Return the sorted array of students.
function sortStudentsByAverage(students) {
    try {
        var studentsArray_1 = [];
        students.forEach(function (student) {
            return studentsArray_1.push([
                student.name,
                student.grades,
                student.calculateAverage()
            ]);
        });
        console.log.apply(console, __spreadArrays(['students results'], studentsArray_1));
        students.sort(function (a, b) { return (a.calculateAverage() - b.calculateAverage()); });
        return students;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function sortStudentsByAverageShort(students) {
    try {
        return students.sort(function (a, b) { return a.calculateAverage() - b.calculateAverage(); });
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
var students = new Array(student1, student2, student3, student4, student5);
var sortingStudents = sortStudentsByAverage(students);
console.log(sortingStudents);
