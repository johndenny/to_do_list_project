import { listData } from './newProjectData';
import { checkBoxValid } from './checkBoxEvent';
import { titlePage } from './titlePagePrint';
import { editToDoInput } from './editToDoInput';
import { format, parseISO } from 'date-fns';

const toDoListPrint = () => {
    for (let i = 0; i < listData.selectedToDo.length; i++) {
        let individualToDoCont = document.createElement('div');
        individualToDoCont.setAttribute('id','individualToDoCont');
        toDoCont.appendChild(individualToDoCont)
        let text = document.createElement('span');
        text.setAttribute('id',`toDoText`);
        text.innerHTML = listData.selectedToDo[i].text;
        individualToDoCont.appendChild(text);
        let toDo = document.createElement('INPUT');
        toDo.setAttribute('id','toDo');
        toDo.setAttribute('data-id', listData.selectedToDo[i].id);
        toDo.setAttribute('data-listid', listData.selectedToDo[i].listId)
        toDo.setAttribute('type','checkbox')
        individualToDoCont.prepend(toDo);
        if (listData.selectedToDo[i].status == 'complete') {
            toDo.checked = true;
        } else {
            toDo.checked = false;
        }
        let dueDateWarningCont = document.createElement('span');
        dueDateWarningCont.setAttribute('id','dueDateWarningCont');
        individualToDoCont.appendChild(dueDateWarningCont);
        switch (true) {
            case listData.selectedToDo[i].daysTilDue < 0:
                dueDateWarningCont.innerText = '__Over Due!__';
                break;
            case listData.selectedToDo[i].daysTilDue === 0:
                dueDateWarningCont.innerText = '__Due Today__';
                break;
            case listData.selectedToDo[i].daysTilDue === 1:
                dueDateWarningCont.innerText = '__Due Tomorrow__';
                break;
            case listData.selectedToDo[i].daysTilDue === 2:
                dueDateWarningCont.innerText = '__Due in Two Days__';
                break;
            case (listData.selectedToDo[i].daysTilDue > 2 && listData.selectedToDo[i].daysTilDue < 7):
                dueDateWarningCont.innerText = '__Due This Week__';
                break;
        }

        //Edit Button
        let editBtn = document.createElement('button');
        editBtn.setAttribute('id','titleEditBtn');
        editBtn.setAttribute('data-btn','toDoEdit');
        editBtn.setAttribute('data-id', listData.selectedToDo[i].id);
        editBtn.setAttribute('data-listid', listData.selectedToDo[i].listId)
        editBtn.setAttribute('data-index', i);
        editBtn.innerHTML = 'Edit';
        individualToDoCont.appendChild(editBtn);

        //Delete Button
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'delete';
        deleteBtn.setAttribute('id', 'deleteBtn');
        deleteBtn.setAttribute('data-btn','toDoDeleteBtn')
        deleteBtn.setAttribute('data-id', listData.selectedToDo[i].id);
        deleteBtn.setAttribute('data-listid',listData.selectedToDo[i].listId);
        individualToDoCont.appendChild(deleteBtn);

        //Checklist
        let checklistCont = document.createElement('div');
        checklistCont.setAttribute('id','checklistCont');
        individualToDoCont.appendChild(checklistCont);
        let checklist = listData.selectedToDo[i].checklist

        if (checklist.length > 0) {
            for (let j = 0; j < checklist.length; j++) {
                let toDo = document.createElement('INPUT');
                toDo.setAttribute('id','checklistToDo');
                toDo.setAttribute('data-id', listData.selectedToDo[i].id);
                toDo.setAttribute('data-checklistid',listData.selectedToDo[i].checklist[j].checklistId);
                toDo.setAttribute('type','checkbox');
                checklistCont.appendChild(toDo);
                if (listData.selectedToDo[i].checklist[j].status == 'complete') {
                    toDo.checked = true;
                } else {
                    toDo.checked = false;
                }
                let text = document.createElement('span');
                text.setAttribute('id',`toDoText`);
                console.log(listData.selectedToDo[i].checklist);
                text.innerHTML = listData.selectedToDo[i].checklist[j].text;
                checklistCont.appendChild(text);
                
            }
            
        }
    }
    checkBoxValid();
}

export { toDoListPrint };