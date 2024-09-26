import express from 'express';
const app = express()
const port = 3000;

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
  // new Student("Joni", "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="),
  // new Student("Jane", "https://t3.ftcdn.net/jpg/05/04/24/20/360_F_504242030_Y45HiMdjBqLAZyeDRYljWdP1xniVMAxs.jpg"),
  // new Student("Bob", "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg")
];

app.use(express.static('public')) //serve static files from folder "public"

// Routes
//route
app.get('/data', (req: any, res: any) => {
  res.send(students);
})

const addStudentToArray = (req:any,res:any) => {
  try {
    const {name,imageUrl} = req.body;
    if(!name || !imageUrl) throw new Error("haser po mashu");
    const newStudent = new Student(name,imageUrl);
    students.push(newStudent);
    res.send({ok:true});
  } catch (error) {
    console.error(error);
    res.send({ok:false});
  }
}

app.post("/add-student",addStudentToArray);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})