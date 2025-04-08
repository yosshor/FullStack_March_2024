import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
const app = express()
const port = 3000;
import { pool } from './controllers/db';

// connect the sockets to tha server
const server = createServer(app);
const io = new Server(server);

//body parser
app.use(express.json()) //parse json data


console.log("Hello World")

//Model
class Student {
  name: string;
  imageUrl: string;
  id: string;
  constructor(name: string, imageUrl: string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.id = `id-${crypto.randomUUID()}`;
  }

}

const students: Student[] = [
  new Student("Joni", "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="),
  new Student("Jane", "https://t3.ftcdn.net/jpg/05/04/24/20/360_F_504242030_Y45HiMdjBqLAZyeDRYljWdP1xniVMAxs.jpg"),
  new Student("Bob", "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg")
];



app.use(express.static('public')) //serve static files from folder "public"

// Routes
//route
app.get('/data', (req: any, res: any) => {

  res.send(students);
})



const addStudentToArray = (req: any, res: any) => {
  try {
    console.log(req.body);
    const { name, imageUrl } = req.body;
    if (!name || !imageUrl) throw new Error("Name and imageUrl are required");

    const newStudent = new Student(name, imageUrl);
    students.push(newStudent);

    res.send({ ok: true })
  } catch (error: any) {
    console.error(error)
    res.send({ ok: false, error: error.message })
  }
}
app.post("/add-student", addStudentToArray)

app.get("/rooms", async (req: any, res: any) => {
  const rooms = await pool.execute("SELECT * FROM rooms")
  res.send({ rooms: rooms[0] })
})

//waiting for user handshake
io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on('join room', (roomId) => {
    console.log('user joined room', roomId, socket.id);
    socket.join(roomId);
  })

  socket.on('leave room', (roomId) => {
    console.log('user left room', roomId, socket.id);
    socket.leave(roomId);
  })

  socket.on('chat message', ({ message, roomId }) => {
    console.log('message: ' + JSON.stringify({ message, roomId }));
    if (!roomId) {
      io.emit('chat message', message);
    } else {

      io.to(roomId).emit('chat message', message);
    }
  });


  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})