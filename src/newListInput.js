import { newListPrintCont } from "./newListPrint";

const newProjectInput = (placeholder) => {
    const div = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(div);

    // Porject Name & Desc Input
    let titleCont = document.createElement('H3');
    div.appendChild(titleCont);
    let titleInput = document.createElement('INPUT');
    titleCont.appendChild(titleInput);
    titleInput.setAttribute('id', 'listTitleInput')
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', placeholder);
    let descCont = document.createElement('P');
    div.appendChild(descCont);
    let descInput = document.createElement('INPUT');
    descCont.appendChild(descInput);
    descInput.setAttribute('id', 'listDescInput');
    descInput.setAttribute('type', 'text');
    descInput.setAttribute('placeholder', 'List Description');
    let submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'submit';
    submitBtn.setAttribute('data-btn', 'submit');
    // submitBtn.setAttribute('data-page', pageNum);
    descCont.appendChild(submitBtn);
}

export { newProjectInput };