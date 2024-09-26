
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
        console.log(req.query)
        const { id, age, name } = req.query
        console.log(id,age,name)
        if (!name) throw new Error('No name provided')
        const user = users.find(u => u.name === name);
        if (!user) {
            return res.send({'user':'No user found'})
        }
        res.status(200).send(user);

    } catch (error: any) {
        console.log(error)
        console.error(error)
        res.status(501).send(error.message)
    }
});

router.get('delete-user/' , (req:any, res:any) =>{
    try {
        console.log(req.query)
        const {name} = req.params;
        const userIndex = users.findIndex(user => user.name === name)
        if(userIndex < 0) return res.send({'error':"User not found"});
        users.splice(userIndex,1)
        res.status(200).send({'delete':"user deleted"})
    } catch (error) {
        console.error(error);
        router.status(400).send(error)
    }
})



module.exports = router