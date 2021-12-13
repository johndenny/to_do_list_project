import { listData } from './newProjectData';
import { btnEvents } from './index';

const newListPrintCont = {
    newListPrint: () => { 
        const content = document.querySelector('#content');
        const listBtns = document.querySelector('#listBtns');
        const lastList = listData.listsArray.length - 1;
        newListPrintCont.removeAllChildNodes(listBtns);
        newListPrintCont.removeAllChildNodes(content);
        let title = listData.listsArray[lastList].title;
            let desc = listData.listsArray[lastList].desc;
            let titleSpan = document.createElement('SPAN');
            content.appendChild(titleSpan);
            titleSpan.setAttribute('id', 'listTitle');
            titleSpan.innerHTML = title;
            let descSpan = document.createElement('SPAN');
            content.appendChild(descSpan);
            descSpan.setAttribute('id','listdesc');
            descSpan.innerHTML = desc;
        for (let i=0;i<listData.listsArray.length;i++) {
            let titleBtn = listData.listsArray[i].title;
            let btn = document.createElement('button');
            listBtns.appendChild(btn);
            btn.setAttribute('id','listbtn');
            btn.setAttribute('data-btn', i);
            btn.innerHTML = titleBtn;
            btnEvents();
        }   
    },
    removeAllChildNodes: (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    },
}

export { newListPrintCont };