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
    let toDoInputCont = document.createElement('P');
    toDoInputCont.setAttribute('id','toDoInputCont');
    modalContent.appendChild(toDoInputCont);
        
    //Close Button
    let modalClose = document.createElement('span');
    modalClose.setAttribute('id','modalClose');
    modalClose.setAttribute('class','button');
    modalClose.setAttribute('data-btn','cancel');
    modalClose.innerHTML = '&times;';
    toDoInputCont.appendChild(modalClose);
    
    //Header
    let listInputHeader = document.createElement('span');
    listInputHeader.setAttribute('id','toDoInputHeader');
    listInputHeader.innerText = 'Add To Do'
    toDoInputCont.appendChild(listInputHeader);

    //To Do Input
    let toDoLabel = document.createElement('label');
    toDoLabel.setAttribute('id','newToDoLabel');
    toDoLabel.setAttribute('for','toDoInput');
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
    let date = document.createElement('INPUT');
    date.setAttribute('id', 'toDoDate');
    date.setAttribute('type', 'date');
    toDoInputCont.appendChild(date);

    //Priority
    let label = document.createElement('label');
    label.setAttribute('for','toDoPriority');
    label.innerHTML = 'Priority?';
    toDoInputCont.appendChild(label);
    let priority =document.createElement('INPUT');
    priority.setAttribute('id', 'toDoPriority');
    priority.setAttribute('type', 'checkbox');
    toDoInputCont.appendChild(priority);

    //List
    let toDoListInputLabel = document.createElement('label');
    toDoListInputLabel.setAttribute('for','toDoListInput');
    toDoListInputLabel.setAttribute('id','toDolistInputLabel');
    toDoListInputLabel.innerText = 'List';
    toDoInputCont.appendChild(toDoListInputLabel);
    let toDoListInput = document.createElement('select');
    toDoListInput.setAttribute('id','toDoListInput');
    toDoInputCont.appendChild(toDoListInput);
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
    let toDoNotesInput = document.createElement('input');
    toDoNotesInput.setAttribute('id','notesInput');
    toDoNotesInput.setAttribute('type','text');
    toDoInputCont.appendChild(toDoNotesInput);
    
    //Checklist Button
    let checkListBtn = document.createElement('button');
    checkListBtn.setAttribute('data-btn','checklist');
    checkListBtn.setAttribute('data-listid', listId);
    checkListBtn.setAttribute('id','checkListBtn');
    checkListBtn.innerText = 'Add Checklist';
    toDoInputCont.appendChild(checkListBtn);
    
    //Checklist Container
    let checklistCont = document.createElement('div');
    checklistCont.setAttribute('id','checklistCont');
    toDoInputCont.appendChild(checklistCont);

    //Save Button
    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = 'save';
    saveBtn.setAttribute('data-btn', 'saveToDo');
    saveBtn.setAttribute('data-listid', listId);
    toDoInputCont.appendChild(saveBtn);
}

const toDoCheckListPrint = () => {
    let checklistCont = document.querySelector('#checklistCont');

    if (checklistCont.hasChildNodes()) {
        checklistCont.removeChild(checklistCont.firstChild);
        checklistCont.removeChild(checklistCont.firstChild); 
    } else {
        
        //Checklist Input Container
        let checklistInputCont = document.createElement('div');
        checklistInputCont.setAttribute('id','checklistInputCont');
        checklistCont.appendChild(checklistInputCont);

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
        subtractBtn.innerText = '-';
        subtractBtn.onclick = subtractChecklist;
        addSubtractCont.appendChild(subtractBtn);

    }

}

const extraChecklist = () => {
    let checklistInputCont = document.querySelector('#checklistInputCont');
    let newChecklistInput = document.createElement('input');
    newChecklistInput.setAttribute('id','checklistInput');
    newChecklistInput.setAttribute('type','text');
    checklistInputCont.appendChild(newChecklistInput);
}

const subtractChecklist = () => {
    let checklistInputCont = document.querySelector('#checklistInputCont');
    if (checklistInputCont.childNodes.length === 1) {
        return
    } else {
        checklistInputCont.removeChild(checklistInputCont.lastChild);
    }
}

