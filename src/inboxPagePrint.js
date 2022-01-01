import { listData } from './newProjectData';
import { checkBoxValid } from './checkBoxEvent';
import { newListPrintCont } from './newListPrint';
import { titlePage } from './titlePagePrint';
import { editToDoInput } from './editToDoInput';
import { format, parseISO } from 'date-fns';

const toDoPagePrint = () => {
        for (let i = 0; i < listData.selectedToDo.length; i++) {
            let individualToDoCont = document.createElement('div');
            individualToDoCont.setAttribute('id','individualToDoCont');
            toDoCont.appendChild(individualToDoCont);
            let firstLineToDoCont = document.createElement('div');
            firstLineToDoCont.setAttribute('id','firstLineToDoCont');
            individualToDoCont.appendChild(firstLineToDoCont);
    
            //Title and Warning Container 
            let titleWarningCont = document.createElement('div');
            titleWarningCont.id = 'titleWarningCont';
            firstLineToDoCont.appendChild(titleWarningCont);
    
            //Title Container
            let titleTextCont = document.createElement('div');
            titleTextCont.setAttribute('id','titleTextCont');
            titleWarningCont.appendChild(titleTextCont);
            let text = document.createElement('span');
            text.setAttribute('id',`toDoText`);
            text.setAttribute('class','button');
            text.setAttribute('data-btn', 'toDoDetails');
            text.setAttribute('data-id', listData.selectedToDo[i].id);
            text.setAttribute('data-listid', listData.selectedToDo[i].listId);
            text.innerHTML = listData.selectedToDo[i].text;
            titleTextCont.appendChild(text);
            let dropDownSymbol = document.createElement('span');
            dropDownSymbol.setAttribute('id','dropDownSymbol');
            dropDownSymbol.innerHTML = '&#9013;';
            titleTextCont.appendChild(dropDownSymbol);
            let toDo = document.createElement('INPUT');
            toDo.setAttribute('id','toDo');
            toDo.setAttribute('data-id', listData.selectedToDo[i].id);
            toDo.setAttribute('data-listid', listData.selectedToDo[i].listId);
            toDo.setAttribute('type','checkbox')
            firstLineToDoCont.prepend(toDo);
            if (listData.selectedToDo[i].status == 'complete') {
                toDo.checked = true;
            } else {
                toDo.checked = false;
            }
    
            //Warning Container
            let dueDateWarningCont = document.createElement('div');
            dueDateWarningCont.setAttribute('id','dueDateWarningCont');
            titleWarningCont.appendChild(dueDateWarningCont);
    
            //Priority Label
            if (listData.selectedToDo[i].priority) {
                let priorityLabel = document.createElement('span');
                priorityLabel.setAttribute('id','priorityLabel');
                priorityLabel.innerText = 'Priority';
                dueDateWarningCont.appendChild(priorityLabel);
            }
            //Due Date
            let dueDateWarning = document.createElement('span');
            dueDateWarningCont.appendChild(dueDateWarning);
            switch (true) {
                case listData.selectedToDo[i].daysTilDue < 0:
                    dueDateWarning.innerText = 'Over Due!';
                    dueDateWarning.setAttribute('id','overDue');
                    break;
                case listData.selectedToDo[i].daysTilDue === 0:
                    dueDateWarning.innerText = 'Due Today';
                    dueDateWarning.setAttribute('id','dueToday');
                    break;
                case listData.selectedToDo[i].daysTilDue === 1:
                    dueDateWarning.innerText = 'Due Tomorrow';
                    dueDateWarning.setAttribute('id','dueTom');
                    break;
                case listData.selectedToDo[i].daysTilDue === 2:
                    dueDateWarning.innerText = 'Due in Two Days';
                    dueDateWarning.setAttribute('id','dueTwo');
                    break;
                case (listData.selectedToDo[i].daysTilDue > 2 && listData.selectedToDo[i].daysTilDue < 7):
                    dueDateWarning.innerText = 'Due This Week';
                    dueDateWarning.setAttribute('id','dueWeek');
                    break;
            }
    
            //List Label
            let listId = listData.selectedToDo[i].listId
            let listLabel = document.createElement('span');
            listLabel.setAttribute('id','listLabel')
            let listIndex = listData.findListId(listId, listData.listsArray);
            listLabel.innerText = listData.listsArray[listIndex].title;
            firstLineToDoCont.appendChild(listLabel);
    
            //List Symbol
            let listToDoSymbol = document.createElement('span');
            listToDoSymbol.setAttribute('id','listToDoSymbol');
            listToDoSymbol.style.color = listData.listsArray[listIndex].color;
            listToDoSymbol.innerHTML = '&#9679;';
            firstLineToDoCont.appendChild(listToDoSymbol);
    
            // //Edit Button
            // let editBtn = document.createElement('span');
            // editBtn.setAttribute('class','button');
            // editBtn.setAttribute('id','titleEditBtn');
            // editBtn.setAttribute('data-btn','toDoEdit');
            // editBtn.setAttribute('data-id', listData.selectedToDo[i].id);
            // editBtn.setAttribute('data-listid', listData.selectedToDo[i].listId)
            // editBtn.setAttribute('data-index', i);
            // editBtn.innerText = 'Edit';
            // firstLineToDoCont.appendChild(editBtn);
    
            // //Delete Button
            // let deleteBtn = document.createElement('span');
            // deleteBtn.innerHTML = '&times';
            // deleteBtn.setAttribute('class','button');
            // deleteBtn.setAttribute('id', 'deleteBtn');
            // deleteBtn.setAttribute('data-btn','toDoDeleteBtn')
            // deleteBtn.setAttribute('data-id', listData.selectedToDo[i].id);
            // deleteBtn.setAttribute('data-listid',listData.selectedToDo[i].listId);
            // firstLineToDoCont.appendChild(deleteBtn);
    
    
    
    
            //Drop Down Menu
            let dropDownMenu = document.createElement('div');
            dropDownMenu.className = 'dropDownMenu';
            firstLineToDoCont.appendChild(dropDownMenu);
            
    
            
            //Button
            let dropDownList = document.createElement('div');
            dropDownList.id = 'dropDownList';
            dropDownList.className = 'dropDownContent';
            dropDownMenu.appendChild(dropDownList);
            let dropDownEdit = document.createElement('span');
            dropDownEdit.id = 'dropDownEdit';
            dropDownEdit.className = 'button';
            dropDownEdit.setAttribute('data-btn','toDoEdit');
            dropDownEdit.setAttribute('data-id', listData.selectedToDo[i].id);
            dropDownEdit.setAttribute('data-listid', listData.selectedToDo[i].listId);
            dropDownEdit.innerText = 'Edit'
            dropDownList.appendChild(dropDownEdit);
            let dropDownDelete = document.createElement('span');
            dropDownDelete.id = 'dropDownEdit';
            dropDownDelete.className = 'button';
            dropDownDelete.setAttribute('data-btn','toDoDeleteBtn');
            dropDownDelete.setAttribute('data-id', listData.selectedToDo[i].id);
            dropDownDelete.setAttribute('data-listid', listData.selectedToDo[i].listId);
            dropDownDelete.innerText = 'Delete';
            dropDownList.appendChild(dropDownDelete);
            
            let dropDownMenuSymbol = document.createElement('span');
            dropDownMenuSymbol.id = 'dropDownMenuSymbol';
            dropDownMenuSymbol.className = 'button';
            dropDownMenuSymbol.setAttribute('data-btn','dropDownMenu');
            dropDownMenuSymbol.setAttribute('data-id', listData.selectedToDo[i].id);
            dropDownMenuSymbol.innerHTML = '&#x2022;&#x2022;&#x2022;';
            dropDownMenu.appendChild(dropDownMenuSymbol);
            
    
    
            //ToDo Detail Container 
            let toDoDetailCont = document.createElement('div');
            toDoDetailCont.setAttribute('id','toDoDetailCont');
            individualToDoCont.appendChild(toDoDetailCont);
    
            //Checklist
            let checklistCont = document.createElement('div');
            checklistCont.setAttribute('id','checklistCont');
            individualToDoCont.appendChild(checklistCont);
            let checklist = listData.selectedToDo[i].checklist
    
            if (checklist.length > 0) {
                for (let j = 0; j < checklist.length; j++) {
                    let individualChecklistToDo = document.createElement('div');
                    individualChecklistToDo.setAttribute('id','individualChecklistToDo');
                    checklistCont.appendChild(individualChecklistToDo);
                    let toDo = document.createElement('INPUT');
                    toDo.setAttribute('id','checklistToDo');
                    toDo.setAttribute('data-id', listData.selectedToDo[i].id);
                    toDo.setAttribute('data-checklistid',listData.selectedToDo[i].checklist[j].checklistId);
                    toDo.setAttribute('type','checkbox');
                    individualChecklistToDo.appendChild(toDo);
                    if (listData.selectedToDo[i].checklist[j].status == 'complete') {
                        toDo.checked = true;
                    } else {
                        toDo.checked = false;
                    }
                    let text = document.createElement('span');
                    text.setAttribute('id',`toDoText`);
                    console.log(listData.selectedToDo[i].checklist);
                    text.innerHTML = listData.selectedToDo[i].checklist[j].text;
                    individualChecklistToDo.appendChild(text);
                    
                }
                
            }
    
            
        }
        
        checkBoxValid();
    }

