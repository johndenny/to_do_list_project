import { listData } from './newProjectData';
import { checkBoxValid } from './checkBoxEvent';
import { titlePage } from './titlePagePrint';
import { editToDoInput } from './editToDoInput';
import { format, parseISO } from 'date-fns';

const toDoListPrint = (listId) => {
    for (let i = 0; i < listData.selectedToDo.length; i++) {
        let individualToDoCont = document.createElement('div');
        individualToDoCont.setAttribute('id','individualToDoCont');
        toDoCont.appendChild(individualToDoCont);
        let firstLineToDoCont = document.createElement('div');
        firstLineToDoCont.setAttribute('id','firstLineToDoCont');
        individualToDoCont.appendChild(firstLineToDoCont);

        //Title Container
        let titleTextCont = document.createElement('div');
        titleTextCont.setAttribute('id','titleTextCont');
        firstLineToDoCont.appendChild(titleTextCont);
        let text = document.createElement('span');
        text.setAttribute('id',`toDoText`);
        text.setAttribute('class','button');
        text.setAttribute('data-btn', 'toDoDetails');
        text.setAttribute('data-id', listData.selectedToDo[i].id);
        text.setAttribute('data-listid', listData.selectedToDo[i].listId);
        text.innerHTML = listData.selectedToDo[i].text;
        titleTextCont.appendChild(text);
        let dropDownSymbol = document.createElement('span');
        dropDownSymbol.setAttribute('id','dropDownSymbol');
        dropDownSymbol.innerHTML = '&#9013;';
        titleTextCont.appendChild(dropDownSymbol);
        let toDo = document.createElement('INPUT');
        toDo.setAttribute('id','toDo');
        toDo.setAttribute('data-id', listData.selectedToDo[i].id);
        toDo.setAttribute('data-listid', listData.selectedToDo[i].listId);
        toDo.setAttribute('type','checkbox')
        firstLineToDoCont.prepend(toDo);
        if (listData.selectedToDo[i].status == 'complete') {
            toDo.checked = true;
        } else {
            toDo.checked = false;
        }

        //Warning Container
        let dueDateWarningCont = document.createElement('div');
        dueDateWarningCont.setAttribute('id','dueDateWarningCont');
        individualToDoCont.appendChild(dueDateWarningCont);

        //Priority Label
        if (listData.selectedToDo[i].priority) {
            let priorityLabel = document.createElement('span');
            priorityLabel.setAttribute('id','priorityLabel');
            priorityLabel.innerText = 'Priority';
            dueDateWarningCont.appendChild(priorityLabel);
        }
        //Due Date
        let dueDateWarning = document.createElement('span');
        dueDateWarningCont.appendChild(dueDateWarning);
        switch (true) {
            case listData.selectedToDo[i].daysTilDue < 0:
                dueDateWarning.innerText = 'Over Due!';
                dueDateWarning.setAttribute('id','overDue');
                break;
            case listData.selectedToDo[i].daysTilDue === 0:
                dueDateWarning.innerText = 'Due Today';
                dueDateWarning.setAttribute('id','dueToday');
                break;
            case listData.selectedToDo[i].daysTilDue === 1:
                dueDateWarning.innerText = 'Due Tomorrow';
                dueDateWarning.setAttribute('id','dueTom');
                break;
            case listData.selectedToDo[i].daysTilDue === 2:
                dueDateWarning.innerText = 'Due in Two Days';
                dueDateWarning.setAttribute('id','dueTwo');
                break;
            case (listData.selectedToDo[i].daysTilDue > 2 && listData.selectedToDo[i].daysTilDue < 7):
                dueDateWarning.innerText = 'Due This Week';
                dueDateWarning.setAttribute('id','dueWeek');
                break;
        }

        //Edit Button
        let editBtn = document.createElement('span');
        editBtn.setAttribute('class','button');
        editBtn.setAttribute('id','listToDoEditBtn');
        editBtn.setAttribute('data-btn','toDoEdit');
        editBtn.setAttribute('data-id', listData.selectedToDo[i].id);
        editBtn.setAttribute('data-listid', listData.selectedToDo[i].listId)
        editBtn.setAttribute('data-index', i);
        editBtn.innerText = 'Edit';
        firstLineToDoCont.appendChild(editBtn);

        //Delete Button
        let deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = '&times';
        deleteBtn.setAttribute('class','button');
        deleteBtn.setAttribute('id', 'deleteBtn');
        deleteBtn.setAttribute('data-btn','toDoDeleteBtn')
        deleteBtn.setAttribute('data-id', listData.selectedToDo[i].id);
        deleteBtn.setAttribute('data-listid',listData.selectedToDo[i].listId);
        firstLineToDoCont.appendChild(deleteBtn);

        //ToDo Detail Container 
        let toDoDetailCont = document.createElement('div');
        toDoDetailCont.setAttribute('id','toDoDetailCont');
        individualToDoCont.appendChild(toDoDetailCont);

        //Checklist
        let checklistCont = document.createElement('div');
        checklistCont.setAttribute('id','checklistCont');
        individualToDoCont.appendChild(checklistCont);
        let checklist = listData.selectedToDo[i].checklist

        if (checklist.length > 0) {
            for (let j = 0; j < checklist.length; j++) {
                let individualChecklistToDo = document.createElement('div');
                individualChecklistToDo.setAttribute('id','individualChecklistToDo');
                checklistCont.appendChild(individualChecklistToDo);
                let toDo = document.createElement('INPUT');
                toDo.setAttribute('id','checklistToDo');
                toDo.setAttribute('data-id', listData.selectedToDo[i].id);
                toDo.setAttribute('data-checklistid',listData.selectedToDo[i].checklist[j].checklistId);
                toDo.setAttribute('type','checkbox');
                individualChecklistToDo.appendChild(toDo);
                if (listData.selectedToDo[i].checklist[j].status == 'complete') {
                    toDo.checked = true;
                } else {
                    toDo.checked = false;
                }
                let text = document.createElement('span');
                text.setAttribute('id',`toDoText`);
                console.log(listData.selectedToDo[i].checklist);
                text.innerHTML = listData.selectedToDo[i].checklist[j].text;
                individualChecklistToDo.appendChild(text);
                
            }
            
        }

        
    }
    //New ToDo Button Containers
    let individualToDoContNewToDo = document.createElement('div');
    individualToDoContNewToDo.setAttribute('id','individualToDoContNewToDoBtn');
    toDoCont.appendChild(individualToDoContNewToDo)
    let newToDoButtonCont = document.createElement('div');
    newToDoButtonCont.setAttribute('id','newToDoButtonCont');
    individualToDoContNewToDo.appendChild(newToDoButtonCont);

    //New to-do Button
    let plusText = document.createElement('span');
    plusText.setAttribute('class','button');
    plusText.setAttribute('data-btn', 'newToDo');
    plusText.setAttribute('data-listid', listId);
    plusText.setAttribute('id','newToDoPlus');
    plusText.innerText = '+'
    newToDoButtonCont.appendChild(plusText);
    let btn = document.createElement('span');
    btn.setAttribute('class','button');
    btn.setAttribute('data-btn', 'newToDo');
    btn.setAttribute('data-listid', listId)
    btn.setAttribute('id', 'newToDo')
    btn.innerHTML = 'New To-Do';
    newToDoButtonCont.appendChild(btn);    



    checkBoxValid();
}

export { toDoListPrint };