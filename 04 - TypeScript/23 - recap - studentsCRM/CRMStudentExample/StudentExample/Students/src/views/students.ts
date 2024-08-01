import { addStudent, addSubject, addSubjectForm, deleteStudent } from "../controllers/students";
import { Student, students } from "../models/student";

import './dist/students.css'

export function renderStudents(): void {
    try {
        const studentElement = document.querySelector('.students-list') as HTMLDivElement;

        let html = '';
        students.forEach(student => {
            html += renderStudent(student);
        });
        studentElement.innerHTML = html;

        //add event listener to the add subject buttons
        const addSubjectButtons = document.querySelectorAll('[name="add-subject"]');
        
        //add event listener to the delete student buttons
        const deleteStudentButtons = document.querySelectorAll('[name="delete-student"]');

        if (addSubjectButtons)
             addSubjectButtons.forEach(button => button.addEventListener('click', addSubjectForm))

        if (deleteStudentButtons)
            deleteStudentButtons.forEach(button => button.addEventListener('click', deleteStudent))



    } catch (error) {
        console.error(error);
    }
}



export function renderStudent(student: Student): string | undefined {
    try {
        const studentHtml = `
            <div class= "student-info" id="a${student.id}">
                <div class="student" >
                    <h2>${student.name}</h2>
                    <p>${student.id}</p>
                    <div class="buttons buttons__add"><button name="add-subject" id="${student.id}">Add Subject</button></div>
                    <div class="buttons buttons__delete"><button name="delete-student" id="${student.id}">Delete Student</button></div>
                </div>
            </div>
        `;
        return studentHtml;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}


export function renderStudentForm(element: HTMLDivElement): void | undefined {
    try {
        const form = `
            <div class='form'><form  id='form'> 
                <input class='name' name="studentName" type="text" placeholder="enter student name" required>
                <button class="add" type="submit">Add Student</button>
            </form></div>`;
        element.innerHTML = form;
        console.log('form', form);
        const formElement = document.querySelector('#form') as HTMLFormElement;
        if (formElement) formElement.addEventListener('submit', addStudent)

    } catch (error) {
        console.error(error);
        return undefined;
    }
}