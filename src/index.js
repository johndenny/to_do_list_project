import { newListInput, editListInput } from './newListInput';
import { listData } from './newProjectData';
import { listPagePrint } from './listPagePrint';
import { newListPrintCont } from './newListPrint';
import { newToDoInput, toDoCheckListPrint, editToDoInput } from './newToDoInput';
import { titlePage } from './titlePagePrint';
import { inboxEditPagePrint, inboxNewToDoInput, inboxDetailPrint, listDetailPrint, dropDownMenu, listDropDownMenu, titleWithToDoPagePrint } from './inboxPagePrint';
import { upcomingPagePrint } from './upcomingPagePrint';
import './style.css';

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
historyBtn.setAttribute('data-btn','hisory');
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

const myModalDisplayNone = () => {
    const myModal = document.querySelector('#myModal');
    myModal.style.display = 'none';
}

const btnFilter = (event) => {
    let btnData = event.target.getAttribute('data-btn');
    let btnPage = event.target.getAttribute('data-page');
    let toDoId = parseInt(event.target.getAttribute('data-id'));
    let toDoIndex = listData.findId(toDoId,listData.selectedToDo);
    let listId = parseInt(event.target.getAttribute('data-listid'));
    let staticId = event.target.dataset.listid;
    let listIndex = listData.findListId(listId, listData.listsArray);
    let inboxTitle = document.querySelector('#inboxTitle');
    console.log(btnData);
    console.log(staticId);
    console.log(listIndex,listId,toDoIndex,toDoId);
    switch (true) {
        case btnData === 'dropDownMenu':
            dropDownMenu(toDoId, listData.selectedToDo);
            break;
        case btnData === 'listDropDownMenu':
            listDropDownMenu();
            break;
        case btnData === 'toDoDetails':
            if (inboxTitle !== null) {
                inboxDetailPrint(toDoIndex);  
            } else {
                listDetailPrint(toDoId);
            }
            btnEvents();
            break;
        case btnData === 'inbox':
            listData.inboxToDoSort();
            titleWithToDoPagePrint('Inbox','inbox');
            btnEvents();
            break;
        case btnData === 'thisWeek':
            listData.thisWeekSort();
            titleWithToDoPagePrint('This Week','week');
            btnEvents();
            break;
        case btnData === 'upcoming':
            upcomingPagePrint();
            btnEvents();
            break;
        case btnData === 'newList':
            newListInput();
            btnEvents();
            break;
        case btnData === 'editList':
            editListInput(listId,listIndex);
            btnEvents();
            break;
        case btnData === 'cancel':
            modalCont.style.display = 'none';
            break;
        case btnData === 'submit':
            listData.newListData();
            newListPrintCont.newListPrint();
            myModalDisplayNone();
            btnEvents();
            break;
        case btnData === 'checklist':
            toDoCheckListPrint();
            btnEvents();
            break;
        case btnData === 'saveToDo':
            
            listData.newToDoData();
            newListPrintCont.newListPrint();
            myModalDisplayNone();
            listData.dateSort(listData.selectedToDo);
            if (staticId === 'inbox') {
                listData.inboxToDoSort();
                titleWithToDoPagePrint('Inbox','inbox');
            } else if (staticId === 'week') {
                listData.thisWeekSort();
                titleWithToDoPagePrint('This Week','week');
            } else {            
                listData.newToDoPrint(listIndex,listId);
                listPagePrint(listIndex,listId);
            }
            btnEvents();
            break;
        case btnData === 'saveList':
            listData.listEditData(listIndex,listId)
            newListPrintCont.newListPrint();
            listPagePrint(listIndex, listId);
            myModalDisplayNone();
            btnEvents();
            break;
        case btnData === 'descSave':
            listData.listEditDescData(listIndex,listId);
            newListPrintCont.newListPrint();
            break;        
        case btnData === 'saveEditToDo':
            listData.editToDoData(toDoId);
            myModalDisplayNone();
            newListPrintCont.newListPrint();
            if (inboxTitle !== null) {
                listData.inboxToDoSort();
                inboxPagePrint();
            }
            btnEvents();
            break;
        case btnData === 'inboxSaveEditToDo':
            listData.editToDoData(listIndex, listId);
            newListPrintCont.newListPrint();
            listData.dateSort(listData.toDoArray);
            inboxPagePrint();
            btnEvents();
            break;    
        case btnData === 'newToDo':
            newToDoInput(listIndex,staticId);
            newListPrintCont.newListPrint();
            btnEvents();
            break;
        case btnData === 'listPrintBtn':
            listData.newToDoPrint(listIndex,listId);
            listPagePrint(listIndex,listId);
            console.table(listData.selectedToDo);
            btnEvents();
            break;
        case btnData === 'titleEditBtn':
            titlePage.editListTitleInputPrint(listIndex,listId);
            btnEvents();
            break;
        case btnData === 'descEditBtn':
            titlePage.editListDescInputPrint(listIndex,listId);
            btnEvents();
            break;
        case btnData === 'listDelete':
            listData.listDelete(listIndex,listId);
            newListPrintCont.newListPrint();
            console.table(listData.toDoArray);    
            break;
        case btnData === 'toDoDeleteBtn':
            listData.toDoDelete(toDoId);
            newListPrintCont.newListPrint();
            listData.newToDoPrint(listIndex,listId);
            listPagePrint(listIndex,listId);
            if (inboxTitle !== null) {
                inboxPagePrint();
            }
            btnEvents();
            console.log(toDoId);
            console.table(listData.listsArray);
            console.table(listData.toDoArray);
            break;
        case btnData === 'inboxToDoDeleteBtn':
            listData.toDoDelete(toDoId);
            newListPrintCont.newListPrint();
            inboxPagePrint();
            btnEvents();
            break;
        case btnData ==='toDoEdit':
            editToDoInput(toDoId,toDoIndex,listId,listIndex);
            newListPrintCont.newListPrint();
            btnEvents();
            break;
        case btnData === 'inboxToDoEdit':
            listData.dateSort(listData.toDoArray);
            inboxEditPagePrint(toDoId);
            btnEvents();
            break;
        case btnData === 'inboxNewToDo':
            inboxNewToDoInput();
            btnEvents();
            break;
    }
}

