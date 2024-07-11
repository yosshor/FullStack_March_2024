import User from '../../models/users/users';
import './dist/user.css'

export default function renderUser(user:User){
    try {
        const html = `
        <div class='user' id="${user.id}"> 
            <img src="${user.img}" alt="this is ${user.name}"></img>
            <p>Name : ${user.name}</p>
            <div class='user-sign' id='user-sign'>
               <button id=${user.id}>Sign In</button>
            </div>
        </div>
        `;

        return html;

    } catch (error) {
        console.error(error);
        return ''
    }
}

