import { listData } from './data';
import { checkBoxValid } from './checkBoxEvent';
import { btnEvents } from './btnEvents';
import { format } from 'date-fns';

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const layoutPrint = () => {
    let body = document.querySelector('body');

    //Modal Container
    let modalCont = document.createElement('div');
    modalCont.setAttribute('id','myModal');
    modalCont.setAttribute('class','modal');
    body.appendChild(modalCont);
    let modalContent = document.createElement('div');
    modalContent.setAttribute('id','modalContent');
    modalCont.appendChild(modalContent);

    //Container Container
    let bodyCont = document.createElement('div');
    bodyCont.setAttribute('id','bodyCont');
    body.appendChild(bodyCont);

    //Button Container
    let btnCont = document.createElement('div');
    btnCont.setAttribute('id','btnCont');
    bodyCont.appendChild(btnCont);

    //Button Container / Static Button Container 
    let staticBtnCont = document.createElement('div');
    staticBtnCont.setAttribute('id','staticBtnCont');
    btnCont.appendChild(staticBtnCont);

    //Content Container
    let content = document.createElement('div');
    content.setAttribute('id', 'content');
    bodyCont.appendChild(content);

    //Static Buttons
    let inboxBtnCont = document.createElement('div');
    inboxBtnCont.id = 'inboxBtnCont';
    inboxBtnCont.className = 'button';
    inboxBtnCont.dataset.btn = 'inbox'
    staticBtnCont.appendChild(inboxBtnCont);
    let inboxBtn = document.createElement('span');
    inboxBtn.setAttribute('class','button');
    inboxBtn.setAttribute('id','inboxBtn');
    inboxBtn.setAttribute('data-btn','inbox');
    inboxBtn.innerText = 'Inbox';
    inboxBtnCont.appendChild(inboxBtn);
    let inboxOverdue = document.createElement('span');
    inboxOverdue.id = 'inboxOverdue';
    inboxBtnCont.appendChild(inboxOverdue);
    let inboxDueToday = document.createElement('span');
    inboxDueToday.id = 'inboxDueToday';
    inboxBtnCont.appendChild(inboxDueToday);
    let thisWeekCont = document.createElement('div');
    thisWeekCont.id = 'thisWeekCont';
    thisWeekCont.className = 'button';
    thisWeekCont.dataset.btn = 'thisWeek'
    staticBtnCont.appendChild(thisWeekCont);
    let thisWeekBtn = document.createElement('span');
    thisWeekBtn.id = 'thisWeekBtn';
    thisWeekBtn.className = 'button';
    thisWeekBtn.dataset.btn = 'thisWeek';
    thisWeekBtn.innerText = 'This Week';
    thisWeekCont.appendChild(thisWeekBtn);
    let thisWeekNum = document.createElement('span');
    thisWeekNum.id = 'thisWeekNum';
    thisWeekCont.appendChild(thisWeekNum);
    let historyBtn = document.createElement('span');
    historyBtn.setAttribute('class','button');
    historyBtn.setAttribute('id','historyBtn');
    historyBtn.setAttribute('data-btn','history');
    historyBtn.innerText = 'History';
    staticBtnCont.appendChild(historyBtn);
    let listBtnCont = document.createElement('div');
    listBtnCont.setAttribute('id','listBtnCont');
    btnCont.appendChild(listBtnCont)
    let listBtnSymbol = document.createElement('span');
    listBtnSymbol.setAttribute('id','listBtnSymbol');
    listBtnSymbol.innerHTML = '&#9013;';
    listBtnCont.appendChild(listBtnSymbol);
    let listBtn = document.createElement('span');
    listBtn.setAttribute('id','listContBtn');
    listBtn.setAttribute('data-btn','list');
    listBtn.innerText = 'Lists';
    listBtnCont.appendChild(listBtn);

    //Loops of Lists Container
    let listCont = document.createElement('div');
    listCont.setAttribute('id','listBtns');
    btnCont.appendChild(listCont);

    //New List Button Container
    let newListBtnCont = document.createElement('div');
    newListBtnCont.setAttribute('id','newListBtnCont');
    btnCont.appendChild(newListBtnCont);

    //New List Button
    let newListBtnSymbol = document.createElement('span');
    newListBtnSymbol.setAttribute('id','newListSymbol');
    newListBtnSymbol.innerHTML = '+';
    newListBtnCont.appendChild(newListBtnSymbol);
    let newListBtn = document.createElement('span');
    newListBtn.setAttribute('class','button')
    newListBtn.setAttribute('id','newListBtn');
    newListBtn.setAttribute('data-btn','newList');
    newListBtn.innerText = 'New List';
    newListBtnCont.appendChild(newListBtn);
    
    listData.listClosestDate;
    newListPrint();
    listData.inboxToDoSort();
    titleWithToDoPagePrint('Inbox','inbox');
    
    btnEvents();
}

