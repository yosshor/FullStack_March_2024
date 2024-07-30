export class Student{
    id:string;
    name:string;
    grades:Subjects[] = null!;


    constructor(name:string){
        this.name = name;
        this.id = crypto.randomUUID();
    }
    addGrades(subject:string, score:number){
        this.grades.push({subject, score});
    }

}


export interface Subjects{
    subject:string;
    score:number;
}


export const students:Student[] = [];
