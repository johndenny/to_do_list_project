import { newListPrintCont } from "./newListPrint";

const newProjectInput = (pageNum) => {
    const div = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(div);

    // Porject Name & Desc Input
    let titleInput = document.createElement('INPUT');
    div.appendChild(titleInput);
    titleInput.setAttribute('id', 'listTitleInput')
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'List Title');
    let descInput = document.createElement('INPUT');
    div.appendChild(descInput);
    descInput.setAttribute('id', 'listDescInput');
    descInput.setAttribute('type', 'text');
    descInput.setAttribute('placeholder', 'List Description');
    let submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'submit';
    submitBtn.setAttribute('data-btn', 'submit');
    submitBtn.setAttribute('data-page', pageNum);
    div.appendChild(submitBtn);
}

export { newProjectInput };