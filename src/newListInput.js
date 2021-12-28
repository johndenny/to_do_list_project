import { listData } from "./newProjectData";

const newListInput = () => {
    const modalContent = document.querySelector('#modalContent');  
    
    if (modalContent.hasChildNodes()){
        modalContent.removeChild(modalContent.firstChild);
    }    
    
    const myModal = document.querySelector('#myModal');
    myModal.style.display = 'block';

    // New List Input Cont 
    let listInputCont = document.createElement('div');
    listInputCont.setAttribute('id','listInputCont');
    modalContent.appendChild(listInputCont);
    
    //Close Button
    let modalClose = document.createElement('span');
    modalClose.setAttribute('id','modalClose');
    modalClose.setAttribute('class','button');
    modalClose.setAttribute('data-btn','cancel');
    modalClose.innerHTML = '&times;';
    listInputCont.appendChild(modalClose);
    
    //Header
    let listInputHeader = document.createElement('span');
    listInputHeader.setAttribute('id','listInputHeader');
    listInputHeader.innerText = 'Add List'
    listInputCont.appendChild(listInputHeader);
    
    // New List Title Input
    let titleInputLabel = document.createElement('LABEL');
    titleInputLabel.setAttribute('for','listTitleInput');
    titleInputLabel.innerText = 'Title';
    listInputCont.appendChild(titleInputLabel);
    let titleInput = document.createElement('INPUT');
    titleInput.setAttribute('id', 'listTitleInput');
    titleInput.setAttribute('type', 'text');
    listInputCont.appendChild(titleInput);

    // New List Description Input
    let descInputLabel = document.createElement('LABEL');
    descInputLabel.setAttribute('for','listDescInput');
    descInputLabel.innerText = 'Description';
    listInputCont.appendChild(descInputLabel);
    let descInput = document.createElement('INPUT');
    descInput.setAttribute('id', 'listDescInput');
    descInput.setAttribute('type', 'text');
    listInputCont.appendChild(descInput);

    // New List Notes Input
    let notesInputLabel = document.createElement('LABEL');
    notesInputLabel.setAttribute('for','listNotesInput');
    notesInputLabel.innerText = 'Notes';
    listInputCont.appendChild(notesInputLabel)
    let notesInput = document.createElement('INPUT');
    notesInput.setAttribute('id', 'listNotesInput');
    notesInput.setAttribute('type','text');
    listInputCont.appendChild(notesInput);
    let btnCont = document.createElement('div');
    btnCont.setAttribute('id','newListBtnCont');
    listInputCont.appendChild(btnCont);
    let submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'submit';
    submitBtn.setAttribute('data-btn', 'submit');
    btnCont.appendChild(submitBtn);
}

const editListInput = (listId, listIndex) => {
    const modalContent = document.querySelector('#modalContent');  
    
    if (modalContent.hasChildNodes()){
        modalContent.removeChild(modalContent.firstChild);
    }    
    
    const myModal = document.querySelector('#myModal');
    myModal.style.display = 'block';

    // New List Input Cont 
    let listInputCont = document.createElement('div');
    listInputCont.setAttribute('id','listInputCont');
    modalContent.appendChild(listInputCont);
    
    //Close Button
    let modalClose = document.createElement('span');
    modalClose.setAttribute('id','modalClose');
    modalClose.setAttribute('class','button');
    modalClose.setAttribute('data-btn','cancel');
    modalClose.innerHTML = '&times;';
    listInputCont.appendChild(modalClose);
    
    //Header
    let listInputHeader = document.createElement('span');
    listInputHeader.setAttribute('id','listInputHeader');
    listInputHeader.innerText = 'Edit List'
    listInputCont.appendChild(listInputHeader);
    
    // New List Title Input
    let previousTitle = listData.listsArray[listIndex].title;
    let titleInputLabel = document.createElement('LABEL');
    titleInputLabel.setAttribute('for','listTitleInput');
    titleInputLabel.innerText = 'Title';
    listInputCont.appendChild(titleInputLabel);
    let titleInput = document.createElement('INPUT');
    titleInput.setAttribute('id', 'listTitleInput');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('value', previousTitle);
    listInputCont.appendChild(titleInput);

    // New List Description Input
    let previousDescription = listData.listsArray[listIndex].desc;
    let descInputLabel = document.createElement('LABEL');
    descInputLabel.setAttribute('for','listDescInput');
    descInputLabel.innerText = 'Description';
    listInputCont.appendChild(descInputLabel);
    let descInput = document.createElement('INPUT');
    descInput.setAttribute('id', 'listDescInput');
    descInput.setAttribute('type', 'text');
    descInput.setAttribute('value', previousDescription);
    listInputCont.appendChild(descInput);

    // New List Notes Input
    let previousNotes = listData.listsArray[listIndex].notes;
    let notesInputLabel = document.createElement('LABEL');
    notesInputLabel.setAttribute('for','listNotesInput');
    notesInputLabel.innerText = 'Notes';
    listInputCont.appendChild(notesInputLabel)
    let notesInput = document.createElement('INPUT');
    notesInput.setAttribute('id', 'listNotesInput');
    notesInput.setAttribute('type','text');
    notesInput.setAttribute('value', previousNotes);
    listInputCont.appendChild(notesInput);

    //Submit Button
    let btnCont = document.createElement('div');
    btnCont.setAttribute('id','newListBtnCont');
    listInputCont.appendChild(btnCont);
    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = 'save';
    saveBtn.setAttribute('data-btn', 'saveList');
    saveBtn.setAttribute('data-listid', listId);
    btnCont.appendChild(saveBtn);
}

export { newListInput, editListInput};