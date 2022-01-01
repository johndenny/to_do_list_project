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

    //Header
    let listInputHeader = document.createElement('span');
    listInputHeader.setAttribute('id','listInputHeader');
    listInputHeader.innerText = 'Add List'
    listInputCont.appendChild(listInputHeader);
    
    // New List Title Input
    let titleInputLabel = document.createElement('LABEL');
    titleInputLabel.setAttribute('for','listTitleInput');
    titleInputLabel.setAttribute('id','titleInputLabel');
    titleInputLabel.innerText = 'Title';
    listInputCont.appendChild(titleInputLabel);
    let titleInput = document.createElement('INPUT');
    titleInput.setAttribute('id', 'listTitleInput');
    titleInput.setAttribute('type', 'text');
    listInputCont.appendChild(titleInput);

    // New List Color Input
    let listInputColorLabel = document.createElement('label');
    listInputColorLabel.id = 'listInputColorLabel';
    listInputColorLabel.htmlFor = 'listInputColor';
    listInputColorLabel.innerText = 'Color';
    listInputCont.appendChild(listInputColorLabel);
    let listInputColor = document.createElement('input');
    listInputColor.id = 'listInputColor';
    listInputColor.type = 'color';
    listInputCont.appendChild(listInputColor);

    // New List Description Input
    let descInputLabel = document.createElement('LABEL');
    descInputLabel.setAttribute('for','listDescInput');
    descInputLabel.setAttribute('id','descInputLabel');
    descInputLabel.innerText = 'Description';
    listInputCont.appendChild(descInputLabel);
    let descInput = document.createElement('INPUT');
    descInput.setAttribute('id', 'listDescInput');
    descInput.setAttribute('type', 'text');
    listInputCont.appendChild(descInput);

    // New List Notes Input
    let notesInputLabel = document.createElement('LABEL');
    notesInputLabel.setAttribute('for','listNotesInput');
    notesInputLabel.setAttribute('id','notesInputLabel');
    notesInputLabel.innerText = 'Notes';
    listInputCont.appendChild(notesInputLabel)
    let notesInput = document.createElement('textarea');
    notesInput.setAttribute('id', 'listNotesInput');
    listInputCont.appendChild(notesInput);

    //Button Container
    let btnCont = document.createElement('div');
    btnCont.setAttribute('id','newListInputBtnCont');
    listInputCont.appendChild(btnCont);
    let cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'cancel'
    cancelBtn.setAttribute('data-btn', 'cancel');
    btnCont.appendChild(cancelBtn);
    let submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'save';
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

    //Header
    let listInputHeader = document.createElement('span');
    listInputHeader.setAttribute('id','listInputHeader');
    listInputHeader.innerText = 'Edit List'
    listInputCont.appendChild(listInputHeader);
    
    // New List Title Input
    let previousTitle = listData.listsArray[listIndex].title;
    let titleInputLabel = document.createElement('LABEL');
    titleInputLabel.setAttribute('for','listTitleInput');
    titleInputLabel.id = 'titleInputLabel';
    titleInputLabel.innerText = 'Title';
    listInputCont.appendChild(titleInputLabel);
    let titleInput = document.createElement('INPUT');
    titleInput.setAttribute('id', 'listTitleInput');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('value', previousTitle);
    listInputCont.appendChild(titleInput);

    // New List Color Input
    let listInputColorLabel = document.createElement('label');
    listInputColorLabel.id = 'listInputColorLabel';
    listInputColorLabel.htmlFor = 'listInputColor';
    listInputColorLabel.innerText = 'Color';
    listInputCont.appendChild(listInputColorLabel);
    let listInputColor = document.createElement('input');
    listInputColor.id = 'listInputColor';
    listInputColor.type = 'color';
    listInputColor.value = listData.listsArray[listIndex].color;
    listInputCont.appendChild(listInputColor);

    // New List Description Input
    let previousDescription = listData.listsArray[listIndex].desc;
    let descInputLabel = document.createElement('LABEL');
    descInputLabel.setAttribute('for','listDescInput');
    descInputLabel.id = 'descInputLabel';
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
    notesInputLabel.id = 'notesInputLabel';
    notesInputLabel.innerText = 'Notes';
    listInputCont.appendChild(notesInputLabel)
    let notesInput = document.createElement('textarea');
    notesInput.setAttribute('id', 'listNotesInput');
    notesInput.setAttribute('value', previousNotes);
    listInputCont.appendChild(notesInput);

    //Button Container
    let btnCont = document.createElement('div');
    btnCont.setAttribute('id','newListInputBtnCont');
    listInputCont.appendChild(btnCont);
    let cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'cancel'
    cancelBtn.setAttribute('data-btn', 'cancel');
    btnCont.appendChild(cancelBtn);
    let submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'save';
    submitBtn.setAttribute('data-btn', 'saveList');
    submitBtn.setAttribute('data-listid', listId);
    btnCont.appendChild(submitBtn);
    }

export { newListInput, editListInput};