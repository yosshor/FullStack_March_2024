// const  express = require("express")
import express from 'express';

const app = express()
const port = 3000


class User {
  constructor(public id: number, public name: string) {
    this.id = id
    this.name = name
  }
}

const users: User[] = [
  new User(1, 'John Doe'),
  new User(2, 'Jane Doe'),
  new User(1234, 'Dan'),
]
app.use(express.static('public')) 


app.get('/api/users:id/name:name', (res:any, req:any) => {
    try {
        const {id, name} = res.params;
        if(!id || !name) throw new Error('id or name not found');
        const user = users.find(user => user.id === parseInt(id))
        if(!user) throw new Error('user not found')
        res.status(200).send(user)
    
    } catch (error) {
        console.error(error);
        res.status(400).send(error)
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})