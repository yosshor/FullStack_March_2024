//set user name in the local storage
localStorage.setItem('name', "Yossi");

//get user name from the local storage
const userName = localStorage.getItem('name');

//update inner html of user div
const div = document.getElementsByClassName('user')[0] as HTMLDivElement;
if (div) {
    div.innerHTML = ` Hello ${userName} Welcome`;
}


//set user name in the session storage
sessionStorage.setItem('name', "Session Yossi");
//get user name from the session storage
let userNameSession = sessionStorage.getItem('name');
// userNameSession += " LastName"

const sessionDiv = document.getElementById('user-session') as HTMLDivElement;

if (sessionDiv) {
    sessionDiv.innerHTML = `Hello ${userNameSession}`;
}


//trying to save object
const obj = { a: 2, b: 3, c: 4 };
//convert obj to string 
const json = JSON.stringify(obj);

console.log(json)

sessionStorage.setItem("obj", json)
const objSession = document.getElementById("session-obj") as HTMLDivElement;
if (objSession) {
    objSession.innerHTML = json as string;
    console.log(JSON.parse(json))
}


class User {
    name: string;
    id: string;

    constructor(name: string) {
        this.name = name;
        this.id = crypto.randomUUID();
    }
}

//trying closures
function setUser() {
    let users: User[] = [];

    return function addUser(name: string): User[] {
        const userExists = users.find(user => user.name === name);
        if (userExists) {
            console.error("user already exist")
            return [...users];
        }
        const user = new User(name);
        users.push(user);
        console.log("user added")
        console.log(users)
        return users;
    }
}

const addUsers = setUser();
const addUser = (name: string) => { return addUsers(name) };

function handleAddUser(event) {
    event.preventDefault();

    //get user name
    const name = event.target.userName.value;
    console.log(name);
    const users: User[] = addUser(name);
    const usersStr = JSON.stringify(users);
    sessionStorage.setItem("users", usersStr);
    
    //parse str users into json 
    const json = JSON.parse(sessionStorage.getItem("users") as string)
    console.log(json)

    //reset form
    event.target.reset();
}