const editToDoCheckListPrint = (toDoIndex) => {
    let checklistCont = document.querySelector('#checklistCont');

    if (checklistCont.hasChildNodes()) {
        checklistCont.removeChild(checklistCont.firstChild);
        checklistCont.removeChild(checklistCont.firstChild); 
    } else {
            
        //Checklist Input Container
        let checklistInputCont = document.createElement('div');
        checklistInputCont.setAttribute('id','checklistInputCont');
        checklistCont.appendChild(checklistInputCont);

        //Checklist Item Input
        let allChecklistItems = listData.toDoArray[toDoIndex].checklist;
        console.log(allChecklistItems);
        for (let i =0; i< allChecklistItems.length; i++) {
            let checkListInput = document.createElement('input');
            checkListInput.setAttribute('id','checklistInput');
            checkListInput.setAttribute('type','text');
            checkListInput.setAttribute('value',listData.toDoArray[toDoIndex].checklist[i].text)
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
    let toDoInputCont = document.createElement('P');
    toDoInputCont.setAttribute('id','toDoInputCont');
    modalContent.appendChild(toDoInputCont);
        
    //Close Button
    let modalClose = document.createElement('span');
    modalClose.setAttribute('id','modalClose');
    modalClose.setAttribute('class','button');
    modalClose.setAttribute('data-btn','cancel');
    modalClose.innerHTML = '&times;';
    toDoInputCont.appendChild(modalClose);
    
    //Header
    let listInputHeader = document.createElement('span');
    listInputHeader.setAttribute('id','toDoInputHeader');
    listInputHeader.innerText = 'Add To Do'
    toDoInputCont.appendChild(listInputHeader);

    //To Do Input
    let toDoLabel = document.createElement('label');
    toDoLabel.setAttribute('id','newToDoLabel');
    toDoLabel.setAttribute('for','toDoInput');
    toDoInputCont.appendChild(toDoLabel);
    let toDoInput = document.createElement('INPUT');
    toDoInput.setAttribute('id', 'toDoInput');
    toDoInput.setAttribute('type', 'text');
    toDoInput.setAttribute('value', listData.toDoArray[toDoIndex].text);
    toDoInputCont.appendChild(toDoInput);

    //Date
    let toDoDateLabel = document.createElement('label');
    toDoDateLabel.setAttribute('id','newToDoDateLabel');
    toDoDateLabel.setAttribute('for','toDoDate');
    toDoDateLabel.innerText = 'Due Date';
    toDoInputCont.appendChild(toDoDateLabel);
    let date = document.createElement('INPUT');
    date.setAttribute('id', 'toDoDate');
    date.setAttribute('type', 'date');
    let dateFormat = format(new Date(listData.toDoArray[toDoIndex].date), 'yyyy-MM-dd');
    date.setAttribute('value',dateFormat);
    toDoInputCont.appendChild(date);

    //Priority
    let label = document.createElement('label');
    label.setAttribute('for','toDoPriority');
    label.innerHTML = 'Priority?';
    toDoInputCont.appendChild(label);
    let priority =document.createElement('INPUT');
    priority.setAttribute('id', 'toDoPriority');
    priority.setAttribute('type', 'checkbox');
    if (listData.toDoArray[toDoIndex].priority == true) {
        priority.checked = true;
    }
    toDoInputCont.appendChild(priority);

    //List
    let toDoListInputLabel = document.createElement('label');
    toDoListInputLabel.setAttribute('for','toDoListInput');
    toDoListInputLabel.setAttribute('id','toDolistInputLabel');
    toDoListInputLabel.innerText = 'List';
    toDoInputCont.appendChild(toDoListInputLabel);
    let toDoListInput = document.createElement('select');
    toDoListInput.setAttribute('id','toDoListInput');
    toDoInputCont.appendChild(toDoListInput);
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
    let toDoNotesInput = document.createElement('input');
    toDoNotesInput.setAttribute('id','notesInput');
    toDoNotesInput.setAttribute('type','text');
    toDoNotesInput.setAttribute('value', listData.toDoArray[toDoIndex].notes)
    toDoInputCont.appendChild(toDoNotesInput);
    
    //Checklist Button
    let checkListBtn = document.createElement('button');
    checkListBtn.setAttribute('data-btn','checklist');
    checkListBtn.setAttribute('data-listid', listId);
    checkListBtn.setAttribute('id','checkListBtn');
    checkListBtn.innerText = 'Add Checklist';
    toDoInputCont.appendChild(checkListBtn);

    //Checklist Container
    let checklistCont = document.createElement('div');
    checklistCont.setAttribute('id','checklistCont');
    toDoInputCont.appendChild(checklistCont);

    let checklist = listData.toDoArray[toDoIndex].checklist
    if (checklist.length > 0) {
        editToDoCheckListPrint(toDoIndex);
    }
    //Save Button
    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = 'save';
    saveBtn.setAttribute('data-btn', 'saveEditToDo');
    saveBtn.setAttribute('data-listid', listId);
    saveBtn.setAttribute('data-id', toDoId);
    toDoInputCont.appendChild(saveBtn);
}

export { newToDoInput, toDoCheckListPrint, editToDoInput};