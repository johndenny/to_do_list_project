import { listData } from './newProjectData';
import { checkBoxValid } from './checkBoxEvent';
import { titlePage } from './titlePagePrint';
import { editToDoInput } from './editToDoInput';

const toDoListPrint = () => {
    for (let i = 0; i < listData.selectedToDo.length; i++) {
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

export { toDoListPrint };