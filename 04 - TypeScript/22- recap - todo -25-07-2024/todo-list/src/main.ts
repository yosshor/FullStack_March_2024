import { tasks } from './model/todoModel'
import './style.css'
import { renderForm } from './view/form'
import { renderList } from './view/list'


const form = document.querySelector('#form') as HTMLDivElement
const list = document.querySelector('#list') as HTMLDivElement

renderForm(form)
renderList(tasks, list)

