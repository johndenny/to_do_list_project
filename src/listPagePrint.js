import { newListPrintCont } from './newListPrint';
import { listData } from './newProjectData';

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
        toDo.setAttribute('type','checkbox')
        content.appendChild(toDo);
        let label = document.createElement('label');
        label.setAttribute('for','toDo');
        label.innerHTML = listData.selectedToDo[i].text;
        content.appendChild(label);
    }
    

    //New to-do Button
    let btn = document.createElement('button');
    content.appendChild(btn);
    btn.setAttribute('data-btn', 'newToDo');
    btn.setAttribute('id', 'newToDo')
    btn.setAttribute('data-page', pageNum);
    btn.innerHTML = '+ New To-Do';
}

export { listPagePrint };