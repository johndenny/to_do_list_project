import { listData } from "./newProjectData";
import { format } from "date-fns";

const newToDoInput = (listIndex,listId) => {
    const modalContent = document.querySelector('#modalContent');  
    
    if (modalContent.hasChildNodes()){
        modalContent.removeChild(modalContent.firstChild);
    }    
    
    const myModal = document.querySelector('#myModal');
    myModal.style.display = 'block';

    //Input Container
    const toDoCont = document.querySelector('#toDoCont');
    let toDoInputCont = document.createElement('div');
    toDoInputCont.setAttribute('id','toDoInputCont');
    modalContent.appendChild(toDoInputCont);

    //Header
    let listInputHeader = document.createElement('span');
    listInputHeader.setAttribute('id','toDoInputHeader');
    listInputHeader.innerText = 'Add To Do'
    toDoInputCont.appendChild(listInputHeader);

    //To Do Input
    let toDoLabel = document.createElement('label');
    toDoLabel.setAttribute('id','newToDoLabel');
    toDoLabel.setAttribute('for','toDoInput');
    toDoLabel.innerText = 'Title';
    toDoInputCont.appendChild(toDoLabel);
    let toDoInput = document.createElement('INPUT');
    toDoInput.setAttribute('id', 'toDoInput');
    toDoInput.setAttribute('type', 'text');
    toDoInputCont.appendChild(toDoInput);

    //Date
    let toDoDateLabel = document.createElement('label');
    toDoDateLabel.setAttribute('id','newToDoDateLabel');
    toDoDateLabel.setAttribute('for','toDoDate');
    toDoDateLabel.innerText = 'Due Date';
    toDoInputCont.appendChild(toDoDateLabel);

    //Date Container
    let dateCont = document.createElement('div');
    dateCont.id = 'dateInputCont';
    toDoInputCont.appendChild(dateCont)
    let date = document.createElement('INPUT');
    date.setAttribute('id', 'toDoDate');
    date.setAttribute('type', 'date');
    dateCont.appendChild(date);

    //Priority Container 
    let priorityInputCont = document.createElement('div');
    priorityInputCont.setAttribute('id','priorityInputCont');
    toDoInputCont.appendChild(priorityInputCont);

    //Priority
    let label = document.createElement('label');
    label.setAttribute('for','toDoPriority');
    label.setAttribute('id','priorityInputLabel');
    label.innerHTML = 'Priority';
    priorityInputCont.appendChild(label);
    let priority =document.createElement('INPUT');
    priority.setAttribute('id', 'toDoPriority');
    priority.setAttribute('type', 'checkbox');
    priorityInputCont.appendChild(priority);

    //List
    let toDoListInputLabel = document.createElement('label');
    toDoListInputLabel.setAttribute('for','toDoListInput');
    toDoListInputLabel.setAttribute('id','toDoListInputLabel');
    toDoListInputLabel.innerText = 'List';
    toDoInputCont.appendChild(toDoListInputLabel);

    //List Select Contianer 
    let listSelectCont = document.createElement('div');
    listSelectCont.id = 'listSelectCont';
    toDoInputCont.appendChild(listSelectCont);
    let toDoListInput = document.createElement('select');
    toDoListInput.setAttribute('id','toDoListInput');
    listSelectCont.appendChild(toDoListInput);
    for (let i = 0; i<listData.listsArray.length; i++) {
        let option = document.createElement('option');
        option.setAttribute('value',listData.listsArray[i].listId);
        option.setAttribute('id','listOptions');
        option.innerText = listData.listsArray[i].title;
        toDoListInput.appendChild(option);
        if (listData.listsArray[i].listId === listId) {
            option.selected = true;
        } 
    }

    //Notes
    let toDoNotesLabel = document.createElement('label');
    toDoNotesLabel.setAttribute('for','toDoNotesInput');
    toDoNotesLabel.setAttribute('id','toDoNotesLabel');
    toDoNotesLabel.innerText = 'Notes'
    toDoInputCont.appendChild(toDoNotesLabel);
    let toDoNotesInput = document.createElement('textarea');
    toDoNotesInput.setAttribute('id','notesInput');
    toDoInputCont.appendChild(toDoNotesInput);

    //Checklist Button Container
    let checklistBtnCont = document.createElement('div');
    checklistBtnCont.setAttribute('id','checklistBtnCont');
    toDoInputCont.appendChild(checklistBtnCont);
    
    //Checklist Button
    let checkListBtn = document.createElement('button');
    checkListBtn.setAttribute('data-btn','checklist');
    checkListBtn.setAttribute('data-listid', listId);
    checkListBtn.setAttribute('id','checklistBtn');
    checkListBtn.innerText = 'Add Checklist';
    checklistBtnCont.appendChild(checkListBtn);
    
    //Checklist Container
    let checklistCont = document.createElement('div');
    checklistCont.setAttribute('id','checklistInputCont');
    toDoInputCont.appendChild(checklistCont);

    //Button Container 
    let newToDoInputBtnCont = document.createElement('div');
    newToDoInputBtnCont.setAttribute('id','newToDoInputCont');
    toDoInputCont.appendChild(newToDoInputBtnCont);
    //Cancel Button
    let cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'cancel';
    cancelBtn.setAttribute('data-btn','cancel');
    newToDoInputBtnCont.appendChild(cancelBtn);
    //Save Button
    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = 'save';
    saveBtn.setAttribute('data-btn', 'saveToDo');
    saveBtn.setAttribute('data-listid', listId);
    newToDoInputBtnCont.appendChild(saveBtn);
}

