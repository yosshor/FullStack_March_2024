import { Task } from '../../models/task';
import '../popup/popup-remainder.scss'
import '../styles/buttons.scss'

export function popup(task: Task) {
    const title = task.title.split(' ').slice(0, 4).join(' ');
    const popup = `
    <div class="popup">
        <div class="popup-header">
            <h3>${title}</h3>
        </div>
        <div class="popup-body">
            <p>You Need To Finish Your Task</p>
        </div>
        <div class="popup-footer">
            <div class="buttons buttons__add_comment">
                <button id="done-${task.id}" class="buttons buttons__add_comment">Done</button>
            </div>
        </div>
    </div>
    `;
    return popup;
}
