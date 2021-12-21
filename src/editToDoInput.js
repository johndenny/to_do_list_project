import { checkBoxValid } from './checkBoxEvent';
import { listPagePrint } from './listPagePrint';
import { newListPrintCont } from './newListPrint';
import { listData } from './newProjectData';

const editToDoInput = (listIndex,listId,selectedIndex) => {
    listPagePrint(listIndex,listId);
    
    const toDoCont = document.querySelector('#toDoCont');
    newListPrintCont.removeAllChildNodes(toDoCont);
    
    for (let i = 0; i < listData.selectedToDo.length; i++) {
        if (i == selectedIndex) {
            let toDoInputCont = document.createElement('P');
            toDoInputCont.setAttribute('id','toDoInputCont');
            toDoCont.appendChild(toDoInputCont);
            
            //Delete Button
            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'delete';
            deleteBtn.setAttribute('id', 'deleteBtn');
            deleteBtn.setAttribute('data-btn','toDoDeleteBtn')
            deleteBtn.setAttribute('data-id', listData.selectedToDo[selectedIndex].id);
            deleteBtn.setAttribute('data-listid',listId);
            toDoInputCont.appendChild(deleteBtn);

            //To Do Input
            let toDoInput = document.createElement('INPUT');
            toDoInput.setAttribute('id', 'editToDoInput');
            toDoInput.setAttribute('type', 'text');
            toDoInput.setAttribute('value', listData.selectedToDo[selectedIndex].text);
            toDoInputCont.appendChild(toDoInput);

            //Date
            let date = document.createElement('INPUT');
            date.setAttribute('id', 'toDoDate');
            date.setAttribute('type', 'date');
            date.setAttribute('value', listData.selectedToDo[selectedIndex].date);
            toDoInputCont.appendChild(date);

            //Priority
            let label = document.createElement('label');
            label.setAttribute('for','toDoPriority');
            label.innerHTML = 'Priority?';
            toDoInputCont.appendChild(label);
            let priority =document.createElement('INPUT');
            priority.setAttribute('id', 'toDoPriority');
            priority.setAttribute('type', 'checkbox');
            if (listData.selectedToDo[selectedIndex].priority == true) {
                priority.checked = true;
            }
            toDoInputCont.appendChild(priority);
            

            //Button
            let saveBtn = document.createElement('button');
            saveBtn.innerHTML = 'save';
            saveBtn.setAttribute('id','saveEditToDoBtn')
            saveBtn.setAttribute('data-btn', 'saveEditToDo');
            saveBtn.setAttribute('data-id', listData.selectedToDo[i].id);
            saveBtn.setAttribute('data-listid', listId)
            toDoInputCont.appendChild(saveBtn);
        } else { 
            let text = document.createElement('P');
            text.setAttribute('id',`toDoText`);
            text.innerHTML = listData.selectedToDo[i].text;
            toDoCont.appendChild(text);
            let toDo = document.createElement('INPUT');
            toDo.setAttribute('id','toDo');
            toDo.setAttribute('data-id', listData.selectedToDo[i].id);
            toDo.setAttribute('data-listid', listData.selectedToDo[i].listId)
            toDo.setAttribute('type','checkbox')
            text.prepend(toDo);
            if (listData.selectedToDo[i].status == 'complete') {
                toDo.checked = true;
            } else {
                toDo.checked = false;
            }
            let editBtn = document.createElement('button');
            editBtn.setAttribute('id','titleEditBtn');
            editBtn.setAttribute('data-btn','toDoEdit');
            editBtn.setAttribute('data-id', listData.selectedToDo[i].id);
            editBtn.setAttribute('data-listid', listData.selectedToDo[i].listId)
            editBtn.setAttribute('data-index', i);
            editBtn.innerHTML = 'Edit';
            text.appendChild(editBtn);
        }
        checkBoxValid();
    }
}

export { editToDoInput };