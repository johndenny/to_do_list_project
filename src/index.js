import { newListInput } from './newListInput';
import { listData } from './newProjectData';
import { listPagePrint } from './listPagePrint';
import { newListPrintCont } from './newListPrint';
import { newToDoInput } from './newToDoInput';
import { titlePage } from './titlePagePrint';
import { editToDoInput } from './editToDoInput';
import { inboxEditPagePrint, inboxPagePrint } from './inboxPagePrint';
import { upcomingPagePrint } from './upcomingPagePrint';

const btnFilter = (event) => {
    let btnData = event.target.getAttribute('data-btn');
    let btnPage = event.target.getAttribute('data-page');
    let toDoId = parseInt(event.target.getAttribute('data-id'));
    let listId = parseInt(event.target.getAttribute('data-listid'));
    let listIndex = listData.findListId(listId, listData.listsArray);
    console.log(btnData);
    console.log(listIndex,listId,toDoId);
    switch (true) {
        case btnData === 'inbox':
            listData.toDoDueDateSort();
            console.table(listData.dueTodayArray);
            console.table(listData.dueTomArray);
            console.table(listData.dueTwoArray);
            console.table(listData.dueSevenArray);
            console.table(listData.overDueArray);
            inboxPagePrint();
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
        case btnData === 'submit':
            listData.newListData();
            newListPrintCont.newListPrint();
            btnEvents();
            break;
        case btnData === 'saveToDo':
            listData.newToDoData(listIndex,listId);
            newListPrintCont.newListPrint();
            btnEvents();
            break;
        case btnData === 'titleSave':
            listData.listEditData(listIndex,listId)
            newListPrintCont.newListPrint();
            break;
        case btnData === 'descSave':
            listData.listEditDescData(listIndex,listId);
            newListPrintCont.newListPrint();
            break;        
        case btnData === 'saveEditToDo':
            listData.editToDoData(listIndex, listId);
            newListPrintCont.newListPrint();
            listData.newToDoPrint(listIndex,listId);
            let newIndex = listData.findListId(listId, listData.listsArray);
            listPagePrint(newIndex, listId);
            btnEvents();
            break;
        case btnData === 'inboxSaveEditToDo':
            listData.editToDoData(listIndex, listId);
            newListPrintCont.newListPrint();
            listData.toDoDueDateSort();
            inboxPagePrint();
            btnEvents();
            break;    
        case btnData === 'newToDo':
            newToDoInput(listIndex,listId);
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
            btnEvents();
            console.log(toDoId);
            console.table(listData.listsArray);
            console.table(listData.toDoArray);
            break;
        case btnData === 'inboxToDoDeleteBtn':
            listData.toDoDelete(toDoId);
            newListPrintCont.newListPrint();
            listData.toDoDueDateSort();
            inboxPagePrint();
            btnEvents();
            break;
        case btnData ==='toDoEdit':
            let selectedIndex = event.target.getAttribute('data-index');
            editToDoInput(listIndex,listId,selectedIndex);
            btnEvents();
            break;
        case btnData === 'inboxToDoEdit':
            listData.toDoDueDateSort();
            inboxEditPagePrint(toDoId);
            btnEvents();
            break;
    }
}

const btnEvents = () => {
    const buttons = document.querySelectorAll('button');
        for (let i=0;i<buttons.length;i++) {
            buttons[i].addEventListener('click', btnFilter);
        }
}

newListPrintCont.newListPrint();
btnEvents();
let dummy0 = listData.toDoFactory(999,'do this','2021-12-21','pending',false);
listData.toDoArray.push(dummy0);
let dummy1 = listData.toDoFactory(999,'do that thing','2021-12-22','pending',false);
listData.toDoArray.push(dummy1);
let dummy2 = listData.toDoFactory(999,'find that','2021-12-23','pending',false);
listData.toDoArray.push(dummy2);
let dummy3 = listData.toDoFactory(998,'buy that thing','2021-12-24','pending',false);
listData.toDoArray.push(dummy3);
let dummy4 = listData.toDoFactory(998,'go to this place','2021-12-25','pending',false);
listData.toDoArray.push(dummy4);
let dummy5 = listData.toDoFactory(998,'fill out these forms','2021-12-26','pending',false);
listData.toDoArray.push(dummy5);
let dummy6 = listData.toDoFactory(998,'go to this meeting','2021-12-27','pending',false);
listData.toDoArray.push(dummy6);
let dummy7 = listData.toDoFactory(997,'buy things for that thing','2021-12-28','pending',false);
listData.toDoArray.push(dummy7);
let dummy8 = listData.toDoFactory(997,'mail those packages','2021-12-21','pending',false);
listData.toDoArray.push(dummy8);
let dummy9 = listData.toDoFactory(997,'research that thing','2021-12-22','pending',false);
listData.toDoArray.push(dummy9);
let dummy11 = listData.toDoFactory(998,'find another place','2021-12-23','pending',false);
listData.toDoArray.push(dummy11);
let dummy12 = listData.toDoFactory(997,'find an alternative to this','2021-12-25','pending',false);
listData.toDoArray.push(dummy12);

console.log(new Date().toISOString().slice(0,10).split('-').join(''));

export { btnEvents };