const titleWithToDoPagePrint = (title, listIdData) => {
    //Remove Children
    const content = document.querySelector('#content');
    if (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }

    //titleWith Container
    let titleWithToDoCont = document.createElement('div');
    titleWithToDoCont.setAttribute('id','TitleWithToDoCont');
    content.appendChild(titleWithToDoCont);

    //Title Contianer 
    let titleCont = document.createElement('div');
    titleCont.setAttribute('class','titleCont');
    titleCont.setAttribute('id','titleCont');
    titleWithToDoCont.appendChild(titleCont);

    //Title
    let pageTitle = document.createElement('span');
    pageTitle.setAttribute('id','title');
    pageTitle.setAttribute('class','title');
    pageTitle.innerText = title;
    titleCont.appendChild(pageTitle);

    //To Do Container
    let toDoCont = document.createElement('div');
    toDoCont.setAttribute('id', 'toDoCont');
    titleWithToDoCont.appendChild(toDoCont);

    toDoPagePrint();

    //New ToDo Button Containers
    let individualToDoContNewToDo = document.createElement('div');
    individualToDoContNewToDo.setAttribute('id','individualToDoContNewToDoBtn');
    toDoCont.appendChild(individualToDoContNewToDo)
    let newToDoButtonCont = document.createElement('div');
    newToDoButtonCont.setAttribute('id','newToDoButtonCont');
    individualToDoContNewToDo.appendChild(newToDoButtonCont);

    //New to-do Button
    let plusText = document.createElement('span');
    plusText.setAttribute('class','button');
    plusText.setAttribute('data-btn', 'newToDo');
    plusText.setAttribute('id','newToDoPlus');
    plusText.innerText = '+'
    newToDoButtonCont.appendChild(plusText);
    let btn = document.createElement('span');
    btn.setAttribute('class','button');
    btn.setAttribute('data-btn', 'newToDo');
    btn.setAttribute('id', 'newToDo')
    btn.dataset.listid = listIdData;
    btn.innerHTML = 'New To-Do';
    newToDoButtonCont.appendChild(btn);    

    // for (let i = 0; i < listData.selectedToDo.length; i++) {
    //     let individualToDoCont = document.createElement('div');
    //     individualToDoCont.setAttribute('id','individualToDoCont');
    //     toDoCont.appendChild(individualToDoCont);
    //     let firstLineToDoCont = document.createElement('div');
    //     firstLineToDoCont.setAttribute('id','firstLineToDoCont');
    //     individualToDoCont.appendChild(firstLineToDoCont);

    //     //Title and Warning Container 
    //     let titleWarningCont = document.createElement('div');
    //     titleWarningCont.id = 'titleWarningCont';
    //     firstLineToDoCont.appendChild(titleWarningCont);

    //     //Title Container
    //     let titleTextCont = document.createElement('div');
    //     titleTextCont.setAttribute('id','titleTextCont');
    //     titleWarningCont.appendChild(titleTextCont);
    //     let text = document.createElement('span');
    //     text.setAttribute('id',`toDoText`);
    //     text.setAttribute('class','button');
    //     text.setAttribute('data-btn', 'toDoDetails');
    //     text.setAttribute('data-id', listData.selectedToDo[i].id);
    //     text.setAttribute('data-listid', listData.selectedToDo[i].listId);
    //     text.innerHTML = listData.selectedToDo[i].text;
    //     titleTextCont.appendChild(text);
    //     let dropDownSymbol = document.createElement('span');
    //     dropDownSymbol.setAttribute('id','dropDownSymbol');
    //     dropDownSymbol.innerHTML = '&#9013;';
    //     titleTextCont.appendChild(dropDownSymbol);
    //     let toDo = document.createElement('INPUT');
    //     toDo.setAttribute('id','toDo');
    //     toDo.setAttribute('data-id', listData.selectedToDo[i].id);
    //     toDo.setAttribute('data-listid', listData.selectedToDo[i].listId);
    //     toDo.setAttribute('type','checkbox')
    //     firstLineToDoCont.prepend(toDo);
    //     if (listData.selectedToDo[i].status == 'complete') {
    //         toDo.checked = true;
    //     } else {
    //         toDo.checked = false;
    //     }

    //     //Warning Container
    //     let dueDateWarningCont = document.createElement('div');
    //     dueDateWarningCont.setAttribute('id','dueDateWarningCont');
    //     titleWarningCont.appendChild(dueDateWarningCont);

    //     //Priority Label
    //     if (listData.selectedToDo[i].priority) {
    //         let priorityLabel = document.createElement('span');
    //         priorityLabel.setAttribute('id','priorityLabel');
    //         priorityLabel.innerText = 'Priority';
    //         dueDateWarningCont.appendChild(priorityLabel);
    //     }
    //     //Due Date
    //     let dueDateWarning = document.createElement('span');
    //     dueDateWarningCont.appendChild(dueDateWarning);
    //     switch (true) {
    //         case listData.selectedToDo[i].daysTilDue < 0:
    //             dueDateWarning.innerText = 'Over Due!';
    //             dueDateWarning.setAttribute('id','overDue');
    //             break;
    //         case listData.selectedToDo[i].daysTilDue === 0:
    //             dueDateWarning.innerText = 'Due Today';
    //             dueDateWarning.setAttribute('id','dueToday');
    //             break;
    //         case listData.selectedToDo[i].daysTilDue === 1:
    //             dueDateWarning.innerText = 'Due Tomorrow';
    //             dueDateWarning.setAttribute('id','dueTom');
    //             break;
    //         case listData.selectedToDo[i].daysTilDue === 2:
    //             dueDateWarning.innerText = 'Due in Two Days';
    //             dueDateWarning.setAttribute('id','dueTwo');
    //             break;
    //         case (listData.selectedToDo[i].daysTilDue > 2 && listData.selectedToDo[i].daysTilDue < 7):
    //             dueDateWarning.innerText = 'Due This Week';
    //             dueDateWarning.setAttribute('id','dueWeek');
    //             break;
    //     }

    //     //List Label
    //     let listId = listData.selectedToDo[i].listId
    //     let listLabel = document.createElement('span');
    //     listLabel.setAttribute('id','listLabel')
    //     let listIndex = listData.findListId(listId, listData.listsArray);
    //     listLabel.innerText = listData.listsArray[listIndex].title;
    //     firstLineToDoCont.appendChild(listLabel);

    //     //List Symbol
    //     let listToDoSymbol = document.createElement('span');
    //     listToDoSymbol.setAttribute('id','listToDoSymbol');
    //     listToDoSymbol.style.color = listData.listsArray[listIndex].color;
    //     listToDoSymbol.innerHTML = '&#9679;';
    //     firstLineToDoCont.appendChild(listToDoSymbol);

    //     // //Edit Button
    //     // let editBtn = document.createElement('span');
    //     // editBtn.setAttribute('class','button');
    //     // editBtn.setAttribute('id','titleEditBtn');
    //     // editBtn.setAttribute('data-btn','toDoEdit');
    //     // editBtn.setAttribute('data-id', listData.selectedToDo[i].id);
    //     // editBtn.setAttribute('data-listid', listData.selectedToDo[i].listId)
    //     // editBtn.setAttribute('data-index', i);
    //     // editBtn.innerText = 'Edit';
    //     // firstLineToDoCont.appendChild(editBtn);

    //     // //Delete Button
    //     // let deleteBtn = document.createElement('span');
    //     // deleteBtn.innerHTML = '&times';
    //     // deleteBtn.setAttribute('class','button');
    //     // deleteBtn.setAttribute('id', 'deleteBtn');
    //     // deleteBtn.setAttribute('data-btn','toDoDeleteBtn')
    //     // deleteBtn.setAttribute('data-id', listData.selectedToDo[i].id);
    //     // deleteBtn.setAttribute('data-listid',listData.selectedToDo[i].listId);
    //     // firstLineToDoCont.appendChild(deleteBtn);




    //     //Drop Down Menu
    //     let dropDownMenu = document.createElement('div');
    //     dropDownMenu.className = 'dropDownMenu';
    //     firstLineToDoCont.appendChild(dropDownMenu);
        

        
    //     //Button
    //     let dropDownList = document.createElement('div');
    //     dropDownList.id = 'dropDownList';
    //     dropDownList.className = 'dropDownContent';
    //     dropDownMenu.appendChild(dropDownList);
    //     let dropDownEdit = document.createElement('span');
    //     dropDownEdit.id = 'dropDownEdit';
    //     dropDownEdit.className = 'button';
    //     dropDownEdit.setAttribute('data-btn','toDoEdit');
    //     dropDownEdit.setAttribute('data-id', listData.selectedToDo[i].id);
    //     dropDownEdit.setAttribute('data-listid', listData.selectedToDo[i].listId);
    //     dropDownEdit.innerText = 'Edit'
    //     dropDownList.appendChild(dropDownEdit);
    //     let dropDownDelete = document.createElement('span');
    //     dropDownDelete.id = 'dropDownEdit';
    //     dropDownDelete.className = 'button';
    //     dropDownDelete.setAttribute('data-btn','toDoDeleteBtn');
    //     dropDownDelete.setAttribute('data-id', listData.selectedToDo[i].id);
    //     dropDownDelete.setAttribute('data-listid', listData.selectedToDo[i].listId);
    //     dropDownDelete.innerText = 'Delete';
    //     dropDownList.appendChild(dropDownDelete);
        
    //     let dropDownMenuSymbol = document.createElement('span');
    //     dropDownMenuSymbol.id = 'dropDownMenuSymbol';
    //     dropDownMenuSymbol.className = 'button';
    //     dropDownMenuSymbol.setAttribute('data-btn','dropDownMenu');
    //     dropDownMenuSymbol.setAttribute('data-id', listData.selectedToDo[i].id);
    //     dropDownMenuSymbol.innerHTML = '&#x2022;&#x2022;&#x2022;';
    //     dropDownMenu.appendChild(dropDownMenuSymbol);
        


    //     //ToDo Detail Container 
    //     let toDoDetailCont = document.createElement('div');
    //     toDoDetailCont.setAttribute('id','toDoDetailCont');
    //     individualToDoCont.appendChild(toDoDetailCont);

    //     //Checklist
    //     let checklistCont = document.createElement('div');
    //     checklistCont.setAttribute('id','checklistCont');
    //     individualToDoCont.appendChild(checklistCont);
    //     let checklist = listData.selectedToDo[i].checklist

    //     if (checklist.length > 0) {
    //         for (let j = 0; j < checklist.length; j++) {
    //             let individualChecklistToDo = document.createElement('div');
    //             individualChecklistToDo.setAttribute('id','individualChecklistToDo');
    //             checklistCont.appendChild(individualChecklistToDo);
    //             let toDo = document.createElement('INPUT');
    //             toDo.setAttribute('id','checklistToDo');
    //             toDo.setAttribute('data-id', listData.selectedToDo[i].id);
    //             toDo.setAttribute('data-checklistid',listData.selectedToDo[i].checklist[j].checklistId);
    //             toDo.setAttribute('type','checkbox');
    //             individualChecklistToDo.appendChild(toDo);
    //             if (listData.selectedToDo[i].checklist[j].status == 'complete') {
    //                 toDo.checked = true;
    //             } else {
    //                 toDo.checked = false;
    //             }
    //             let text = document.createElement('span');
    //             text.setAttribute('id',`toDoText`);
    //             console.log(listData.selectedToDo[i].checklist);
    //             text.innerHTML = listData.selectedToDo[i].checklist[j].text;
    //             individualChecklistToDo.appendChild(text);
                
    //         }
            
    //     }

        
    // }
    // //New ToDo Button Containers
    // let individualToDoContNewToDo = document.createElement('div');
    // individualToDoContNewToDo.setAttribute('id','individualToDoContNewToDoBtn');
    // toDoCont.appendChild(individualToDoContNewToDo)
    // let newToDoButtonCont = document.createElement('div');
    // newToDoButtonCont.setAttribute('id','newToDoButtonCont');
    // individualToDoContNewToDo.appendChild(newToDoButtonCont);

    // //New to-do Button
    // let plusText = document.createElement('span');
    // plusText.setAttribute('class','button');
    // plusText.setAttribute('data-btn', 'newToDo');
    // plusText.setAttribute('id','newToDoPlus');
    // plusText.innerText = '+'
    // newToDoButtonCont.appendChild(plusText);
    // let btn = document.createElement('span');
    // btn.setAttribute('class','button');
    // btn.setAttribute('data-btn', 'newToDo');
    // btn.setAttribute('id', 'newToDo');
    // btn.innerHTML = 'New To-Do';
    // newToDoButtonCont.appendChild(btn);    


    // checkBoxValid();
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownMenu(listId, arr) {
    let listIndex = listData.findId(listId, arr);
    let dropDownListNode = document.querySelectorAll(".dropDownContent");
    console.log(dropDownListNode.length);
    for (let i = 0; i<dropDownListNode.length; i++) {
        dropDownListNode[i].style.display = 'none';
    }
    console.log(dropDownListNode);
    dropDownListNode[listIndex].style.display = 'flex';
    
    window.onclick = function(event) {
    if (!event.target.matches('#dropDownMenuSymbol')) {
        dropDownListNode[listIndex].style.display = 'none';
    }
  }
}

function listDropDownMenu() {
    let dropDownList = document.querySelector(".listDropDownContent");
    dropDownList.style.display = 'flex';
    
    window.onclick = function(event) {
    if (!event.target.matches('#dropDownMenuSymbol')) {
        dropDownList.style.display = 'none';
    }
  }
}
  
  // Close the dropdown menu if the user clicks outside of it
  

const inboxDetailPrint = (toDoIndex) => {
    const detailCont = document.querySelectorAll('#toDoDetailCont');
    const dropDownSymbol = document.querySelectorAll('#dropDownSymbol');
    if (detailCont[toDoIndex].hasChildNodes()) {
        detailCont[toDoIndex].removeChild(detailCont[toDoIndex].firstChild);
        dropDownSymbol[toDoIndex].style.transform = 'rotate(90deg)';
    } else {
        dropDownSymbol[toDoIndex].style.transform = 'rotate(0deg)';

        //Top Container
        let allDetails = document.createElement('div');
        allDetails.setAttribute('id','allDetails');    
        detailCont[toDoIndex].appendChild(allDetails);

        //All Date Info Container
        let allDateDetailCont = document.createElement('div');
        allDateDetailCont.setAttribute('id','allDateDetailCont');
        allDetails.appendChild(allDateDetailCont);

        //Due Date Container
        let dateDetailCont = document.createElement('div');
        dateDetailCont.setAttribute('id','dateDetailCont');
        allDateDetailCont.appendChild(dateDetailCont)
        let dateDetailLabel = document.createElement('span');
        dateDetailLabel.setAttribute('id','dateDetailLabel');
        dateDetailLabel.innerText = 'Due Date';
        dateDetailCont.appendChild(dateDetailLabel);
        let dateDetail = document.createElement('span');
        dateDetail.setAttribute('id','dateDetail');
        let dateFormat = format(new Date(listData.selectedToDo[toDoIndex].date), 'eee MMM d yyyy');
        dateDetail.innerText = dateFormat;
        dateDetailCont.appendChild(dateDetail);

        //Days Until Due Container
        let daysDueCont = document.createElement('div');
        daysDueCont.setAttribute('id','daysDueCont');
        allDateDetailCont.appendChild(daysDueCont);
        let daysUntilDueLabel = document.createElement('span');
        daysUntilDueLabel.setAttribute('id','daysUntilDueLabel');
        daysUntilDueLabel.innerText = 'Days Until Due';
        daysDueCont.appendChild(daysUntilDueLabel);
        let daysUntilDue = document.createElement('span');
        daysUntilDue.setAttribute('id','daysUntilDue');
        daysUntilDue.innerText = listData.selectedToDo[toDoIndex].daysTilDue;
        daysDueCont.appendChild(daysUntilDue);

        //Notes Container
        let notesCont = document.createElement('div');
        notesCont.setAttribute('id','notesCont');
        allDetails.appendChild(notesCont);
        let notesLabel = document.createElement('notesLabel');
        notesLabel.setAttribute('id','notesLabel');
        notesLabel.innerText = 'Notes';
        notesCont.appendChild(notesLabel);
        let notesDetail = document.createElement('span');
        notesDetail.setAttribute('id','notesDetail');
        notesDetail.innerText = listData.selectedToDo[toDoIndex].notes;
        notesCont.appendChild(notesDetail);
    }
}

const listDetailPrint = (toDoId) => {
    const toDoIndex = listData.findId(toDoId, listData.selectedToDo);
    const detailCont = document.querySelectorAll('#toDoDetailCont');
    const dropDownSymbol = document.querySelectorAll('#dropDownSymbol');
    if (detailCont[toDoIndex].hasChildNodes()) {
        detailCont[toDoIndex].removeChild(detailCont[toDoIndex].firstChild);
        dropDownSymbol[toDoIndex].style.transform = 'rotate(90deg)';
    } else {
        dropDownSymbol[toDoIndex].style.transform = 'rotate(0deg)';

        //Top Container
        let allDetails = document.createElement('div');
        allDetails.setAttribute('id','allDetails');    
        detailCont[toDoIndex].appendChild(allDetails);

        //All Date Info Container
        let allDateDetailCont = document.createElement('div');
        allDateDetailCont.setAttribute('id','allDateDetailCont');
        allDetails.appendChild(allDateDetailCont);

        //Due Date Container
        let dateDetailCont = document.createElement('div');
        dateDetailCont.setAttribute('id','dateDetailCont');
        allDateDetailCont.appendChild(dateDetailCont)
        let dateDetailLabel = document.createElement('span');
        dateDetailLabel.setAttribute('id','dateDetailLabel');
        dateDetailLabel.innerText = 'Due Date';
        dateDetailCont.appendChild(dateDetailLabel);
        let dateDetail = document.createElement('span');
        dateDetail.setAttribute('id','dateDetail');
        let dateFormat = format(new Date(listData.selectedToDo[toDoIndex].date), 'eee MMM d yyyy');
        dateDetail.innerText = dateFormat;
        dateDetailCont.appendChild(dateDetail);

        //Days Until Due Container
        let daysDueCont = document.createElement('div');
        daysDueCont.setAttribute('id','daysDueCont');
        allDateDetailCont.appendChild(daysDueCont);
        let daysUntilDueLabel = document.createElement('span');
        daysUntilDueLabel.setAttribute('id','daysUntilDueLabel');
        daysUntilDueLabel.innerText = 'Days Until Due';
        daysDueCont.appendChild(daysUntilDueLabel);
        let daysUntilDue = document.createElement('span');
        daysUntilDue.setAttribute('id','daysUntilDue');
        daysUntilDue.innerText = listData.selectedToDo[toDoIndex].daysTilDue;
        daysDueCont.appendChild(daysUntilDue);

        //Notes Container
        let notesCont = document.createElement('div');
        notesCont.setAttribute('id','notesCont');
        allDetails.appendChild(notesCont);
        let notesLabel = document.createElement('notesLabel');
        notesLabel.setAttribute('id','notesLabel');
        notesLabel.innerText = 'Notes';
        notesCont.appendChild(notesLabel);
        let notesDetail = document.createElement('span');
        notesDetail.setAttribute('id','notesDetail');
        notesDetail.innerText = listData.selectedToDo[toDoIndex].notes;
        notesCont.appendChild(notesDetail);
    }
}

const inboxEditPagePrint = (toDoId) => {
    //Remove Children
    const content = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(content);

    let toDoCont = document.createElement('div');
    toDoCont.setAttribute('id', 'toDoCont');
    content.appendChild(toDoCont);

    for (let i = 0; i < listData.selectedToDo.length; i++) {
        
        if (listData.selectedToDo[i].id === toDoId) {
            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'delete';
            deleteBtn.setAttribute('id', 'deleteBtn');
            deleteBtn.setAttribute('data-btn','inboxToDoDeleteBtn')
            deleteBtn.setAttribute('data-id', toDoId);
            toDoCont.appendChild(deleteBtn);

            //To Do Input
            let toDoInput = document.createElement('INPUT');
            toDoInput.setAttribute('id', 'editToDoInput');
            toDoInput.setAttribute('type', 'text');
            toDoInput.setAttribute('value', listData.selectedToDo[i].text);
            toDoCont.appendChild(toDoInput);

            //Date
            let date = document.createElement('INPUT');
            date.setAttribute('id', 'toDoDate');
            date.setAttribute('type', 'date');
            let dateFormat = format(new Date(listData.selectedToDo[i].date), 'yyyy-MM-dd');
            console.log(dateFormat);
            date.setAttribute('value', dateFormat);
            toDoCont.appendChild(date);

            //Priority
            let label = document.createElement('label');
            label.setAttribute('id','labeltoDoPriority');
            label.innerHTML = 'Priority?';
            toDoCont.appendChild(label);
            let priority =document.createElement('INPUT');
            priority.setAttribute('id', 'toDoPriority');
            priority.setAttribute('type', 'checkbox');
            if (listData.selectedToDo[i].priority == true) {
                priority.checked = true;
            }
            toDoCont.appendChild(priority);
            

            //Button
            let saveBtn = document.createElement('button');
            saveBtn.innerHTML = 'save';
            saveBtn.setAttribute('id','saveEditToDoBtn')
            saveBtn.setAttribute('data-btn', 'inboxSaveEditToDo');
            saveBtn.setAttribute('data-id', toDoId);
            toDoCont.appendChild(saveBtn);

            let errCont = document.createElement('div');
            errCont.setAttribute('id','editToDoErrCont');
            toDoCont.appendChild(errCont);
        } else {
            let text = document.createElement('P');
            text.setAttribute('id',`toDoText`);
            text.innerHTML = listData.selectedToDo[i].text;
            toDoCont.appendChild(text);
            let toDo = document.createElement('INPUT');
            toDo.setAttribute('id','toDo');
            toDo.setAttribute('data-id', listData.selectedToDo[i].id);
            toDo.setAttribute('data-listid', listData.selectedToDo[i].listId)
            toDo.setAttribute('type','checkbox')
            text.prepend(toDo);
            if (listData.selectedToDo[i].status == 'complete') {
                toDo.checked = true;
            } else {
                toDo.checked = false;
            }
            let dueDateWarningCont = document.createElement('span');
            dueDateWarningCont.setAttribute('id','dueDateWarningCont');
            text.appendChild(dueDateWarningCont);
            switch (true) {
                case listData.selectedToDo[i].daysTilDue < 0:
                    dueDateWarningCont.innerText = '__Over Due!__';
                    break;
                case listData.selectedToDo[i].daysTilDue === 0:
                    dueDateWarningCont.innerText = '__Due Today__';
                    break;
                case listData.selectedToDo[i].daysTilDue === 1:
                    dueDateWarningCont.innerText = '__Due Tomorrow__';
                    break;
                case listData.selectedToDo[i].daysTilDue === 2:
                    dueDateWarningCont.innerText = '__Due in Two Days__';
                    break;
                case (listData.selectedToDo[i].daysTilDue > 2 && listData.selectedToDo[i].daysTilDue < 7):
                    dueDateWarningCont.innerText = '__Due This Week__';
                    break;
            }
            let listLabel = document.createElement('span');
            listLabel.setAttribute('id', 'listlabel');
            listLabel.innerText = listData.selectedToDo[i].listTitle;
            text.appendChild(listLabel);
            let editBtn = document.createElement('button');
            editBtn.setAttribute('id','titleEditBtn');
            editBtn.setAttribute('data-btn','inboxToDoEdit');
            editBtn.setAttribute('data-id', listData.selectedToDo[i].id);
            editBtn.setAttribute('data-listid', listData.selectedToDo[i].listId)
            editBtn.setAttribute('data-index', i);
            editBtn.innerHTML = 'Edit';
            text.appendChild(editBtn);
        }
        //New to-do Button
        let newToDoBtn = document.createElement('button');
        content.appendChild(newToDoBtn);
        newToDoBtn.setAttribute('data-btn', 'inboxNewToDo');
        newToDoBtn.setAttribute('id', 'inboxNewToDo')
        newToDoBtn.innerHTML = '+ New To-Do';
    }
    checkBoxValid();
}

const inboxNewToDoInput = () => {
    //Remove Children
    const content = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(content);

    let toDoCont = document.createElement('div');
    toDoCont.setAttribute('id', 'toDoCont');
    content.appendChild(toDoCont);


    for (let i = 0; i < listData.selectedToDo.length; i++) {
        let text = document.createElement('P');
        text.setAttribute('id',`toDoText`);
        text.innerHTML = listData.selectedToDo[i].text;
        toDoCont.appendChild(text);
        let toDo = document.createElement('INPUT');
        toDo.setAttribute('id','toDo');
        toDo.setAttribute('data-id', listData.selectedToDo[i].id);
        toDo.setAttribute('data-listid', listData.selectedToDo[i].listId)
        toDo.setAttribute('type','checkbox')
        text.prepend(toDo);
        if (listData.selectedToDo[i].status == 'complete') {
            toDo.checked = true;
        } else {
            toDo.checked = false;
        }
        let dueDateWarningCont = document.createElement('span');
        dueDateWarningCont.setAttribute('id','dueDateWarningCont');
        text.appendChild(dueDateWarningCont);
        switch (true) {
            case listData.selectedToDo[i].daysTilDue < 0:
                dueDateWarningCont.innerText = '__Over Due!__';
                break;
            case listData.selectedToDo[i].daysTilDue === 0:
                dueDateWarningCont.innerText = '__Due Today__';
                break;
            case listData.selectedToDo[i].daysTilDue === 1:
                dueDateWarningCont.innerText = '__Due Tomorrow__';
                break;
            case listData.selectedToDo[i].daysTilDue === 2:
                dueDateWarningCont.innerText = '__Due in Two Days__';
                break;
            case (listData.selectedToDo[i].daysTilDue > 2 && listData.selectedToDo[i].daysTilDue < 7):
                dueDateWarningCont.innerText = '__Due This Week__';
                break;
        }
        let listLabel = document.createElement('span');
        listLabel.setAttribute('id', 'listlabel');
        listLabel.innerText = listData.selectedToDo[i].listTitle;
        text.appendChild(listLabel);
        let editBtn = document.createElement('button');
        editBtn.setAttribute('id','inboxEditBtn');
        editBtn.setAttribute('data-btn','inboxToDoEdit');
        editBtn.setAttribute('data-id', listData.selectedToDo[i].id);
        editBtn.setAttribute('data-listid', listData.selectedToDo[i].listId)
        editBtn.setAttribute('data-index', i);
        editBtn.innerHTML = 'Edit';
        text.appendChild(editBtn);
    }

    let toDoInputCont = document.createElement('div');
    toDoInputCont.setAttribute('id','toDoInputCont');
    content.appendChild(toDoInputCont);
    

    //To Do Input
    let toDoInput = document.createElement('INPUT');
    toDoInput.setAttribute('id', 'toDoInput');
    toDoInput.setAttribute('type', 'text');
    toDoInput.setAttribute('placeholder', 'New To Do');
    toDoInputCont.appendChild(toDoInput);

    //Date
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
    

    //Save Button
    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = 'save';
    saveBtn.setAttribute('data-btn', 'inboxSaveToDo');
    toDoInputCont.appendChild(saveBtn);
}

export { inboxEditPagePrint, inboxNewToDoInput, inboxDetailPrint, listDetailPrint, dropDownMenu, toDoPagePrint, listDropDownMenu, titleWithToDoPagePrint};