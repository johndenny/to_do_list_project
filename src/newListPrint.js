import { listData } from './newProjectData';

const newListPrintCont = {
    newListPrint: () => { 
        const content = document.querySelector('#content');
        const listBtns = document.querySelector('#listBtns');
        newListPrintCont.removeAllChildNodes(content);
        for (let i=0;i<listData.listsArray.length;i++) {
            let title = listData.listsArray[i].title;
            let desc = listData.listsArray[i].desc;
            let titleSpan = document.createElement('SPAN');
            content.appendChild(titleSpan);
            titleSpan.setAttribute('id', 'listTitle');
            titleSpan.innerHTML = title;
            let descSpan = document.createElement('SPAN');
            content.appendChild(descSpan);
            descSpan.setAttribute('id','listdesc');
            descSpan.innerHTML = desc;
            let btn = document.createElement('button');
            listBtns.appendChild(btn);
            btn.setAttribute('id','listbtn');
            btn.innerHTML = title;
        }   
    },
    removeAllChildNodes: (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    },
}

export { newListPrintCont };