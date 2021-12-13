import { newListPrintCont } from './newListPrint';
import { listData } from './newProjectData';

const listPagePrint = (pageNum) => {
    const content = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(content);
    let titleSpan = document.createElement('SPAN');
    content.appendChild(titleSpan);
    titleSpan.setAttribute('id', 'listTitle');
    titleSpan.innerHTML = listData.listsArray[pageNum].title;
    let descSpan = document.createElement('SPAN');
    content.appendChild(descSpan);
    descSpan.setAttribute('id','listdesc');
    descSpan.innerHTML = listData.listsArray[pageNum].desc;
}

export { listPagePrint };