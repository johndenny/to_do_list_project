import { listData } from './newProjectData';
import { checkBoxValid } from './checkBoxEvent';
import { newListPrintCont } from './newListPrint';
import { titlePage } from './titlePagePrint';
import { editToDoInput } from './editToDoInput';
import { format, parseISO } from 'date-fns';


const inboxPagePrint = () => {
    //Remove Children
    const content = document.querySelector('#content');
    if (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }

    //inbox Container
    let inboxToDoCont = document.createElement('div');
    inboxToDoCont.setAttribute('id','inboxToDoCont');
    content.appendChild(inboxToDoCont);

    //Title Contianer 
    let titleCont = document.createElement('div');
    titleCont.setAttribute('class','titleCont');
    titleCont.setAttribute('id','inboxTitleCont');
    inboxToDoCont.appendChild(titleCont);

    //Title
    let inboxTitle = document.createElement('span');
    inboxTitle.setAttribute('id','inboxTitle');
    inboxTitle.setAttribute('class','title');
    inboxTitle.innerText = 'Inbox';
    titleCont.appendChild(inboxTitle);

    //New to-do Button
    let btn = document.createElement('button');
    btn.setAttribute('data-btn', 'newToDo');
    btn.setAttribute('id', 'newToDo')
    btn.innerHTML = '+ New To-Do';
    titleCont.appendChild(btn);

    //To Do Container
    let toDoCont = document.createElement('div');
    toDoCont.setAttribute('id', 'toDoCont');
    inboxToDoCont.appendChild(toDoCont);

    for (let i = 0; i < listData.toDoArray.length; i++) {
        let individualToDoCont = document.createElement('div');
        individualToDoCont.setAttribute('id','individualToDoCont');
        toDoCont.appendChild(individualToDoCont)
        let text = document.createElement('span');
        text.setAttribute('id',`toDoText`);
        text.innerHTML = listData.toDoArray[i].text;
        individualToDoCont.appendChild(text);
        let toDo = document.createElement('INPUT');
        toDo.setAttribute('id','toDo');
        toDo.setAttribute('data-id', listData.toDoArray[i].id);
        toDo.setAttribute('data-listid', listData.toDoArray[i].listId)
        toDo.setAttribute('type','checkbox')
        individualToDoCont.prepend(toDo);
        if (listData.toDoArray[i].status == 'complete') {
            toDo.checked = true;
        } else {
            toDo.checked = false;
        }

        //Due Date
        let dueDateWarningCont = document.createElement('span');
        dueDateWarningCont.setAttribute('id','dueDateWarningCont');
        individualToDoCont.appendChild(dueDateWarningCont);
        switch (true) {
            case listData.toDoArray[i].daysTilDue < 0:
                dueDateWarningCont.innerText = '__Over Due!__';
                break;
            case listData.toDoArray[i].daysTilDue === 0:
                dueDateWarningCont.innerText = '__Due Today__';
                break;
            case listData.toDoArray[i].daysTilDue === 1:
                dueDateWarningCont.innerText = '__Due Tomorrow__';
                break;
            case listData.toDoArray[i].daysTilDue === 2:
                dueDateWarningCont.innerText = '__Due in Two Days__';
                break;
            case (listData.toDoArray[i].daysTilDue > 2 && listData.toDoArray[i].daysTilDue < 7):
                dueDateWarningCont.innerText = '__Due This Week__';
                break;
        }

        //List Label
        let listLabel = document.createElement('span');
        listLabel.setAttribute('id','listLabel')
        listLabel.innerText = listData.toDoArray[i].listTitle;
        individualToDoCont.appendChild(listLabel);

        //Edit Button
        let editBtn = document.createElement('button');
        editBtn.setAttribute('id','titleEditBtn');
        editBtn.setAttribute('data-btn','toDoEdit');
        editBtn.setAttribute('data-id', listData.toDoArray[i].id);
        editBtn.setAttribute('data-listid', listData.toDoArray[i].listId)
        editBtn.setAttribute('data-index', i);
        editBtn.innerHTML = 'Edit';
        individualToDoCont.appendChild(editBtn);

        //Delete Button
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'delete';
        deleteBtn.setAttribute('id', 'deleteBtn');
        deleteBtn.setAttribute('data-btn','toDoDeleteBtn')
        deleteBtn.setAttribute('data-id', listData.toDoArray[i].id);
        deleteBtn.setAttribute('data-listid',listData.toDoArray[i].listId);
        individualToDoCont.appendChild(deleteBtn);

        //Checklist
        let checklistCont = document.createElement('div');
        checklistCont.setAttribute('id','checklistCont');
        individualToDoCont.appendChild(checklistCont);
        let checklist = listData.toDoArray[i].checklist

        if (checklist.length > 0) {
            for (let j = 0; j < checklist.length; j++) {
                let toDo = document.createElement('INPUT');
                toDo.setAttribute('id','checklistToDo');
                toDo.setAttribute('data-id', listData.toDoArray[i].id);
                toDo.setAttribute('data-checklistid',listData.toDoArray[i].checklist[j].checklistId);
                toDo.setAttribute('type','checkbox');
                checklistCont.appendChild(toDo);
                if (listData.toDoArray[i].checklist[j].status == 'complete') {
                    toDo.checked = true;
                } else {
                    toDo.checked = false;
                }
                let text = document.createElement('span');
                text.setAttribute('id',`toDoText`);
                console.log(listData.toDoArray[i].checklist);
                text.innerHTML = listData.toDoArray[i].checklist[j].text;
                checklistCont.appendChild(text);
                
            }
            
        }
    }
    checkBoxValid();
}

