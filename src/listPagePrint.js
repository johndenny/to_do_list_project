import { newListPrintCont } from './newListPrint';
import { listData } from './newProjectData';
import { checkBoxValid } from './checkBoxEvent';
import { titlePage } from './titlePagePrint'
import { toDoListPrint } from './toDoListPrint';

const listPagePrint = (listIndex,listId) => {
    //Remove Children
    const content = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(content);

    let listDeleteBtn = document.createElement('button');
    listDeleteBtn.setAttribute('id', 'listDeleteBtn');
    listDeleteBtn.setAttribute('data-btn', 'listDelete');
    listDeleteBtn.setAttribute('data-listid', listId);
    listDeleteBtn.innerText = 'delete';
    content.appendChild(listDeleteBtn);

    titlePage.titlePrint(listIndex,listId);

    // ToDo Container
    let toDoCont = document.createElement('div');
    toDoCont.setAttribute('id', 'toDoCont');
    content.appendChild(toDoCont);

    toDoListPrint();

    
    //New to-do Button
    let btn = document.createElement('button');
    content.appendChild(btn);
    btn.setAttribute('data-btn', 'newToDo');
    btn.setAttribute('id', 'newToDo')
    btn.setAttribute('data-listid', listId);
    btn.innerHTML = '+ New To-Do';

    

    
    
}

export { listPagePrint };