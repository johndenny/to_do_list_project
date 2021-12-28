import { newListPrintCont } from './newListPrint';
import { listData } from './newProjectData';
import { checkBoxValid } from './checkBoxEvent';
import { titlePage } from './titlePagePrint'
import { toDoListPrint } from './toDoListPrint';

const listPagePrint = (listIndex,listId) => {
    //Remove Children
    const content = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(content);

    //List Container
    let listCont = document.createElement('div');
    listCont.setAttribute('id','listCont');
    content.appendChild(listCont); 
    
    titlePage.titlePrint(listIndex,listId);   
    
    // ToDo Container
    let toDoCont = document.createElement('div');
    toDoCont.setAttribute('id', 'toDoCont');
    listCont.appendChild(toDoCont);

    toDoListPrint();

}

export { listPagePrint };