const inboxEditPagePrint = (toDoId) => {
    //Remove Children
    const content = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(content);

    let toDoCont = document.createElement('div');
    toDoCont.setAttribute('id', 'toDoCont');
    content.appendChild(toDoCont);

    for (let i = 0; i < listData.toDoArray.length; i++) {
        
        if (listData.toDoArray[i].id === toDoId) {
            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'delete';
            deleteBtn.setAttribute('id', 'deleteBtn');
            deleteBtn.setAttribute('data-btn','inboxToDoDeleteBtn')
            deleteBtn.setAttribute('data-id', toDoId);
            toDoCont.appendChild(deleteBtn);

            //To Do Input
            let toDoInput = document.createElement('INPUT');
            toDoInput.setAttribute('id', 'editToDoInput');
            toDoInput.setAttribute('type', 'text');
            toDoInput.setAttribute('value', listData.toDoArray[i].text);
            toDoCont.appendChild(toDoInput);

            //Date
            let date = document.createElement('INPUT');
            date.setAttribute('id', 'toDoDate');
            date.setAttribute('type', 'date');
            let dateFormat = format(new Date(listData.toDoArray[i].date), 'yyyy-MM-dd');
            console.log(dateFormat);
            date.setAttribute('value', dateFormat);
            toDoCont.appendChild(date);

            //Priority
            let label = document.createElement('label');
            label.setAttribute('id','labeltoDoPriority');
            label.innerHTML = 'Priority?';
            toDoCont.appendChild(label);
            let priority =document.createElement('INPUT');
            priority.setAttribute('id', 'toDoPriority');
            priority.setAttribute('type', 'checkbox');
            if (listData.toDoArray[i].priority == true) {
                priority.checked = true;
            }
            toDoCont.appendChild(priority);
            

            //Button
            let saveBtn = document.createElement('button');
            saveBtn.innerHTML = 'save';
            saveBtn.setAttribute('id','saveEditToDoBtn')
            saveBtn.setAttribute('data-btn', 'inboxSaveEditToDo');
            saveBtn.setAttribute('data-id', toDoId);
            toDoCont.appendChild(saveBtn);

            let errCont = document.createElement('div');
            errCont.setAttribute('id','editToDoErrCont');
            toDoCont.appendChild(errCont);
        } else {
            let text = document.createElement('P');
            text.setAttribute('id',`toDoText`);
            text.innerHTML = listData.toDoArray[i].text;
            toDoCont.appendChild(text);
            let toDo = document.createElement('INPUT');
            toDo.setAttribute('id','toDo');
            toDo.setAttribute('data-id', listData.toDoArray[i].id);
            toDo.setAttribute('data-listid', listData.toDoArray[i].listId)
            toDo.setAttribute('type','checkbox')
            text.prepend(toDo);
            if (listData.toDoArray[i].status == 'complete') {
                toDo.checked = true;
            } else {
                toDo.checked = false;
            }
            let dueDateWarningCont = document.createElement('span');
            dueDateWarningCont.setAttribute('id','dueDateWarningCont');
            text.appendChild(dueDateWarningCont);
            switch (true) {
                case listData.toDoArray[i].daysTilDue < 0:
                    dueDateWarningCont.innerText = '__Over Due!__';
                    break;
                case listData.toDoArray[i].daysTilDue === 0:
                    dueDateWarningCont.innerText = '__Due Today__';
                    break;
                case listData.toDoArray[i].daysTilDue === 1:
                    dueDateWarningCont.innerText = '__Due Tomorrow__';
                    break;
                case listData.toDoArray[i].daysTilDue === 2:
                    dueDateWarningCont.innerText = '__Due in Two Days__';
                    break;
                case (listData.toDoArray[i].daysTilDue > 2 && listData.toDoArray[i].daysTilDue < 7):
                    dueDateWarningCont.innerText = '__Due This Week__';
                    break;
            }
            let listLabel = document.createElement('span');
            listLabel.setAttribute('id', 'listlabel');
            listLabel.innerText = listData.toDoArray[i].listTitle;
            text.appendChild(listLabel);
            let editBtn = document.createElement('button');
            editBtn.setAttribute('id','titleEditBtn');
            editBtn.setAttribute('data-btn','inboxToDoEdit');
            editBtn.setAttribute('data-id', listData.toDoArray[i].id);
            editBtn.setAttribute('data-listid', listData.toDoArray[i].listId)
            editBtn.setAttribute('data-index', i);
            editBtn.innerHTML = 'Edit';
            text.appendChild(editBtn);
        }
        //New to-do Button
        let newToDoBtn = document.createElement('button');
        content.appendChild(newToDoBtn);
        newToDoBtn.setAttribute('data-btn', 'inboxNewToDo');
        newToDoBtn.setAttribute('id', 'inboxNewToDo')
        newToDoBtn.innerHTML = '+ New To-Do';
    }
    checkBoxValid();
}

