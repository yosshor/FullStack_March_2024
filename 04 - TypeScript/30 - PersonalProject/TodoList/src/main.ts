import './views/styles/root.scss'
import { renderLogin } from './controllers/login';

const app = document.querySelector<HTMLDivElement>('#todo-list')! as HTMLDivElement;
if (app) renderLogin(app);
