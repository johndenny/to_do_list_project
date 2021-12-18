import { listData } from './newProjectData';
import { newListPrintCont } from './newListPrint';
import { btnEvents } from './index';

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
        let descPara = document.createElement('P');
        titleCont.appendChild(descPara);
        descPara.setAttribute('id','listDesc');
        descPara.setAttribute('data-page', pageNum);
        descPara.innerHTML = listData.listsArray[pageNum].desc;
        titlePage.editEvents();
    },
    titleEditInput: (pageNum) => {
        const div = document.querySelector('#titleCont');
        newListPrintCont.removeAllChildNodes(div);

        // List Edit Name & Desc Input
        let origTitle = listData.listsArray[pageNum].title;
        let origDesc = listData.listsArray[pageNum].desc;
        let titleInput = document.createElement('INPUT');
        div.appendChild(titleInput);
        titleInput.setAttribute('id', 'listTitleInput')
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('value', origTitle);
        let descInput = document.createElement('INPUT');
        div.appendChild(descInput);
        descInput.setAttribute('id', 'listDescInput');
        descInput.setAttribute('type', 'text');
        if (origDesc === '') {
            descInput.setAttribute('placeholder', 'Description');
        } else {
            descInput.setAttribute('value', origDesc);
        }
        let submitBtn = document.createElement('button');
        submitBtn.innerHTML = 'submit';
        submitBtn.setAttribute('data-btn', 'submitEdit');
        submitBtn.setAttribute('data-page', pageNum);
        div.appendChild(submitBtn);
    },
    titleDelete: (pageNum) => {
        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('id','titleDeleteBtn');
        deleteBtn.setAttribute('data-btn','listDelete');
        deleteBtn.setAttribute('data-page',pageNum);
        deleteBtn.innerHTML = 'Delete';
        titleCont.prepend(deleteBtn);
    },
    editEvents: () => {
        let listTitle = document.querySelector('#listTitle');
        let listDesc = document.querySelector('#listDesc');
        listTitle.addEventListener('click', titlePage.editListInputPrint);
        listDesc.addEventListener('click', titlePage.editListInputPrint);
    },
    editListInputPrint: (event) => {
        let page = event.target.getAttribute('data-page');
        let type = event.target.getAttribute('id');
        let titleCont = document.querySelector('#titleCont');
        if (type === 'listTitle') {
            titleCont.removeChild(titleCont.firstChild);    
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
            btnEvents();
        } else if (type === 'listDesc') {
            console.log(page);
            titleCont.removeChild(titleCont.lastChild);
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
        
    },
};

export {titlePage};