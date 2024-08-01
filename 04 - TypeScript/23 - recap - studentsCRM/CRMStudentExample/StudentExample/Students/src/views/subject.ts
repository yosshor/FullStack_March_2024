import { Student, Subject } from "../models/student";

export function renderFormSubject(id: string): string {
    const addSubjectInput = `<div class="add-subject"> 
                            <div class="subject-form">
                             <form id="add-subject-form">
                            <label for="subject">Enter Subject Name</label>
                            <input name="subject" type="text" placeholder="Enter Subject Name" required> 
                            <label for="grade">Enter Grade</label>
                            <input name="grade" type="number" placeholder="Enter Grade" required>
                            <div class="show-buttons">
                                <div class="buttons buttons__add_subject"><button type="submit" name="id" id="${id}">Add</button></div>
                            </div>
                            </form>
                        </div>
                    </div>`
    return addSubjectInput;
}

// <div class="buttons buttons__delete_subject"><button type="submit" name="delete-subject" id="${id}">Delete</button></div>
// 

export function renderSubject(subjectDetails: Subject, id: string): string {

    const subject = `<div class="subject-info"> 
                        <div class="subject" id="subject-${subjectDetails.id}">
                            <label for="subject">Subject : </label>
                            <h2 name="subject" style="padding:0; margin:0;">${subjectDetails.subject}</h2> 
                            <label for="grade">Grade : </label>
                            <h2 name="subject" style="padding:0; margin:0;"> ${subjectDetails.score}</h2> 
                            <div class="show-buttons">
                                <div class="buttons buttons__edit"><button name="edit" id="${subjectDetails.id}@${id}">Edit</button></div>
                            </div>
                        </div>
                    </div>`
    return subject;
}



export function renderUpdateSubject(subjectDetails: Subject, id: string): string {

    const subject = `
                    <form id="update-subject-form">
                        <label for="subject">Subject : </label>
                        <input type="text" name="subject" value="${subjectDetails.subject}" required>
                        <label for="grade">Grade : </label>
                        <input type="number" name="grade" value="${subjectDetails.score}" required>
                        <div class="show-buttons">
                            <div class="buttons buttons__update"><button type="submit" name="update" id="${subjectDetails.id}@${id}">Update</button></div>
                        </div>
                     </form>`;
    return subject;
}


export function renderAllSubjects(subjects: Subject[], id: string): string {
    let subjectsDiv = '';
    subjects.forEach(subject => {
        subjectsDiv += renderSubject(subject, id);
    })
    return subjectsDiv;
}