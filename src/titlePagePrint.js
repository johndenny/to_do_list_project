import { listData } from './newProjectData';
import { newListPrintCont } from './newListPrint';
import { btnEvents } from './index';
import { listPagePrint } from './listPagePrint';
import { toDoListPrint } from './toDoListPrint';
import { editToDoInput } from './editToDoInput';

const titlePage = {
    titlePrint: (pageNum) => {
        //Title & Description
        let titleCont = document.createElement('div');
        titleCont.setAttribute('id', 'titleCont');
        content.appendChild(titleCont);
        let title = document.createElement('H3');
        titleCont.appendChild(title);
        title.setAttribute('id', 'listTitle');
        title.setAttribute('data-page',pageNum)
        title.innerHTML = listData.listsArray[pageNum].title;
        let editBtn = document.createElement('button');
        editBtn.setAttribute('id','titleEditBtn');
        editBtn.setAttribute('data-btn','titleEditBtn');
        editBtn.setAttribute('data-text', listData.selectedToDo[pageNum].text);
        editBtn.setAttribute('data-page', listData.selectedToDo[pageNum].page);
        editBtn.innerHTML = 'Edit';
        title.appendChild(editBtn);
        let descPara = document.createElement('P');
        titleCont.appendChild(descPara);
        descPara.setAttribute('id','listDesc');
        descPara.setAttribute('data-page', pageNum);
        descPara.innerHTML = listData.listsArray[pageNum].desc;
        let desceditBtn = document.createElement('button');
        desceditBtn.setAttribute('id','descEditBtn');
        desceditBtn.setAttribute('data-btn','descEditBtn');
        desceditBtn.setAttribute('data-text', listData.selectedToDo[pageNum].text);
        desceditBtn.setAttribute('data-page', listData.selectedToDo[pageNum].page);
        desceditBtn.innerHTML = 'Edit';
        descPara.appendChild(desceditBtn);
    },
    titleDelete: (pageNum) => {
        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('id','titleDeleteBtn');
        deleteBtn.setAttribute('data-btn','listDelete');
        deleteBtn.setAttribute('data-page',pageNum);
        deleteBtn.innerHTML = 'Delete';
        titleCont.prepend(deleteBtn);
    },
    editListTitleInputPrint: (page) => {
        let titleCont = document.querySelector('#titleCont');
        let toDoCont = document.querySelector('#toDoCont');
        newListPrintCont.removeAllChildNodes(toDoCont);
        toDoListPrint();
        newListPrintCont.removeAllChildNodes(titleCont);  
        let titleHeader = document.createElement('H3');
        titleCont.prepend(titleHeader);
        let titleInput = document.createElement('INPUT');
        titleInput.setAttribute('id','editTitleInput');
        titleInput.setAttribute('type','text');
        titleInput.setAttribute('value', listData.listsArray[page].title);
        titleHeader.appendChild(titleInput);
        let titleSaveBtn = document.createElement('button');
        titleSaveBtn.setAttribute('id','titleSaveBtn');
        titleSaveBtn.setAttribute('data-btn','titleSave');
        titleSaveBtn.setAttribute('data-page',page);
        titleSaveBtn.innerHTML = 'save'
        titleHeader.appendChild(titleSaveBtn);
        let descPara = document.createElement('P');
        titleCont.appendChild(descPara);
        descPara.setAttribute('id','listDesc');
        descPara.setAttribute('data-page', page);
        descPara.innerHTML = listData.listsArray[page].desc;
        let descEditBtn = document.createElement('button');
        descEditBtn.setAttribute('id','descEditBtn');
        descEditBtn.setAttribute('data-btn','descEditBtn');
        descEditBtn.setAttribute('data-text', listData.selectedToDo[page].text);
        descEditBtn.setAttribute('data-page', listData.selectedToDo[page].page);
        descEditBtn.innerHTML = 'Edit';
        descPara.appendChild(descEditBtn);
        let titleErrCont = document.createElement('div');
        titleErrCont.setAttribute('id', 'titleErrCont');
        titleHeader.appendChild(titleErrCont);
        btnEvents();
    },
    editListDescInputPrint: (page) => {
        let titleCont = document.querySelector('#titleCont');
        let toDoCont = document.querySelector('#toDoCont');
        newListPrintCont.removeAllChildNodes(toDoCont);
        toDoListPrint();
        newListPrintCont.removeAllChildNodes(titleCont);  
        let title = document.createElement('H3');
        titleCont.prepend(title);
        title.setAttribute('id', 'listTitle');
        title.setAttribute('data-page',page)
        title.innerHTML = listData.listsArray[page].title;
        let titleEditBtn = document.createElement('button');
        titleEditBtn.setAttribute('id','titleEditBtn');
        titleEditBtn.setAttribute('data-btn','titleEditBtn');
        titleEditBtn.setAttribute('data-text', listData.selectedToDo[page].text);
        titleEditBtn.setAttribute('data-page', listData.selectedToDo[page].page);
        titleEditBtn.innerHTML = 'Edit';
        title.appendChild(titleEditBtn);
        let descPara = document.createElement('P');
        titleCont.appendChild(descPara);
        let descInput = document.createElement('INPUT');
        descInput.setAttribute('id', 'editDescInput');
        descInput.setAttribute('type', 'text');
        descInput.setAttribute('value', listData.listsArray[page].desc);
        descPara.appendChild(descInput);
        let descSaveBtn = document.createElement('button');
        descSaveBtn.setAttribute('id','descEditBtn');
        descSaveBtn.setAttribute('data-btn', 'descSave');
        descSaveBtn.setAttribute('data-page', page);
        descSaveBtn.innerHTML = 'save';
        descPara.appendChild(descSaveBtn);
        btnEvents();
    }
};

export {titlePage};