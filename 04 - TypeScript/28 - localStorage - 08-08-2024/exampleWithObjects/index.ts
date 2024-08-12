// const x = { a: 1, b: 2, c: 3 };

// localStorage.setItem('x', JSON.stringify(x));

// const _y = localStorage.getItem('x');
// if (_y) {
//     const y = JSON.parse(_y);
//     console.log(y);
// }

class User {
    constructor(public name: string, public yearOfBirth: number) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    getAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
}

const users: User[] = getUsersFromLocalStorage();




function getUsersFromLocalStorage() {
    const _users: User[] = [];
    const _usersFromLocalStorage = localStorage.getItem('usersLS');
    if (_usersFromLocalStorage) {
        const usersFromLocalStorage = JSON.parse(_usersFromLocalStorage);

        usersFromLocalStorage.forEach((user: User) => {
            _users.push(new User(user.name, user.yearOfBirth));
        });
        return _users;
    }

    return [];
}

function renderStudents() {
    let html = '<ul>';
    users.forEach((user: User) => {
        html += `<li>${user.name} - ${user.getAge()}</li>`;
    });
    html += '</ul>';
    return html;
}



function handleAddUser(event) {
    event.preventDefault();

    const userName = event.target.userName.value;
    const _userYearOfBirth = event.target.year.value;
    const userYearOfBirth = new Date(_userYearOfBirth).getFullYear();

    const newUser = new User(userName, userYearOfBirth);
    users.push(newUser);
    console.log(users);
    event.target.reset();

    localStorage.setItem('usersLS', JSON.stringify(users));
    const usersElement = document.querySelector('#usersElement')
    if (usersElement) usersElement.innerHTML = renderStudents();
}