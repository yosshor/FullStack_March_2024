import { Console } from "console";

function main() {
    try {
        const getDanBtn = document.getElementById('getDanBtn');
        if (!getDanBtn) throw new Error('No button found');

        getDanBtn.addEventListener('click', async () => {
            console.log('getDanBtn clicked');
            const response = await fetch(`/api/users/get-user-by-id/1234`);

            if (!response.ok) throw new Error('No response');

            const data = await response.json();
            console.log(data);
        });

        const getByName = document.getElementById('getDanBtn');
        if (!getByName) throw new Error('No button found');
       
    } catch (error) {
        console.error(error);

    }
}

async function handleSearchName (e: any){
    e.preventDefault();
    try {
        console.dir(e.target)
        console.log("handleSearchName");
        if (!e.target) throw new Error('No target');

        const name = e.target.name.value;
        if (!name) throw new Error('No name provided');
        console.log("name", name);
        const response = await fetch(`/api/users/search-user?name=${name}&age=30&id=2342`);
        if (!response.ok) throw new Error('No response');
        const data = await response.json();
        console.log(data);
        if (data.user) {
            console.error('No user found');
        } else {
            console.log(`User found: ${data.name}`);
        }

    } catch (error) {
        console.error(error);
    }
}

async function handleDeleteUser(e:any){
    e.preventDefault();
    try {
        console.log('trying to delete')
        const name = document.querySelector("#name") as HTMLInputElement;
        if (!name) throw new Error('No name found');
        //get the name from the input field
        const nameValue = (name as HTMLInputElement).value;
        console.log(nameValue)
        // const req = await fetch('/api/users/delete-user/')
        const response = await fetch(`/api/users/delete-user/?name=${nameValue}`)
        if (!response.ok) throw new Error('No response');
        const data = await response.json();
        console.log(data);
        if (data.delete) {
            console.error('User deleted successfully');
        } else {
            console.error(data.error);
        }

    } catch (error) {
        console.error(error)
    }
}