const btnEvents = () => {
    const buttons = document.querySelectorAll('button');
        for (let i=0;i<buttons.length;i++) {
            buttons[i].addEventListener('click', btnFilter);
        }
    const button = document.querySelectorAll('.button');
        for (let i=0;i<button.length;i++) {
            button[i].addEventListener('click', btnFilter);
        }
}

let dummyList0 = listData.listFactory('#00ad54','Errands',"Shopping lists.",'');
listData.listsArray.push(dummyList0);
let dummyList1 = listData.listFactory('#2b00ff','Work','Tasks for work.','');
listData.listsArray.push(dummyList1);
let dummyList3 = listData.listFactory('#ffbb00','Home','Tasks around the house.','');
listData.listsArray.push(dummyList3);

let dummy0 = listData.toDoFactory(listData.listsArray[0].listId,'Do this','',[],'2021-12-21',false);
listData.toDoArray.push(dummy0);
let dummy1 = listData.toDoFactory(listData.listsArray[0].listId,'Do that thing','',[],'2021-12-22',false);
listData.toDoArray.push(dummy1);
let dummy2 = listData.toDoFactory(listData.listsArray[0].listId,'Find that','',[],'2021-12-23',false);
listData.toDoArray.push(dummy2);
let dummy3 = listData.toDoFactory(listData.listsArray[0].listId,'Buy that thing','',[],'2021-12-24',false);
listData.toDoArray.push(dummy3);
let dummy4 = listData.toDoFactory(listData.listsArray[1].listId,'Go to this place','',[],'2021-12-25',false);
listData.toDoArray.push(dummy4);
let dummy5 = listData.toDoFactory(listData.listsArray[1].listId,'Fill out these forms','',[],'2021-12-26',false);
listData.toDoArray.push(dummy5);
let dummy6 = listData.toDoFactory(listData.listsArray[1].listId,'Go to this meeting','',[],'2021-12-27',false);
listData.toDoArray.push(dummy6);
let dummy7 = listData.toDoFactory(listData.listsArray[2].listId,'Buy things for that thing','',[],'2021-12-28',false);
listData.toDoArray.push(dummy7);
let dummy8 = listData.toDoFactory(listData.listsArray[2].listId,'Mail those packages','',[],'2021-12-21',false);
listData.toDoArray.push(dummy8);
let dummy9 = listData.toDoFactory(listData.listsArray[2].listId,'Research that thing','',[],'2021-12-22',false);
listData.toDoArray.push(dummy9);
let dummy11 = listData.toDoFactory(listData.listsArray[2].listId,'Find another place','',[],'2021-12-23',false);
listData.toDoArray.push(dummy11);
let dummy12 = listData.toDoFactory(listData.listsArray[1].listId,'Find an alternative to this','',[],'2021-12-25',false);
listData.toDoArray.push(dummy12);


newListPrintCont.newListPrint();
listData.inboxToDoSort();
titleWithToDoPagePrint('Inbox','inbox');
btnEvents();

console.log(new Date().toISOString().slice(0,10).split('-').join(''));

import { differenceInCalendarDays } from 'date-fns';

let myNewDate = differenceInCalendarDays(
    new Date(2013,1,5),
    new Date(2012,12,22)
  )

console.log(myNewDate);

import { compareAsc } from 'date-fns';

let listSort = listData.toDoArray.sort(function (a,b) {
    return compareAsc(a.date,b.date);
});
console.table(listSort);


export { btnEvents };