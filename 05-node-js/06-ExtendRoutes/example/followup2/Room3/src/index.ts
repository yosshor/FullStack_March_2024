import express from 'express';
const app = express()
const port = 3000

console.log("Hello World")

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


app.get('/api/users/:id', (req, res) => {
  try {
    const {id} = req.params
    if (!id) throw new Error('No id provided')
      const user = users.find(u => u.id === parseInt(id));
    if (!user) throw new Error('No user found')
      res.status(200).json(user);
  } catch (error:any) {
    console.error(error)
    res.status(501).json({error: error.message})
  }
})

app.use(express.static('public')) //serve static files from folder "public"
// Routes
//root route
// app.get('/hi', (req, res) => {
//   console.log("someone called me")
//   res.send('<h1>Hello From Express</h1><p>Express is a web application framework for Node.js</p>')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})