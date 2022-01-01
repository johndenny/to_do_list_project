import { listData } from './newProjectData';
import { btnEvents } from './index';
import { listPagePrint } from './listPagePrint';

const newListPrintCont = {
    newListPrint: () => {
        const listBtns = document.querySelector('#listBtns');
        newListPrintCont.removeAllChildNodes(listBtns);
        for (let i=0;i<listData.listsArray.length;i++) {
            let listBtnCont = document.createElement('div');
            listBtnCont.setAttribute('id','listBtnEachCont');
            listBtns.appendChild(listBtnCont);
            let listBtnEachSymbol = document.createElement('span');
            listBtnEachSymbol.setAttribute('id','listBtnEachSymbol');
            listBtnEachSymbol.style.color = listData.listsArray[i].color;
            listBtnEachSymbol.innerHTML = '&#9679;';
            listBtnCont.appendChild(listBtnEachSymbol);
            let titleBtn = listData.listsArray[i].title;
            let btn = document.createElement('span');
            listBtnCont.appendChild(btn);
            btn.setAttribute('class','button');
            btn.setAttribute('id','listBtn');
            btn.setAttribute('data-btn', 'listPrintBtn');
            btn.setAttribute('data-listId', listData.listsArray[i].listId);
            btn.innerHTML = titleBtn;
            let listNum = document.createElement('span');
            listNum.id = 'listNum';
            let listId = listData.listsArray[i].listId;
            listData.newToDoPrint(i,listId);
            listNum.innerText = listData.selectedToDo.length;
            listBtnCont.appendChild(listNum);
            const thisWeekNum = document.querySelector('#thisWeekNum');
            listData.thisWeekSort();
            thisWeekNum.innerText = listData.selectedToDo.length;
            listData.inboxToDoSort();
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