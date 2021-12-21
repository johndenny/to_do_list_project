import { listPagePrint } from "./listPagePrint";
import { newListPrintCont } from "./newListPrint";

const newToDoInput = (listIndex,listId) => {
    if (document.querySelector('#toDoInput') !== null) {
        return listPagePrint(listIndex,listId);
    }
    listPagePrint(listIndex,listId);

    const toDoCont = document.querySelector('#toDoCont');
    let toDoInputCont = document.createElement('P');
    toDoInputCont.setAttribute('id','toDoInputCont');
    toDoCont.appendChild(toDoInputCont);
    

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
    

    //Button
    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = 'save';
    saveBtn.setAttribute('data-btn', 'saveToDo');
    saveBtn.setAttribute('data-listid', listId);
    toDoInputCont.appendChild(saveBtn);
}



export { newToDoInput };