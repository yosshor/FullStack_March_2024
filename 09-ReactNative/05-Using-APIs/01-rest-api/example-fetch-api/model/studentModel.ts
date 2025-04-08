export interface Student {
    id: string;
    name: string;
    imageUrl: string;
}

export const students: Student[] = [{
        id: "id-1",
       name:"Joni",
       imageUrl: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
    },
    {
        id: "id-2",
        name:"Jane",
        imageUrl: "https://t3.ftcdn.net/jpg/05/04/24/20/360_F_504242030_Y45HiMdjBqLAZyeDRYljWdP1xniVMAxs.jpg"
    },
    {
        id: "id-3",
        name:"Bob",
        imageUrl: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
    }
]