const toDoCheckListPrint = () => {
    let checklistCont = document.querySelector('#checklistInputCont');
    let checklistBtn = document.querySelector('#checklistBtn');

    if (checklistCont.hasChildNodes()) {
        checklistCont.removeChild(checklistCont.firstChild);
        checklistCont.removeChild(checklistCont.firstChild);
        checklistBtn.innerText = 'Add Checklist'; 
    } else {
        //Change Button Text
        checklistBtn.innerText = 'Remove Checklist';

        //Checklist Input Container
        let checklistInputCont = document.createElement('div');
        checklistInputCont.setAttribute('id','checklistInputContCont');
        checklistCont.appendChild(checklistInputCont);
        
        //Checklist Label 
        let checklistLabel = document.createElement('label');
        checklistLabel.htmlFor = 'checklistInput';
        checklistLabel.id = 'checklistInputLabel';
        checklistLabel.innerText = 'Checklist';
        checklistInputCont.appendChild(checklistLabel);

        //Checklist Item Input
        let checkListInput = document.createElement('input');
        checkListInput.setAttribute('id','checklistInput');
        checkListInput.setAttribute('type','text');
        checklistInputCont.appendChild(checkListInput);
        
        //Add/Subtract Container
        let addSubtractCont = document.createElement('div');
        addSubtractCont.setAttribute('id','addSubtractCont');
        checklistCont.appendChild(addSubtractCont);

        //Add Button
        let addBtn = document.createElement('span');
        addBtn.setAttribute('id','addChecklistItem');
        addBtn.innerText = '+';
        addBtn.onclick = extraChecklist;
        addSubtractCont.appendChild(addBtn);
        
        //Subtract Button
        let subtractBtn = document.createElement('span');
        subtractBtn.setAttribute('id','subtractChecklistItem');
        subtractBtn.innerHTML = '&#8211';
        subtractBtn.onclick = subtractChecklist;
        addSubtractCont.appendChild(subtractBtn);

    }

}

const extraChecklist = () => {
    let checklistInputCont = document.querySelector('#checklistInputContCont');
    let newChecklistInput = document.createElement('input');
    newChecklistInput.setAttribute('id','checklistInput');
    newChecklistInput.setAttribute('type','text');
    checklistInputCont.appendChild(newChecklistInput);
}

const subtractChecklist = () => {
    let checklistInputCont = document.querySelector('#checklistInputContCont');
    if (checklistInputCont.childNodes.length === 2) {
        return
    } else {
        checklistInputCont.removeChild(checklistInputCont.lastChild);
    }
}

