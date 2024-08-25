import { Task } from "../models/task";
import { popup } from "../views/popup";
import { getCurrentAndAllUsers } from "./addTaskToUser";
import { handleDoneClick } from "./handleAddTask";


export function showPopUpFinishYourTask() {
    const { currentUser } = getCurrentAndAllUsers();
    if (!currentUser) throw new Error("Cant find the current user");
    const insideUserPage = document.getElementById('form') as HTMLDivElement ? true : false;

    //checking users' task datetime and if it have left just one hour
    currentUser.list.forEach(task => {
        const oneHourInMillis = 60 * 60 * 1000; // One hour in milliseconds
        const taskDueTime = new Date(task.expectToBeDone).getTime() + oneHourInMillis;
        const currentTime = new Date().getTime();

        // checking if the user sign out
        if (insideUserPage) {
            if (taskDueTime <= currentTime && !task.done) {
                //render some reminder on the screen
                //check if already have popup so not add new one
                const popupDivElement = document.querySelector('.popup-wrapper');
                if (popupDivElement) {
                    //already have popup 
                    return;
                }

                //send notification
                const popupDiv = popup(task);
                const pop = document.createElement('div');
                if (pop) pop.innerHTML = popupDiv;
                pop.className = 'popup-wrapper';
                document.body.append(pop);


                // adding event listener to the popup button
                addDoneReminderClickEvent(task);
            }
        }
        else {

            //remove popup div
            removePopupReminder();
        }

    });

}

function addDoneReminderClickEvent(task: Task) {
    const doneButton = document.getElementById(`done-${task.id}`) as HTMLButtonElement;
    if (doneButton) {
        doneButton.addEventListener('click', handlePopupDoneEvent);
    }
}

function handlePopupDoneEvent(event: any): void {
    const id = event.target.id.split('done-')[1];
    console.log(id)
    handleDoneClick(id);

    //remove popup div
    removePopupReminder();
}

function removePopupReminder() {
    const popupDivElement = document.querySelector('.popup-wrapper');
    if (popupDivElement) popupDivElement.remove();
}
