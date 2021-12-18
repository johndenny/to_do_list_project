import { newListPrintCont } from './newListPrint';
import { listData } from './newProjectData';
import { checkBoxValid } from './checkBoxEvent';
import { titlePage } from './titlePagePrint'
import { toDoListPrint } from './toDoListPrint';

const listPagePrint = (pageNum) => {
    //Remove Children
    const content = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(content);

    titlePage.titlePrint(pageNum);

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
    btn.setAttribute('data-page', pageNum);
    btn.innerHTML = '+ New To-Do';

    
    
}

export { listPagePrint };