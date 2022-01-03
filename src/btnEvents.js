import { listData } from './data';
import { newToDoInput, toDoCheckListPrint, editToDoInput, newListInput, editListInput } from './inputPrint';
import { listDetailPrint, dropDownMenu, listDropDownMenu, titleWithToDoPagePrint, listPagePrint, newListPrint, } from './pagePrint';

const myModalDisplayNone = () => {
    const myModal = document.querySelector('#myModal');
    myModal.style.display = 'none';
}

const btnFilter = (event) => {
    let btnData = event.target.getAttribute('data-btn');
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
            listDetailPrint(toDoId);
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
        case btnData === 'history':
            console.table(listData.historyToDo);
            listData.selectedToDo = listData.historyToDo;
            listData.dateSortDesc(listData.selectedToDo);
            titleWithToDoPagePrint('History','history');
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
            myModalDisplayNone();
            break;
        case btnData === 'submit':
            listData.newListData();
            newListPrint();
            myModalDisplayNone();
            btnEvents();
            break;
        case btnData === 'checklist':
            toDoCheckListPrint();
            btnEvents();
            break;
        case btnData === 'saveToDo':
            listData.newToDoData();
            myModalDisplayNone();
            btnEvents();
            break;
        case btnData === 'saveList':
            listData.listEditData(listIndex,listId)
            newListPrint();
            listData.newToDoPrint(listIndex,listId);
            listPagePrint(listIndex, listId);
            myModalDisplayNone();
            btnEvents();
            break;    
        case btnData === 'saveEditToDo':
            listData.editToDoData(toDoId);
            myModalDisplayNone();
            btnEvents();
            break;
        case btnData === 'newToDo':
            newToDoInput(listIndex,listId);
            newListPrint();
            btnEvents();
            break;
        case btnData === 'listPrintBtn':
            listData.newToDoPrint(listIndex,listId);
            listPagePrint(listIndex,listId);
            console.table(listData.selectedToDo);
            btnEvents();
            console.table(listData.listsArray);
            break;
        case btnData === 'listDelete':
            listData.listDelete(listIndex,listId);
            newListPrint();
            console.table(listData.toDoArray);    
            break;
        case btnData === 'toDoDeleteBtn':
            listData.toDoDelete(toDoId);
            newListPrint();
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
        case btnData ==='toDoEdit':
            editToDoInput(toDoId,toDoIndex,listId,listIndex);
            newListPrint();
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

export { btnEvents }