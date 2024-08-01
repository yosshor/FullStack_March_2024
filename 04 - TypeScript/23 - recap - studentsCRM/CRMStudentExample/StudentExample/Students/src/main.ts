import './style.css'
import { renderStudentForm } from './views/students.ts'


const student = document.querySelector<HTMLDivElement>('.add-student')
 if(student) { renderStudentForm(student)};