const editToDoCheckListPrint = (toDoIndex) => {
    let checklistCont = document.querySelector('#checklistInputCont');
    let checklistBtn = document.querySelector('#checklistBtn')

    if (checklistCont.hasChildNodes()) {
        checklistCont.removeChild(checklistCont.firstChild);
        checklistCont.removeChild(checklistCont.firstChild); 
        checklistBtn.innerText = 'Add Checklist';
    } else {
        checklistBtn.innerText = 'Remove Checklist';    

        //Checklist Input Container
        let checklistInputCont = document.createElement('div');
        checklistInputCont.setAttribute('id','checklistInputContCont');
        checklistCont.appendChild(checklistInputCont);

        //Checklist Label 
        let checklistLabel = document.createElement('label');
        checklistLabel.htmlFor = 'checklistInput';
        checklistLabel.id = 'checklistInputLabel';
        checklistLabel.innerText = 'Checklist';
        checklistInputCont.appendChild(checklistLabel);

        //Checklist Item Input
        let allChecklistItems = listData.selectedToDo[toDoIndex].checklist;
        console.log(allChecklistItems);
        for (let i =0; i< allChecklistItems.length; i++) {
            let checkListInput = document.createElement('input');
            checkListInput.setAttribute('id','checklistInput');
            checkListInput.setAttribute('type','text');
            checkListInput.setAttribute('value',listData.selectedToDo[toDoIndex].checklist[i].text)
            checklistInputCont.appendChild(checkListInput);
        }
        
        //Add/Subtract Container
        let addSubtractCont = document.createElement('div');
        addSubtractCont.setAttribute('id','addSubtractCont');
        checklistCont.appendChild(addSubtractCont);       
        
        //Add Button
        let addBtn = document.createElement('span');
        addBtn.setAttribute('id','addChecklistItem');
        addBtn.innerText = '+';
        addBtn.onclick = extraChecklist;
        addSubtractCont.appendChild(addBtn);

        //Subtract Button
        let subtractBtn = document.createElement('span');
        subtractBtn.setAttribute('id','subtractChecklistItem');
        subtractBtn.innerText = '-';
        subtractBtn.onclick = subtractChecklist;
        addSubtractCont.appendChild(subtractBtn);

    }

}

