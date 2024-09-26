const express = require('express')
const router = express.Router();


class User {
    constructor(public id: number, public name: string) {
      this.id = id
      this.name = name
  
    }
  }
  
  const users: User[] = [
    new User(1, 'John'),
    new User(2, 'Jane'),
    new User(1234, 'Dan'),
  ]
  

router.get('/get-user-by-id/:id', (req:any, res:any) => {
    try {
        console.log('/api/users/:id 1')
        const { id } = req.params
        if (!id) throw new Error('No id provided')
        const user = users.find(u => u.id === parseInt(id));
        if (!user) {
            res.status(404).send('No user found')
        }
        res.status(200).send(user);

    } catch (error: any) {
        console.error(error)
        res.status(501).send(error.message)
    }
});

router.get('/search-user', (req:any, res:any) => {
    try {
        console.log('/api/users/search-user 2')
        const { name, age } = req.query
        console.log("age", age);
        console.log("name", name);
        if (!name) throw new Error('No name provided')
        const user = users.find(u => u.name === name);
        if (!user) {
            res.status(404).send('No user found')
        }
        res.status(200).send(user);

    } catch (error: any) {
        console.log(error)
        console.error(error)
        res.status(501).send(error.message)
    }
});


module.exports = router