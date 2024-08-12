import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { renderForm } from './views/form.ts';
import { renderTasksList } from './views/tasksList.ts';



const form = document.querySelector<HTMLDivElement>('#form')!

if (form) renderForm(form)!;

