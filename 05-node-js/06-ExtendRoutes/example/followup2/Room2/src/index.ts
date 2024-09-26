import express from 'express';
const app = express()
const port = 3000

console.log("Hello World")


const usersRoutes = require('./routes/usersRoutes')
app.use('/api/users', usersRoutes)

app.use(express.static('public')) //serve static files from folder "public"


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})