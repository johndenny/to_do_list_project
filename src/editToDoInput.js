import { checkBoxValid } from './checkBoxEvent';
import { listPagePrint } from './listPagePrint';
import { newListPrintCont } from './newListPrint';
import { listData } from './newProjectData';

const editToDoInput = (index,page) => {
    listPagePrint(page);
    const toDoCont = document.querySelector('#toDoCont');
    newListPrintCont.removeAllChildNodes(toDoCont);
    
    for (let i = 0; i < listData.selectedToDo.length; i++) {
        if (i == index) {
            let toDoInputCont = document.createElement('P');
            toDoInputCont.setAttribute('id','toDoInputCont');
            toDoCont.appendChild(toDoInputCont);
            

            //To Do Input
            let toDoInput = document.createElement('INPUT');
            toDoInput.setAttribute('id', 'editToDoInput');
            toDoInput.setAttribute('type', 'text');
            toDoInput.setAttribute('value', listData.selectedToDo[index].text);
            toDoInputCont.appendChild(toDoInput);

            //Date
            let date = document.createElement('INPUT');
            date.setAttribute('id', 'toDoDate');
            date.setAttribute('type', 'date');
            date.setAttribute('value', listData.selectedToDo[index].date);
            toDoInputCont.appendChild(date);

            //Priority
            let label = document.createElement('label');
            label.setAttribute('for','toDoPriority');
            label.innerHTML = 'Priority?';
            toDoInputCont.appendChild(label);
            let priority =document.createElement('INPUT');
            priority.setAttribute('id', 'toDoPriority');
            priority.setAttribute('type', 'checkbox');
            if (listData.selectedToDo[index].priority == true) {
                priority.checked = true;
            }
            toDoInputCont.appendChild(priority);
            

            //Button
            let saveBtn = document.createElement('button');
            saveBtn.innerHTML = 'save';
            saveBtn.setAttribute('id','saveEditToDoBtn')
            saveBtn.setAttribute('data-btn', 'saveEditToDo');
            saveBtn.setAttribute('data-id', listData.selectedToDo[i].id);
            saveBtn.setAttribute('data-page', listData.selectedToDo[i].page);
            toDoInputCont.appendChild(saveBtn);
        } else { 
            let text = document.createElement('P');
            text.setAttribute('id',`toDoText`);
            text.setAttribute('data-text', listData.selectedToDo[i].text);
            text.setAttribute('data-page', listData.selectedToDo[i].page);
            text.setAttribute('data-index', i);
            text.innerHTML = listData.selectedToDo[i].text;
            toDoCont.appendChild(text);
            let toDo = document.createElement('INPUT');
            toDo.setAttribute('id','toDo');
            toDo.setAttribute('data-text', listData.selectedToDo[i].text);
            toDo.setAttribute('data-page', listData.selectedToDo[i].page);
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
            editBtn.setAttribute('data-text', listData.selectedToDo[i].text);
            editBtn.setAttribute('data-page', listData.selectedToDo[i].page);
            editBtn.setAttribute('data-index', i);
            editBtn.innerHTML = 'Edit';
            text.appendChild(editBtn);
        }
        checkBoxValid();
    }
}

export { editToDoInput };