// localStorage.setItem('name', 'John Doe');

// const newName = prompt('Enter your name:');
// if (newName)
//     localStorage.setItem('name', newName);

// // get the name from localStorage
// const name = localStorage.getItem('name');
// if (name)
//     document.body.innerHTML = `<h1>Hello, ${name}</h1>`;

// sessionStorage.setItem('name', 'John Doe');

// const newName = prompt('Enter your name (session):');
// if (newName)
//     sessionStorage.setItem('name', newName);

// get the name from localStorage
const name = sessionStorage.getItem('name');
if (name)
    document.body.innerHTML = `<h1>Hello, ${name}</h1>`;


