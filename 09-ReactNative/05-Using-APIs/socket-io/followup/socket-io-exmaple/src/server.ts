import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import path from 'path';

const app = express();
const server = createServer(app);
const io = new Server(server);
const port = 3000;

//body parser
app.use(express.json()) //parse json data
// const __dirname = dirname(fileURLToPath(import.meta.url));

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'public/index.html'));
// });
// const __dirname = dirname(fileURLToPath(import.meta.url));

// Get the absolute path to the public directory
const publicPath = path.join(__dirname, '..', 'public');

// Serve static files from the public directory
app.use(express.static(publicPath));

// Serve index.html with absolute path
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'), { root: '/' });
});

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



// app.use(express.static('public')) //serve static files from folder "public"

// Routes
//route
app.get('/data', (req: any, res: any) => {

  res.send(students);
})



const  addStudentToArray = (req: any, res: any) => {
  try {
    console.log(req.body);
    const { name, imageUrl } = req.body;
    if (!name || !imageUrl) throw new Error("Name and imageUrl are required");

    const newStudent = new Student(name, imageUrl);
    students.push(newStudent);

    res.send({ ok: true })
  } catch (error:any) {
    console.error(error)
    res.send({ ok: false, error: error.message })
  }
}
app.post("/add-student",addStudentToArray )

io.on('connection', (socket) => {

  console.log('a user connected');
  console.log(socket.id);
  
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg + ' from ' + socket.id);
    io.emit('chat message', msg);

  });
  socket.on('disconnect', () => {
    console.log('user disconnected ', socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
})