import { newListPrintCont } from './newListPrint';
import { listData } from './newProjectData';
import { checkBoxValid } from './checkBoxEvent';
import { titlePage } from './titlePagePrint'
import { toDoListPrint } from './toDoListPrint';
import { toDoPagePrint } from './inboxPagePrint';

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

    toDoPagePrint();

    //New ToDo Button Containers
    let individualToDoContNewToDo = document.createElement('div');
    individualToDoContNewToDo.setAttribute('id','individualToDoContNewToDoBtn');
    toDoCont.appendChild(individualToDoContNewToDo)
    let newToDoButtonCont = document.createElement('div');
    newToDoButtonCont.setAttribute('id','newToDoButtonCont');
    individualToDoContNewToDo.appendChild(newToDoButtonCont);

    //New to-do Button
    let plusText = document.createElement('span');
    plusText.setAttribute('class','button');
    plusText.setAttribute('data-btn', 'newToDo');
    plusText.setAttribute('id','newToDoPlus');
    plusText.innerText = '+'
    newToDoButtonCont.appendChild(plusText);
    let btn = document.createElement('span');
    btn.setAttribute('class','button');
    btn.setAttribute('data-btn', 'newToDo');
    btn.setAttribute('id', 'newToDo')
    btn.dataset.listid = listId;
    btn.innerHTML = 'New To-Do';
    newToDoButtonCont.appendChild(btn);    

}

export { listPagePrint };