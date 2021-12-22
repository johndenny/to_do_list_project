import { listData } from "./newProjectData";
import { checkBoxValid } from "./checkBoxEvent";
import { newListPrintCont } from "./newListPrint";

const inboxToDoLoop = (arr,cont) => {
    for (let i = 0; i < arr.length; i++) {
        let text = document.createElement('P');
        text.setAttribute('id',`toDoText`);
        text.innerHTML = arr[i].text;
        cont.appendChild(text);
        let toDo = document.createElement('INPUT');
        toDo.setAttribute('id','toDo');
        toDo.setAttribute('data-id', arr[i].id);
        toDo.setAttribute('data-listid', arr[i].listId)
        toDo.setAttribute('type','checkbox')
        text.prepend(toDo);
        if (arr[i].status == 'complete') {
            toDo.checked = true;
        } else {
            toDo.checked = false;
        }
        let editBtn = document.createElement('button');
        editBtn.setAttribute('id','toDoEditBtn');
        editBtn.setAttribute('data-btn','inboxToDoEdit');
        editBtn.setAttribute('data-id', arr[i].id);
        editBtn.setAttribute('data-listid', arr[i].listId)
        editBtn.setAttribute('data-index', i);
        editBtn.innerHTML = 'Edit';
        text.appendChild(editBtn);
    }
}

const inboxEditToDoLoop = (arr, cont, toDoId) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === toDoId) {
            let toDoInputCont = document.createElement('P');
            toDoInputCont.setAttribute('id','toDoInputCont');
            cont.appendChild(toDoInputCont);
            
            //Delete Button
            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'delete';
            deleteBtn.setAttribute('id', 'deleteBtn');
            deleteBtn.setAttribute('data-btn','inboxToDoDeleteBtn')
            deleteBtn.setAttribute('data-id', arr[i].id);
            toDoInputCont.appendChild(deleteBtn);

            //To Do Input
            let toDoInput = document.createElement('INPUT');
            toDoInput.setAttribute('id', 'editToDoInput');
            toDoInput.setAttribute('type', 'text');
            toDoInput.setAttribute('value', arr[i].text);
            toDoInputCont.appendChild(toDoInput);

            //Date
            let date = document.createElement('INPUT');
            date.setAttribute('id', 'toDoDate');
            date.setAttribute('type', 'date');
            date.setAttribute('value', arr[i].date);
            toDoInputCont.appendChild(date);

            //Priority
            let label = document.createElement('label');
            label.setAttribute('for','toDoPriority');
            label.innerHTML = 'Priority?';
            toDoInputCont.appendChild(label);
            let priority =document.createElement('INPUT');
            priority.setAttribute('id', 'toDoPriority');
            priority.setAttribute('type', 'checkbox');
            if (arr[i].priority == true) {
                priority.checked = true;
            }
            toDoInputCont.appendChild(priority);
            

            //Save Button
            let saveBtn = document.createElement('button');
            saveBtn.innerHTML = 'save';
            saveBtn.setAttribute('id','saveEditToDoBtn')
            saveBtn.setAttribute('data-btn', 'inboxSaveEditToDo');
            saveBtn.setAttribute('data-id', arr[i].id);
            saveBtn.setAttribute('data-listid', arr[i].listId)
            toDoInputCont.appendChild(saveBtn);
        } else {
             let text = document.createElement('P');
            text.setAttribute('id',`toDoText`);
            text.innerHTML = arr[i].text;
            cont.appendChild(text);
            let toDo = document.createElement('INPUT');
            toDo.setAttribute('id','toDo');
            toDo.setAttribute('data-id', arr[i].id);
            toDo.setAttribute('data-listid', arr[i].listId)
            toDo.setAttribute('type','checkbox')
            text.prepend(toDo);
            if (arr[i].status == 'complete') {
                toDo.checked = true;
            } else {
                toDo.checked = false;
            }
            let editBtn = document.createElement('button');
            editBtn.setAttribute('id','toDoEditBtn');
            editBtn.setAttribute('data-btn','inboxToDoEdit');
            editBtn.setAttribute('data-id', arr[i].id);
            editBtn.setAttribute('data-listid', arr[i].listId)
            editBtn.setAttribute('data-index', i);
            editBtn.innerHTML = 'Edit';
            text.appendChild(editBtn);
        }
       
    }
}

