
import './styles/comments.scss'
import './styles/buttons.scss'
import { Comment } from '../models/comment';

export function renderFormComment(id: string): string {
    const addSubjectInput = `<div class="add-comment"> 
                                <div class="comment-form">
                                    <form id="add-comment-form">
                                        <label for="comment">Enter comment Description :</label>
                                        <input name="comment" type="text" placeholder="Enter Comment Description" required> 
                                        <div class="show-buttons">
                                            <div class="buttons buttons__add_comment">
                                                <button type="submit" name="id" id="${id}">Add</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>`
    return addSubjectInput;
}

export function renderComment(comment: Comment, taskId: string): string {
    console.log(comment.date)
    let date = '';
    try {
        date = comment.date.toLocaleDateString();
    }
    catch {
        date = comment.date.toString().slice(0, 10);
    }
    const commentDiv = `<div class="comment-info"> 
                        <div class="comment" id="comment-${comment.id}">
                            <p name="content">${comment.content}</p> 
                            <p name="author"> ${comment.author}</p> 
                            <p name="date"> ${date}</p> 
                            <div class="show-buttons">
                                <div class="buttons__delete_comment"><button name="delete" id="${comment.id}@${taskId}">Delete</button></div>
                            </div>
                        </div>
                    </div>`
    return commentDiv;


}




export function renderAllComments(comments: Comment[], taskId: string): string {
    let commentsDiv = '';
    comments.forEach(comment => {
        commentsDiv += renderComment(comment, taskId);
    })

    return commentsDiv;
}

