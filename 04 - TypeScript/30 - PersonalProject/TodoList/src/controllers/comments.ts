import { deleteOrUpdateTaskFromUser, getTaskToEdit } from "./addTaskToUser";
import { getCurrentUser } from "./getUsersFromLS";
import { Comment } from "../models/comment";
import { renderFormComment } from "../views/comments";
import { addClickListenerEvent } from "../views/tasksList";
import { moveToTaskListPage } from "./signup";

function showComments(id: string): string {
    let comments = '';

    // students.forEach(student => {
    //     if (student.id === id) {
    //         comments += renderAllSubjects(student.grades, id);
    //     }
    // });
    // // const subjects = renderAllSubjects();
    // const addSubjectInput = renderFormSubject(id);
    const addCommentInput = renderFormComment(id);
    return addCommentInput;//+ addSubjectInput;
}

export function addCommentForm(event: any, idUser?: string): void {
    try {
        const id = idUser ?? event.target.id;


        // const form = event.target;
        // const content = form.content;
        // const author = form.author;

        // console.log('addComment', id);
        // const task = getTaskToEdit(id)
        // const comment = new Comment(content, author)
        // // task?.addComment(comment)
        // deleteOrUpdateTaskFromUser(id, "addComment", task, comment);
        debugger
        const taskElement = document.getElementById(`a${id}`) as HTMLDivElement;
        const commentDiv = showComments(id);

        taskElement.innerHTML += commentDiv;
        console.dir(taskElement)
        //get user tasks

        // const subjectsDiv = showSubjectsWithGrades(id);
        // studentElement.innerHTML += subjectsDiv;

        listenerUpdateSubject();

    } catch (error) {
        console.error(error);
    }
}



function listenerUpdateSubject(): void {
    try {

        //add event listener to the add subject buttons
        const addNewComment = document.querySelectorAll('#add-comment-form');
        if (addNewComment)
            addNewComment.forEach(button => button.addEventListener('submit', handleAddingNewComment));

        //adding eventlistener to the buttons 
        addClickListenerEvent();

    } catch (error) {
        console.error(error);
    }
}


function handleAddingNewComment(event: any) {
    try {
        event.preventDefault();
        const form = event.target;
        const id = form.id.id;
        const content = form.comment.value;
        if (content === undefined || content == "") {
            form.reset();
            return;
        }
        handleAddCommentToTask(id, content);
        // const comment = new Comment(content, )
        console.log(id, content)
        moveToTaskListPage();


    } catch (error) {
        console.error(error)
    }
}


function handleAddCommentToTask(taskId: string, commentContent: string) {
    try {
        //get current user author name
        deleteOrUpdateTaskFromUser(taskId, "addComment", undefined, commentContent);

        //render it back to the screen



    } catch (error) {
        console.error(error);
    }
}