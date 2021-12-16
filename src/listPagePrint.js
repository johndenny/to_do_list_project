import { newListPrintCont } from './newListPrint';
import { listData } from './newProjectData';
import { checkBoxValid } from './checkBoxEvent';

const listPagePrint = (pageNum) => {

    //Remove Children
    const content = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(content);

    //Title & Description
    let titleSpan = document.createElement('SPAN');
    content.appendChild(titleSpan);
    titleSpan.setAttribute('id', 'listTitle');
    titleSpan.innerHTML = listData.listsArray[pageNum].title;
    let descSpan = document.createElement('SPAN');
    content.appendChild(descSpan);
    descSpan.setAttribute('id','listdesc');
    descSpan.innerHTML = listData.listsArray[pageNum].desc;

    
    for (let i = 0; i < listData.selectedToDo.length; i++) {
        let toDo = document.createElement('INPUT');
        toDo.setAttribute('id','toDo');
        toDo.setAttribute('data-text', listData.selectedToDo[i].text);
        toDo.setAttribute('data-page', listData.selectedToDo[i].page);
        toDo.setAttribute('type','checkbox')
        content.appendChild(toDo);
        if (listData.selectedToDo[i].status == 'complete') {
            toDo.checked = true;
        } else {
            toDo.checked = false;
        }
        let label = document.createElement('label');
        label.setAttribute('for','toDo');
        label.innerHTML = listData.selectedToDo[i].status + listData.selectedToDo[i].text + listData.selectedToDo[i].date + listData.selectedToDo[i].priority;
        content.appendChild(label);
    }
    checkBoxValid();
    
    

    //New to-do Button
    let btn = document.createElement('button');
    content.appendChild(btn);
    btn.setAttribute('data-btn', 'newToDo');
    btn.setAttribute('id', 'newToDo')
    btn.setAttribute('data-page', pageNum);
    btn.innerHTML = '+ New To-Do';
}

export { listPagePrint };