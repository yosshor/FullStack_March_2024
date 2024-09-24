import './styles/main.scss';
import { renderLogin } from './controllers/Authentication/login';


const app = document.querySelector<HTMLDivElement>('#app')! as HTMLDivElement;
if (app) renderLogin(app);
