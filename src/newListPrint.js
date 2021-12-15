import { listData } from './newProjectData';
import { btnEvents } from './index';
import { listPagePrint } from './listPagePrint';

const newListPrintCont = {
    newListPrint: () => { 
        let page = listData.listsArray.length-1;
        listData.newToDoPrint(page);
        listPagePrint(page);
        const listBtns = document.querySelector('#listBtns');
        newListPrintCont.removeAllChildNodes(listBtns);
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