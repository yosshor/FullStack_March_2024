import { deleteOrUpdateTaskFromUser } from "./addTaskToUser";
import { renderFormComment } from "../views/comments/comments";
import { addClickListenerEvent } from "../views/render-tasks/tasksList";
import { moveToTaskListPage } from "./signup";


//render all comments for this task id
function showCommentsForm(id: string): string {
    const addCommentInput = renderFormComment(id);
    return addCommentInput;
}

//render the add comment form 
export function addCommentForm(event: any, idUser?: string): void {
    try {
        const id = idUser ?? event.target.id;
        const taskElement = document.getElementById(`a${id}`) as HTMLDivElement;
        const commentForm = taskElement.querySelectorAll('.comment-form');

        //check if already have comment-form so do not add a new one
        if (commentForm.length > 0) {
            console.log('have already comment form')
            return;
        }
        const commentDiv = showCommentsForm(id);
        taskElement.innerHTML += commentDiv;

        addListenerToNewComment();

    } catch (error) {
        console.error(error);
    }
}



function addListenerToNewComment(): void {
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


function handleAddingNewComment(event: any): void {
    try {
        event.preventDefault();
        const form = event.target;
        const id = form.id.id;
        const content = form.comment.value;
        console.dir(event.target)
        if (content === undefined || content == "") {
            form.reset();
            return;
        }
        handleAddCommentToTask(id, content);
        console.log(id, content)
        moveToTaskListPage();
    } catch (error) {
        console.error(error)
    }
}


function handleAddCommentToTask(taskId: string, commentContent: string): void {
    try {
        //get current user author name and added new comment
        deleteOrUpdateTaskFromUser(taskId, "addComment", undefined, commentContent);
    } catch (error) {
        console.error(error);
    }
}

export function handleDeleteComment(event: any): void {
    try {
        // Prevent the default action, if necessary
        event.preventDefault();

        const form = event.target;
        const id = form.id;
        const commentId: string = id.split('@')[0]
        const taskId: string = id.split('@')[1]

        console.log(id);
        // delete comment
        deleteOrUpdateTaskFromUser(taskId, "deleteComment", undefined, undefined, commentId)
        console.log("try to render page")
        moveToTaskListPage();

    } catch (error) {
        console.error(error);
    }
} 