const inboxPagePrint = () => {
    const content = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(content);

    //OverDue ToDo's
    let overDueCont = document.createElement('div');
    overDueCont.setAttribute('id', 'overDueCont');
    content.appendChild(overDueCont);
    if (listData.overDueArray.length === 0) {
    } else {
        let overDueTitle = document.createElement('h3');
        overDueTitle.setAttribute('id', 'overDueTitle');
        overDueTitle.innerText = 'OverDue';
        overDueCont.appendChild(overDueTitle);
        inboxToDoLoop(listData.overDueArray,overDueCont); 
    }
    

    //ToDo's Due Today
    let dueTodayCont = document.createElement('div');
    dueTodayCont.setAttribute('id', 'dueTodayCont');
    content.appendChild(dueTodayCont);
    if (listData.dueTodayArray === 0) {
    } else {
        let dueTodayTitle = document.createElement('h3');
        dueTodayTitle.setAttribute('id', 'dueTodayTitle');
        dueTodayTitle.innerText = 'Due Today';
        dueTodayCont.appendChild(dueTodayTitle);
        inboxToDoLoop(listData.dueTodayArray,dueTodayCont); 
    }
    
    
    //ToDo's Due Tomorrow
    let dueTomCont = document.createElement('div');
    dueTomCont.setAttribute('id', 'dueTomCont');
    content.appendChild(dueTomCont);
    if (listData.dueTodayArray.length === 0) {
    } else {
        let dueTomTitle = document.createElement('h3');
        dueTomTitle.setAttribute('id', 'dueTomTitle');
        dueTomTitle.innerText = 'Due Tomorrow';
        dueTomCont.appendChild(dueTomTitle);
        inboxToDoLoop(listData.dueTomArray,dueTomCont);
    }
   

    //ToDo's Due in Two Days
    let dueTwoCont = document.createElement('div');
    dueTwoCont.setAttribute('id', 'dueTwoCont');
    content.appendChild(dueTwoCont);
    if (listData.dueTwoArray.length === 0) {
    } else {
        let dueTwoTitle = document.createElement('h3');
        dueTwoTitle.setAttribute('id', 'dueTwoTitle');
        dueTwoTitle.innerText = 'Due in Two Days';
        dueTwoCont.appendChild(dueTwoTitle);
        inboxToDoLoop(listData.dueTwoArray,dueTwoCont);
    }
   

    //ToDo's Due Next Week
    let dueSevenCont = document.createElement('div');
    dueSevenCont.setAttribute('id', 'dueSevenCont');
    content.appendChild(dueSevenCont);
    if (listData.dueSevenArray.length === 0) {
    } else {
        let dueSevenTitle = document.createElement('h3');
        dueSevenTitle.setAttribute('id', 'dueSevenTitle');
        dueSevenTitle.innerText = 'Due Next Week';
        dueSevenCont.appendChild(dueSevenTitle);
        inboxToDoLoop(listData.dueSevenArray,dueSevenCont)
    }
    checkBoxValid();
}

const inboxEditPagePrint = (toDoId) => {
    const content = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(content);

    //OverDue ToDo's
    let overDueCont = document.createElement('div');
    overDueCont.setAttribute('id', 'overDueCont');
    content.appendChild(overDueCont);
    if (listData.overDueArray.length === 0) {
    } else {
        let overDueTitle = document.createElement('h3');
        overDueTitle.setAttribute('id', 'overDueTitle');
        overDueTitle.innerText = 'OverDue';
        overDueCont.appendChild(overDueTitle);
        inboxEditToDoLoop(listData.overDueArray,overDueCont,toDoId);
    }

    //ToDo's Due Today
    let dueTodayCont = document.createElement('div');
    dueTodayCont.setAttribute('id', 'dueTodayCont');
    content.appendChild(dueTodayCont);
    if (listData.dueTodayArray.length === 0) {
    } else {
        let dueTodayTitle = document.createElement('h3');
        dueTodayTitle.setAttribute('id', 'dueTodayTitle');
        dueTodayTitle.innerText = 'Due Today';
        dueTodayCont.appendChild(dueTodayTitle);
        inboxEditToDoLoop(listData.dueTodayArray,dueTodayCont,toDoId);
    }
    
    //ToDo's Due Tomorrow
    let dueTomCont = document.createElement('div');
    dueTomCont.setAttribute('id', 'dueTomCont');
    content.appendChild(dueTomCont);
    if (listData.dueTomArray.length === 0) {
    } else {
        let dueTomTitle = document.createElement('h3');
        dueTomTitle.setAttribute('id', 'dueTomTitle');
        dueTomTitle.innerText = 'Due Tomorrow';
        dueTomCont.appendChild(dueTomTitle);
        inboxEditToDoLoop(listData.dueTomArray,dueTomCont,toDoId);
    }

    //ToDo's Due in Two Days
    let dueTwoCont = document.createElement('div');
    dueTwoCont.setAttribute('id', 'dueTwoCont');
    content.appendChild(dueTwoCont);
    if (listData.dueTwoArray.length === 0) {
    } else {
        let dueTwoTitle = document.createElement('h3');
        dueTwoTitle.setAttribute('id', 'dueTwoTitle');
        dueTwoTitle.innerText = 'Due in Two Days';
        dueTwoCont.appendChild(dueTwoTitle);
        inboxEditToDoLoop(listData.dueTwoArray,dueTwoCont,toDoId);
    }    

    //ToDo's Due Next Week
    let dueSevenCont = document.createElement('div');
    dueSevenCont.setAttribute('id', 'dueSevenCont');
    content.appendChild(dueSevenCont);
    if (listData.dueSevenArray.length === 0) {
    } else {
        let dueSevenTitle = document.createElement('h3');
        dueSevenTitle.setAttribute('id', 'dueSevenTitle');
        dueSevenTitle.innerText = 'Due Next Week';
        dueSevenCont.appendChild(dueSevenTitle);
        inboxEditToDoLoop(listData.dueSevenArray,dueSevenCont,toDoId)
    }
    checkBoxValid();
}

export { inboxPagePrint };
export { inboxEditPagePrint };