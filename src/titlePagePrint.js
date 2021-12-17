import { listData } from './newProjectData';
import { newListPrintCont } from './newListPrint';

const titlePage = {
    titlePrint: (pageNum) => {
        console.log(pageNum);
        //Title & Description
        let titleCont = document.createElement('div');
        titleCont.setAttribute('id', 'titleCont');
        content.appendChild(titleCont);
        let titleSpan = document.createElement('SPAN');
        titleCont.appendChild(titleSpan);
        titleSpan.setAttribute('id', 'listTitle');
        titleSpan.innerHTML = listData.listsArray[pageNum].title;
        let descSpan = document.createElement('SPAN');
        titleCont.appendChild(descSpan);
        descSpan.setAttribute('id','listdesc');
        descSpan.innerHTML = listData.listsArray[pageNum].desc;
        let editBtn = document.createElement('button');
        editBtn.setAttribute('id','titleEditBtn');
        editBtn.setAttribute('data-btn','titleEdit');
        editBtn.setAttribute('data-page',pageNum);
        editBtn.innerHTML = 'Edit';
        titleCont.appendChild(editBtn);
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
        descInput.setAttribute('value', origDesc);
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
    }
};

export {titlePage};