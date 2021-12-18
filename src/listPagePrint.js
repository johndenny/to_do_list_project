import { newListPrintCont } from './newListPrint';
import { listData } from './newProjectData';
import { checkBoxValid } from './checkBoxEvent';
import { titlePage } from './titlePagePrint'

const listPagePrint = (pageNum) => {
    //Remove Children
    const content = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(content);

    titlePage.titlePrint(pageNum);

    
    for (let i = 0; i < listData.selectedToDo.length; i++) {
        let text = document.createElement('P');
        text.setAttribute('id',`toDoText${i}`);
        text.innerHTML = listData.selectedToDo[i].status + listData.selectedToDo[i].text + listData.selectedToDo[i].date + listData.selectedToDo[i].priority;
        content.appendChild(text);
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
        editBtn.innerHTML = 'Edit';
        text.appendChild(editBtn);
    }
    checkBoxValid();
    
    

    //New to-do Button
    let btn = document.createElement('button');
    content.appendChild(btn);
    btn.setAttribute('data-btn', 'newToDo');
    btn.setAttribute('id', 'newToDo')
    btn.setAttribute('data-page', pageNum);
    btn.innerHTML = '+ New To-Do';

    //Input Container
    const div = document.querySelector('#content');
    let toDoInputCont = document.createElement('DIV');
    toDoInputCont.setAttribute('id', 'toDoInputCont');
    div.appendChild(toDoInputCont);
}

export { listPagePrint };