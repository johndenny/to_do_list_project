import { listData } from './newProjectData';
import { newListPrintCont } from './newListPrint';
import { btnEvents } from './index';
import { listPagePrint } from './listPagePrint';
import { toDoListPrint } from './toDoListPrint';
import { editToDoInput } from './editToDoInput';

const titlePage = {
    titlePrint: (listIndex,listId) => {

        //Title Container
        let titleCont = document.createElement('div');
        titleCont.setAttribute('id', 'titleCont');
        listCont.appendChild(titleCont);
        let title = document.createElement('span');
        title.setAttribute('id','listTitle');
        title.setAttribute('class','title')
        titleCont.appendChild(title);
        title.innerHTML = listData.listsArray[listIndex].title;

        //New to-do Button
        let btn = document.createElement('button');
        btn.setAttribute('data-btn', 'newToDo');
        btn.setAttribute('id', 'newToDo')
        btn.setAttribute('data-listid', listId);
        btn.innerHTML = '+ New To-Do';
        title.appendChild(btn);

        //Edit Button
        let editBtn = document.createElement('button');
        editBtn.setAttribute('id','titleEditBtn');
        editBtn.setAttribute('data-btn','editList');
        editBtn.setAttribute('data-listId', listId);
        editBtn.innerHTML = 'Edit';
        title.appendChild(editBtn);

        //Delete Button
        let listDeleteBtn = document.createElement('button');
        listDeleteBtn.setAttribute('id', 'listDeleteBtn');
        listDeleteBtn.setAttribute('data-btn', 'listDelete');
        listDeleteBtn.setAttribute('data-listid', listId);
        listDeleteBtn.innerText = 'delete';
        title.appendChild(listDeleteBtn);

        //Text Container 
        let textCont = document.createElement('div');
        textCont.setAttribute('id','textCont');
        listCont.appendChild(textCont);


        //Description
        let listDesc = listData.listsArray[listIndex].desc;
        console.log(listDesc);
        if (listDesc !== '') {
            let listDescText = document.createElement('span');
            listDescText.setAttribute('id','listDesc');
            listDescText.innerText = listDesc;
            textCont.appendChild(listDescText);
        }
        
        //Notes
        let listNotes = listData.listsArray[listIndex].notes;
        if (listNotes !== '') {
            let listNotesText = document.createElement('span');
            listNotesText.setAttribute('id','listNotes');
            listNotesText.innerText = listNotes;
            textCont.appendChild(listNotesText);
        }
        

    },
    titleDelete: (pageNum) => {
        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('id','titleDeleteBtn');
        deleteBtn.setAttribute('data-btn','listDelete');
        deleteBtn.setAttribute('data-page',pageNum);
        deleteBtn.innerHTML = 'Delete';
        titleCont.prepend(deleteBtn);
    },
    editListTitleInputPrint: (listIndex,listId) => {
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
        titleInput.setAttribute('value', listData.listsArray[listIndex].title);
        titleHeader.appendChild(titleInput);
        let titleSaveBtn = document.createElement('button');
        titleSaveBtn.setAttribute('id','titleSaveBtn');
        titleSaveBtn.setAttribute('data-btn','titleSave');
        titleSaveBtn.setAttribute('data-listid', listId);
        titleSaveBtn.innerHTML = 'save'
        titleHeader.appendChild(titleSaveBtn);
        let descPara = document.createElement('P');
        titleCont.appendChild(descPara);
        descPara.setAttribute('id','listDesc');
        let listDesc = listData.listsArray[listIndex].desc
        if (listDesc === '') {
            descPara.innerHTML = 'Description';
        } else {
            descPara.innerHTML = listDesc;
        }
        let descEditBtn = document.createElement('button');
        descEditBtn.setAttribute('id','descEditBtn');
        descEditBtn.setAttribute('data-btn','descEditBtn');
        descEditBtn.setAttribute('data-listid', listId);
        descEditBtn.innerHTML = 'Edit';
        descPara.appendChild(descEditBtn);
        let descErrCont = document.createElement('div');
        descErrCont.setAttribute('id', 'descErrCont');
        descPara.appendChild(descErrCont);
        let titleErrCont = document.createElement('div');
        titleErrCont.setAttribute('id', 'titleErrCont');
        titleHeader.appendChild(titleErrCont);
        btnEvents();
    },
    editListDescInputPrint: (listIndex, listId) => {
        let titleCont = document.querySelector('#titleCont');
        let toDoCont = document.querySelector('#toDoCont');
        newListPrintCont.removeAllChildNodes(toDoCont);
        toDoListPrint();
        newListPrintCont.removeAllChildNodes(titleCont);  
        let title = document.createElement('H3');
        titleCont.prepend(title);
        title.setAttribute('id', 'listTitle');
        title.innerHTML = listData.listsArray[listIndex].title;
        let titleEditBtn = document.createElement('button');
        titleEditBtn.setAttribute('id','titleEditBtn');
        titleEditBtn.setAttribute('data-btn','titleEditBtn');
        titleEditBtn.setAttribute('data-listid', listId);
        titleEditBtn.innerHTML = 'Edit';
        title.appendChild(titleEditBtn);
        let descPara = document.createElement('P');
        titleCont.appendChild(descPara);
        let descInput = document.createElement('INPUT');
        descInput.setAttribute('id', 'editDescInput');
        descInput.setAttribute('type', 'text');
        let listDesc = listData.listsArray[listIndex].desc;
        if (listDesc === '') {
            descInput.setAttribute('placeholder', 'Description');
        } else {
            descInput.setAttribute('value', listData.listsArray[listIndex].desc);
        }
        descPara.appendChild(descInput);
        let descSaveBtn = document.createElement('button');
        descSaveBtn.setAttribute('id','descEditBtn');
        descSaveBtn.setAttribute('data-btn', 'descSave');
        descSaveBtn.setAttribute('data-listid', listId);
        descSaveBtn.innerHTML = 'save';
        descPara.appendChild(descSaveBtn);
        let descErrCont = document.createElement('div');
        descErrCont.setAttribute('id', 'descErrCont');
        descPara.appendChild(descErrCont);
        let titleErrCont = document.createElement('div');
        titleErrCont.setAttribute('id', 'titleErrCont');
        title.appendChild(titleErrCont);
        btnEvents();
    }
};

export {titlePage};