const editToDoInput = (toDoId,toDoIndex,listId) => {
    console.log(toDoIndex);
    const modalContent = document.querySelector('#modalContent');  
    
    if (modalContent.hasChildNodes()){
        modalContent.removeChild(modalContent.firstChild);
    }    
    
    const myModal = document.querySelector('#myModal');
    myModal.style.display = 'block';

    //Input Container
    const toDoCont = document.querySelector('#toDoCont');
    let toDoInputCont = document.createElement('div');
    toDoInputCont.setAttribute('id','toDoInputCont');
    modalContent.appendChild(toDoInputCont);

    //Header
    let listInputHeader = document.createElement('span');
    listInputHeader.setAttribute('id','toDoInputHeader');
    listInputHeader.innerText = 'Add To Do'
    toDoInputCont.appendChild(listInputHeader);

    //To Do Input
    let toDoLabel = document.createElement('label');
    toDoLabel.setAttribute('id','newToDoLabel');
    toDoLabel.setAttribute('for','toDoInput');
    toDoLabel.innerText = 'Title'
    toDoInputCont.appendChild(toDoLabel);
    let toDoInput = document.createElement('INPUT');
    toDoInput.setAttribute('id', 'toDoInput');
    toDoInput.setAttribute('type', 'text');
    toDoInput.setAttribute('value', listData.selectedToDo[toDoIndex].text);
    toDoInputCont.appendChild(toDoInput);

    //Date
    let toDoDateLabel = document.createElement('label');
    toDoDateLabel.setAttribute('id','newToDoDateLabel');
    toDoDateLabel.setAttribute('for','toDoDate');
    toDoDateLabel.innerText = 'Due Date';
    toDoInputCont.appendChild(toDoDateLabel);

    //Date Container
    let dateCont = document.createElement('div');
    dateCont.id = 'dateInputCont';
    toDoInputCont.appendChild(dateCont)
    let date = document.createElement('INPUT');
    date.setAttribute('id', 'toDoDate');
    date.setAttribute('type', 'date');
    let dateFormat = format(new Date(listData.selectedToDo[toDoIndex].date), 'yyyy-MM-dd');
    date.setAttribute('value',dateFormat);
    dateCont.appendChild(date);

    //Priority Container 
    let priorityInputCont = document.createElement('div');
    priorityInputCont.setAttribute('id','priorityInputCont');
    toDoInputCont.appendChild(priorityInputCont);

    //Priority
    let label = document.createElement('label');
    label.setAttribute('for','toDoPriority');
    label.setAttribute('id','priorityInputLabel');
    label.innerHTML = 'Priority';
    priorityInputCont.appendChild(label);
    let priority =document.createElement('INPUT');
    priority.setAttribute('id', 'toDoPriority');
    priority.setAttribute('type', 'checkbox');
    if (listData.selectedToDo[toDoIndex].priority == true) {
        priority.checked = true;
    }
    priorityInputCont.appendChild(priority);

    //List
    let toDoListInputLabel = document.createElement('label');
    toDoListInputLabel.setAttribute('for','toDoListInput');
    toDoListInputLabel.setAttribute('id','toDoListInputLabel');
    toDoListInputLabel.innerText = 'List';
    toDoInputCont.appendChild(toDoListInputLabel);

    //List Select Contianer 
    let listSelectCont = document.createElement('div');
    listSelectCont.id = 'listSelectCont';
    toDoInputCont.appendChild(listSelectCont);

    let toDoListInput = document.createElement('select');
    toDoListInput.setAttribute('id','toDoListInput');
    listSelectCont.appendChild(toDoListInput);
    for (let i = 0; i<listData.listsArray.length; i++) {
        let option = document.createElement('option');
        option.setAttribute('value',listData.listsArray[i].listId);
        option.setAttribute('id','listOptions');
        option.innerText = listData.listsArray[i].title;
        toDoListInput.appendChild(option);
        if (listData.listsArray[i].listId === listId) {
            option.selected = true;
        } 
    }

    //Notes
    let toDoNotesLabel = document.createElement('label');
    toDoNotesLabel.setAttribute('for','toDoNotesInput');
    toDoNotesLabel.setAttribute('id','toDoNotesLabel');
    toDoNotesLabel.innerText = 'Notes'
    toDoInputCont.appendChild(toDoNotesLabel);
    let toDoNotesInput = document.createElement('textarea');
    toDoNotesInput.setAttribute('id','notesInput');
    toDoNotesInput.setAttribute('value', listData.selectedToDo[toDoIndex].notes)
    toDoInputCont.appendChild(toDoNotesInput);

    //Checklist Button Container
    let checklistBtnCont = document.createElement('div');
    checklistBtnCont.setAttribute('id','checklistBtnCont');
    toDoInputCont.appendChild(checklistBtnCont);
    
    //Checklist Button
    let checkListBtn = document.createElement('button');
    checkListBtn.setAttribute('data-btn','checklist');
    checkListBtn.setAttribute('data-listid', listId);
    checkListBtn.setAttribute('id','checklistBtn');
    checkListBtn.innerText = 'Add Checklist';
    checklistBtnCont.appendChild(checkListBtn);

    //Checklist Container
    let checklistCont = document.createElement('div');
    checklistCont.setAttribute('id','checklistInputCont');
    toDoInputCont.appendChild(checklistCont);

    let checklist = listData.selectedToDo[toDoIndex].checklist
    if (checklist.length > 0) {
        editToDoCheckListPrint(toDoIndex);
    }

    //Button Container 
    let newToDoInputBtnCont = document.createElement('div');
    newToDoInputBtnCont.setAttribute('id','newToDoInputCont');
    toDoInputCont.appendChild(newToDoInputBtnCont);
    //Cancel Button
    let cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'cancel';
    cancelBtn.setAttribute('data-btn','cancel');
    newToDoInputBtnCont.appendChild(cancelBtn);
    //Save Button
    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = 'save';
    saveBtn.setAttribute('data-btn', 'saveEditToDo');
    saveBtn.setAttribute('data-listid', listId);
    saveBtn.setAttribute('data-id', toDoId);
    newToDoInputBtnCont.appendChild(saveBtn);
}

export { newToDoInput, toDoCheckListPrint, editToDoInput};