const express = require("express");
const path = require('path');

const app = express();
const port = 3000;


const json = [
    { name: "Yos", image: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Moshe", image: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2232" },
    { name: "Yakov", image: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png" },

]
class User {
    name: string;
    imageUrl: string;
    id: string;
    constructor(name: string, imageUrl: string) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.id = `id-${crypto.randomUUID()}`;
    }
}

function InitializeUsers() {
    var users: User[] = [];

    return function addUser(name?: string, imageUrl?: string): User[] {
        if (!name || !imageUrl) return users;
        const user = new User(name, imageUrl);
        users.push(user);
        return users;
    }
}

// Initialize the closure
const addUser = InitializeUsers();
json.forEach((user) => {
    addUser(user.name, user.image);
})

// Get the list of users
const allUsers = addUser(); // Will return the current array of users


// Routes
//root route
app.use('/', express.static(path.join(__dirname, 'public')))

app.use(express.json());

// get all users
app.get('/api/todos', (req: any, res: any) => {
    try {
        res.send(allUsers);

    } catch (error: any) {
        res.send({ ok: false, error: error.message })
    }
})


//add new user
app.post('/api/todos', (req: any, res: any) => {
    try {
        if (req.body.name.length <= 2 || req.body.imageUrl.length <= 2) {
            res.send({ ok: false, error: "Name and imageUrl should be at least 3 characters" })
            return
        }
        allUsers.push(new User(req.body.name, req.body.imageUrl));
        res.send(allUsers);
    } catch (error: any) {
        res.send({ ok: false, error: error.message })
    }
})

// delete user
app.delete('/api/delete-user/:id', (req: any, res: any) => {
    try {
        const id = req.body.id;
        const index = allUsers.findIndex((user) => user.id === id);
        console.log(index,id)
        if (index !== -1) {
            allUsers.splice(index, 1);
            res.send(allUsers);
        } else {
            res.send({ ok: false, error: "User not found" })
        }
    } catch (error:any) {
        res.send({ ok: false, error: error.message })

    }
});

// Start the server 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
