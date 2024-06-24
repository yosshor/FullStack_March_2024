// ## Student Object:

// Define a TypeScript interface or class named Student.
// # Properties:
// - name (string): The student's name.
// - grades (number[]): An array to store the student's grades.
// # Method:
// calculateAverage(): Calculates and returns the average of the grades array.
// Create Students:
// Create an array named students and populate it with 5 Student objects.
//  Give each student a name and a set of grades.

interface Students {
    name: string;
    grades: number[];
    calculateAverage: () => number | undefined;
}
const student1: Students = {
    name: 'yos',
    grades: [2, 32, 1, 23, 4],
    calculateAverage: calculateClassAverage
}
const student2: Students = {
    name: 'yos2',
    grades: [2, 32, 1, 23, 4, 23],
    calculateAverage: calculateClassAverage
}
const student3: Students = {
    name: 'yos1',
    grades: [2, 32, 1, 23, 4, 34],
    calculateAverage: calculateClassAverage
}
const student4: Students = {
    name: 'yos3',
    grades: [2, 32, 1, 23, 4, 89],
    calculateAverage: calculateClassAverage
}

const student5: Students = {
    name: 'yos4',
    grades: [2, 32, 1, 23, 4, 2],
    calculateAverage: calculateClassAverage
}

console.log(student5.calculateAverage())
console.log(student5)


// # Calculate All Students' Average:

// 1) Write a function calculateClassAverage(students: Student[]): number that takes the students array as input.
// Iterate through the students, calling the calculateAverage() method for each student.
// Calculate and return the overall average grade for the entire class.
// Sort Students by Average:

function calculateClassAverage(this: Students): number | undefined {
    try {
        if (this.grades.length === 0) {
            throw new Error('Please insert some grades into the array list');
        }
        let average: number[] = this.grades;
        let sumGrades: number = 0;
        average.forEach(element => {
            sumGrades += element;
        });
        return this.grades.reduce((a, b) => a + b) / this.grades.length
        // return sumGrades / this.grades.length;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}


// 2) Write a function sortStudentsByAverage(students: Student[]): 
// Student[] that takes the students array as input.
// Sort the students array in descending order based on 
// their average grades (highest average first).
// Return the sorted array of students.

function sortStudentsByAverage(students: Students[]): Students[] | undefined {
    try {

        const studentsArray: any[] = []
        students.forEach(
            student =>
                studentsArray.push([
                    student.name,
                    student.grades,
                    student.calculateAverage()
                ])
        )
        console.log('students results', ...studentsArray)
        students.sort((a, b) => (a.calculateAverage()! - b.calculateAverage()!))
        return students;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
function sortStudentsByAverageShort(students: Students[]): Students[] | undefined {
    try {
        return students.sort((a, b) => a.calculateAverage()! - b.calculateAverage()!);
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
var students: Students[] = new Array(student1, student2, student3, student4, student5)
var sortingStudents = sortStudentsByAverage(students)
console.log(sortingStudents)