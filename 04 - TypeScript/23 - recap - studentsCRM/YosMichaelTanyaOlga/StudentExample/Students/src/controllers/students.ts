import { Student, students } from "../models/student";
import { renderStudents } from "../views/students";


export function addStudent(event: any) {
    try {
        event.preventDefault();
        const studentElement = document.querySelector('.students-list') as HTMLDivElement;
        const name = event.target.studentName.value;
        students.push(new Student(name));
        renderStudents(studentElement);
        event.target.reset();

    } catch (error) {
        console.error(error);
    }
}