const inboxNewToDoInput = () => {
    //Remove Children
    const content = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(content);

    let toDoCont = document.createElement('div');
    toDoCont.setAttribute('id', 'toDoCont');
    content.appendChild(toDoCont);


    for (let i = 0; i < listData.toDoArray.length; i++) {
        let text = document.createElement('P');
        text.setAttribute('id',`toDoText`);
        text.innerHTML = listData.toDoArray[i].text;
        toDoCont.appendChild(text);
        let toDo = document.createElement('INPUT');
        toDo.setAttribute('id','toDo');
        toDo.setAttribute('data-id', listData.toDoArray[i].id);
        toDo.setAttribute('data-listid', listData.toDoArray[i].listId)
        toDo.setAttribute('type','checkbox')
        text.prepend(toDo);
        if (listData.toDoArray[i].status == 'complete') {
            toDo.checked = true;
        } else {
            toDo.checked = false;
        }
        let dueDateWarningCont = document.createElement('span');
        dueDateWarningCont.setAttribute('id','dueDateWarningCont');
        text.appendChild(dueDateWarningCont);
        switch (true) {
            case listData.toDoArray[i].daysTilDue < 0:
                dueDateWarningCont.innerText = '__Over Due!__';
                break;
            case listData.toDoArray[i].daysTilDue === 0:
                dueDateWarningCont.innerText = '__Due Today__';
                break;
            case listData.toDoArray[i].daysTilDue === 1:
                dueDateWarningCont.innerText = '__Due Tomorrow__';
                break;
            case listData.toDoArray[i].daysTilDue === 2:
                dueDateWarningCont.innerText = '__Due in Two Days__';
                break;
            case (listData.toDoArray[i].daysTilDue > 2 && listData.toDoArray[i].daysTilDue < 7):
                dueDateWarningCont.innerText = '__Due This Week__';
                break;
        }
        let listLabel = document.createElement('span');
        listLabel.setAttribute('id', 'listlabel');
        listLabel.innerText = listData.toDoArray[i].listTitle;
        text.appendChild(listLabel);
        let editBtn = document.createElement('button');
        editBtn.setAttribute('id','inboxEditBtn');
        editBtn.setAttribute('data-btn','inboxToDoEdit');
        editBtn.setAttribute('data-id', listData.toDoArray[i].id);
        editBtn.setAttribute('data-listid', listData.toDoArray[i].listId)
        editBtn.setAttribute('data-index', i);
        editBtn.innerHTML = 'Edit';
        text.appendChild(editBtn);
    }

    let toDoInputCont = document.createElement('div');
    toDoInputCont.setAttribute('id','toDoInputCont');
    content.appendChild(toDoInputCont);
    

    //To Do Input
    let toDoInput = document.createElement('INPUT');
    toDoInput.setAttribute('id', 'toDoInput');
    toDoInput.setAttribute('type', 'text');
    toDoInput.setAttribute('placeholder', 'New To Do');
    toDoInputCont.appendChild(toDoInput);

    //Date
    let date = document.createElement('INPUT');
    date.setAttribute('id', 'toDoDate');
    date.setAttribute('type', 'date');
    toDoInputCont.appendChild(date);


    //Priority
    let label = document.createElement('label');
    label.setAttribute('for','toDoPriority');
    label.innerHTML = 'Priority?';
    toDoInputCont.appendChild(label);
    let priority =document.createElement('INPUT');
    priority.setAttribute('id', 'toDoPriority');
    priority.setAttribute('type', 'checkbox');
    toDoInputCont.appendChild(priority);
    

    //Save Button
    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = 'save';
    saveBtn.setAttribute('data-btn', 'inboxSaveToDo');
    toDoInputCont.appendChild(saveBtn);
}

export { inboxPagePrint, inboxEditPagePrint, inboxNewToDoInput};