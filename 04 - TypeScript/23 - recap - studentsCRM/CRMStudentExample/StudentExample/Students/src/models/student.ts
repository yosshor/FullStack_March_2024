export class Student {
    id: string;
    name: string;
    grades: Subject[];


    constructor(name: string) {
        this.name = name;
        this.id = crypto.randomUUID();
        this.grades = [];
    }
    addSubject(subject: string, score: number) {
        if (!this.grades) this.grades = [];
        this.grades.push({ subject: subject, score: score, id: crypto.randomUUID()});
    }


    updateSubject(subjectId:string, subjectName:string, score:number){
        if(!subjectName || !score) return;
        this.grades.forEach(subject => {if(subject.id === subjectId){
            
            subject.score = score;
            subject.subject = subjectName;
        } 
        });
    }

}


export interface Subject {
    subject: string;
    score: number;
    id: string;
}


export const students: Student[] = [];