const newListPrint = () => {
    const listBtns = document.querySelector('#listBtns');
    removeAllChildNodes(listBtns);
    for (let i=0;i<listData.listsArray.length;i++) {
        let listBtnCont = document.createElement('div');
        listBtnCont.setAttribute('id','listBtnEachCont');
        listBtnCont.className = 'button';
        listBtnCont.dataset.btn = 'listPrintBtn';
        listBtnCont.dataset.listid = listData.listsArray[i].listId;
        listBtns.appendChild(listBtnCont);
        let listBtnEachSymbol = document.createElement('span');
        listBtnEachSymbol.setAttribute('id','listBtnEachSymbol');
        listBtnEachSymbol.style.color = listData.listsArray[i].color;
        listBtnEachSymbol.innerHTML = '&#9679;';
        listBtnCont.appendChild(listBtnEachSymbol);
        let titleBtn = listData.listsArray[i].title;
        let btn = document.createElement('span');
        listBtnCont.appendChild(btn);
        btn.setAttribute('class','button');
        btn.setAttribute('id','listBtn');
        btn.setAttribute('data-btn', 'listPrintBtn');
        btn.setAttribute('data-listId', listData.listsArray[i].listId);
        btn.innerHTML = titleBtn;
        let listNum = document.createElement('span');
        listNum.id = 'listNum';
        let listId = listData.listsArray[i].listId;
        listNum.innerText = listData.listToDoLength(listId);
        listBtnCont.appendChild(listNum);
        const thisWeekNum = document.querySelector('#thisWeekNum');
        thisWeekNum.innerText = listData.thisWeekLength();
        const inboxOverdueNum = document.querySelector('#inboxOverdue');
        const inboxTodayNum = document.querySelector('#inboxDueToday');
        let inboxResults = listData.inboxToDoLength();
        inboxOverdueNum.innerText = inboxResults[0];
        inboxTodayNum.innerText = inboxResults[1];
    }   
}

const listPagePrint = (listIndex,listId) => {
    //Remove Children
    const content = document.querySelector('#content');
    removeAllChildNodes(content);

    //List Container
    let listCont = document.createElement('div');
    listCont.setAttribute('id','listCont');
    content.appendChild(listCont); 
    
    titlePrint(listIndex,listId);   
    
    // ToDo Container
    let toDoCont = document.createElement('div');
    toDoCont.setAttribute('id', 'toDoCont');
    listCont.appendChild(toDoCont);

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
    btn.dataset.listid = listId;
    btn.innerHTML = 'New To-Do';
    newToDoButtonCont.appendChild(btn);    

}


const titlePrint = (listIndex,listId) => {

    //Title Container
    let titleCont = document.createElement('div');
    titleCont.setAttribute('id', 'titleCont');
    listCont.appendChild(titleCont);



    //Title Span
    let title = document.createElement('span');
    title.setAttribute('id','listTitle');
    title.setAttribute('class','title')
    titleCont.appendChild(title);
    title.innerHTML = listData.listsArray[listIndex].title;
    
    let listBtnEachSymbol = document.createElement('span');
    listBtnEachSymbol.className = 'title';
    listBtnEachSymbol.setAttribute('id','listBtnTitleSymbol');
    listBtnEachSymbol.style.color = listData.listsArray[listIndex].color;
    listBtnEachSymbol.innerHTML = '&#9679;';
    titleCont.appendChild(listBtnEachSymbol);

    //Drop Down Menu
    let dropDownMenu = document.createElement('div');
    dropDownMenu.className = 'listDropDownMenu';
    titleCont.appendChild(dropDownMenu);
    

    
    //Button
    let dropDownList = document.createElement('div');
    dropDownList.id = 'dropDownList';
    dropDownList.className = 'listDropDownContent';
    dropDownMenu.appendChild(dropDownList);
    let dropDownEdit = document.createElement('span');
    dropDownEdit.id = 'dropDownEdit';
    dropDownEdit.className = 'button';
    dropDownEdit.setAttribute('data-btn','editList');
    dropDownEdit.setAttribute('data-listid', listId);
    dropDownEdit.innerText = 'Edit'
    dropDownList.appendChild(dropDownEdit);
    let dropDownDelete = document.createElement('span');
    dropDownDelete.id = 'dropDownEdit';
    dropDownDelete.className = 'button';
    dropDownDelete.setAttribute('data-btn','listDelete');
    dropDownDelete.setAttribute('data-listid', listId);
    dropDownDelete.innerText = 'Delete';
    dropDownList.appendChild(dropDownDelete);
    
    let dropDownMenuSymbol = document.createElement('span');
    dropDownMenuSymbol.id = 'dropDownMenuSymbol';
    dropDownMenuSymbol.className = 'button';
    dropDownMenuSymbol.setAttribute('data-btn','listDropDownMenu');
    dropDownMenuSymbol.setAttribute('data-listid', listId);
    dropDownMenuSymbol.innerHTML = '&#x2022;&#x2022;&#x2022;';
    dropDownMenu.appendChild(dropDownMenuSymbol);

    if (listData.listsArray[listIndex].desc === '' && listData.listsArray[listIndex].notes === '') {
        return
    } else {
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
    }
    
    

}

const toDoPagePrint = (listIdData) => {
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
        toDo.dataset.page = listIdData;
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
        
        //Drop Down Button
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
                toDo.dataset.listid = listData.selectedToDo[i].listId;
                toDo.setAttribute('data-checklistid',listData.selectedToDo[i].checklist[j].checklistId);
                toDo.dataset.page = listIdData;
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

    toDoPagePrint(listIdData);

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
    btn.dataset.page = listIdData;
    btn.innerHTML = 'New To-Do';
    newToDoButtonCont.appendChild(btn);    
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownMenu(toDoId, arr) {
    console.log(listData.selectedToDo);
    let toDoIndex = listData.findId(toDoId, arr);
    let dropDownListNode = document.querySelectorAll(".dropDownContent");
    console.log(dropDownListNode.length);
    for (let i = 0; i<dropDownListNode.length; i++) {
        dropDownListNode[i].style.display = 'none';
    }
    console.log(dropDownListNode);
    dropDownListNode[toDoIndex].style.display = 'flex';
    
    window.onclick = function(event) {
    if (!event.target.matches('#dropDownMenuSymbol')) {
        dropDownListNode[toDoIndex].style.display = 'none';
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


export { listDetailPrint, dropDownMenu, toDoPagePrint, listDropDownMenu, titleWithToDoPagePrint, listPagePrint, newListPrint, layoutPrint };