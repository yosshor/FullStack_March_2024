const timer = document.getElementById('time');
setInterval(() => {
  if (timer)
    timer.textContent = new Date().toLocaleTimeString();
}, 1000);


//model
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
  // new Student("John", "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=")
];


//view
renderStudents(students);

function renderStudents(students: Student[]) {

  try {
    let html = "<ol>";
    students.forEach((student) => {
      html += `<div class= "student"> 
          <div class="student__image" style="background-image:url('${student.imageUrl}')"></div>
           <div class="student__name">${student.name}</div>
          </div>
          `;
    });
    html += "</ol>";

    const studentList = document.querySelector(
      "#studentsList"
    ) as HTMLDivElement;
    if (!studentList) throw new Error("List not found");
    studentList.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

//events and controllers
const theForm = document.querySelector("#addStudent") as HTMLFormElement;
if (theForm) {
  theForm.addEventListener("submit", handleAddStudent);
}

function handleAddStudent(ev: any) {
  ev.preventDefault();
  try {
    const form = ev.target;
    const studentName = form.studentName.value;
    const studentImage = form.imageUrl.value;
    students.push(new Student(studentName, studentImage));
    renderStudents(students);

    const student = new Student(studentName, studentImage);
    addStudentToDB(student);

    ev.target.reset();
  } catch (error) {
    console.error(error);
  }
}


// async programming

const getData = document.querySelector("#get-data") as HTMLButtonElement;
if(getData){
  getData.addEventListener("click", handleGetData);
}

async function handleGetData(){
  try {
    const response = await fetch("/data"); //get data from server
    console.log(response);
    if(!response.ok) throw new Error("Error fetching data");
    const data = await response.json() as Student[]; //convert to json format
    console.log(data) 
    renderStudents(data);

    const resDog = await fetch("https://dog.ceo/api/breeds/image/random"); //rest API
    const dataDog = await resDog.json();
    console.log(dataDog);
  } catch (error) {
    console.error(error);
  }
}

//add data to server
async function addStudentToDB(student: Student){
  try {
    const response = await fetch("/add-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student) //passing the data (in JSON format)
    });
    if(!response.ok) throw new Error("Error adding student");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}


