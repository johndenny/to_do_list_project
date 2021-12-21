import { newListPrintCont } from "./newListPrint";
import { listData } from "./newProjectData";

const newListInput = () => {
    listData.selectedToDo = [];
    const div = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(div);

    // Porject Name & Desc Input
    let titleCont = document.createElement('H3');
    div.appendChild(titleCont);
    let titleInput = document.createElement('INPUT');
    titleCont.appendChild(titleInput);
    titleInput.setAttribute('id', 'listTitleInput')
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'List Title');
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
    descCont.appendChild(submitBtn);
    let newListErrCont = document.createElement('div');
    newListErrCont.setAttribute('id', 'newListErrCont');
    div.appendChild(newListErrCont);
}

export { newListInput };