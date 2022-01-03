import { listPagePrint, newListPrint } from './pagePrint';
import { compareDesc, differenceInCalendarDays } from 'date-fns';
import { parseISO } from 'date-fns';
import { compareAsc } from 'date-fns';

const listData = {
    listsArray: [],
    toDoArray: [],
    selectedToDo: [],
    historyToDo: [],
    dateUpdate: () => {
        for (let i=0; i<listData.toDoArray.length; i++){
            let arraydate = parseISO(listData.toDoArray[i].date);
            let currentDate = new Date();
            let daysUntilDue = differenceInCalendarDays(new Date(arraydate),new Date(currentDate));
            listData.toDoArray[i].daysTilDue = daysUntilDue;
            listData.toDoArray[i].date = arraydate;
        }
        for (let j=0; j<listData.listsArray.length; j++) {
            let listDate = parseISO(listData.listsArray[j].date);
            listData.listsArray[j].date = listDate;
        }
    },
    dateSort: (arr) => {
        arr.sort(function (a,b) {
            return compareAsc(a.date,b.date);
        });
    },
    dateSortDesc: (arr) => {
        arr.sort(function(a,b) {
            return compareDesc(a.date,b.date);
        });
    },
    completeToDoSort: (listIndex,listId) => {
        let listIdResult = listData.toDoArray.filter(function(arr){
            return arr.listId == listId;
        });
        let completeInList = listIdResult.filter(function(arr){
            return arr.status == 'complete';
        });
        console.log(listIdResult.length,completeInList.length);
        let percentComplete = (completeInList.length/listIdResult.length)*100;
        listData.listsArray[listIndex].percentComplete = percentComplete;
        console.table(listData.listsArray);
    },
    checklistCompleteSort: (toDoIndex,listIndex,listId) => {
        let checklist = listData.toDoArray[toDoIndex].checklist;
        let completeChecklist = checklist.filter(function(arr){
            return arr.status == 'complete';  
        });
        let percentComplete = (completeChecklist.length/checklist.length)*100;
        listData.toDoArray[toDoIndex].percentComplete = percentComplete;
        console.table(listData.toDoArray);
    },
    newListData: () => {
        const newListTitle = document.querySelector('#listTitleInput').value;
        const newListDesc = document.querySelector('#listDescInput').value;
        const newListNotes = document.querySelector('#listNotesInput').value;
        const newListColor = document.querySelector('#listInputColor').value;
        let list = listData.listFactory(newListColor,newListTitle,newListDesc,newListNotes);
        listData.listsArray.push(list);
        console.table(listData.listsArray);
        let listIndex = listData.listsArray.length-1;
        let listId = listData.listsArray[listIndex].listId;
        listData.newToDoPrint(listIndex,listId);
        listPagePrint(listIndex,listId);
        localStorage.setItem('listsarray', JSON.stringify(listData.listsArray));
    },
    listEditData: (listIndex, listId) => {
        console.log(listIndex,listId);
        let descTitle = document.querySelector('#listDescInput').value;
        let listTitle = document.querySelector('#listTitleInput').value;
        let notesTitle = document.querySelector('#listNotesInput').value;
        const newListColor = document.querySelector('#listInputColor').value;
        listData.listsArray[listIndex].color = newListColor;
        listData.listsArray[listIndex].title = listTitle;
        listData.listsArray[listIndex].desc = descTitle;
        listData.listsArray[listIndex].notes = notesTitle;
        console.table(listData.listsArray);
        localStorage.setItem('listsarray', JSON.stringify(listData.listsArray));
    },
    listDelete: (listIndex,listId) => {
        listData.listsArray.splice(listIndex,1);
        for (let i = listData.toDoArray.length-1; i >=0; i--) {
            if (listData.toDoArray[i].listId === listId) {
                listData.toDoArray.splice(i,1);    
            }      
        }
        console.table(listData.toDoArray);
        localStorage.setItem('listarray', JSON.stringify(listData.listsArray));
        localStorage.setItem('todoarray', JSON.stringify(listData.toDoArray));
    },
    toDoDelete: (toDoId) => {
        for (let i = listData.toDoArray.length-1; i >=0; i--) {
            if (listData.toDoArray[i].id === toDoId) {
                listData.toDoArray.splice(i,1);
            }      
        }
        localStorage.setItem('todoarray', JSON.stringify(listData.toDoArray));
        console.table(listData.toDoArray);  
    },
    findListOptionId: () => {
        let listOptions = document.querySelectorAll('#listOptions');
        for (let i = 0; i< listOptions.length; i++) {
            console.log(listOptions[i].value);
            if (listOptions[i].selected) {
                return listOptions[i].value;
            }
        }
    },
    newToDoData: () => {
        let listId = parseInt(listData.findListOptionId());
        let listIndex = parseInt(listData.findListId(listId,listData.listsArray));
        console.log(listId);
        let checklist = document.querySelectorAll('#checklistInput');
        let checklistArr = [];
        for (let i = 0; i< checklist.length; i++) {
            let checklistText = checklist[i].value;
            let checklistFactory = listData.checklistFactory(listId,checklistText);
            checklistArr.push(checklistFactory);
        }
        let newToDo = document.querySelector('#toDoInput').value;
        let toDoDate = document.querySelector('#toDoDate').value;
        let toDoPriority = document.querySelector('#toDoPriority').checked;
        let toDoNotes = document.querySelector('#notesInput').value;
        let toDo = listData.toDoFactory(listId,newToDo,toDoNotes,checklistArr,toDoDate,toDoPriority);
        listData.toDoArray.push(toDo);
        let newIndex = listData.findListId(listId, listData.listsArray);
        listData.newToDoPrint(newIndex,listId);
        listPagePrint(newIndex,listId);
        listData.listClosestDate();
        newListPrint();
        localStorage.setItem('todoarray', JSON.stringify(listData.toDoArray));
    },
    editToDoData: (toDoId) => {
        let listId = parseInt(listData.findListOptionId());
        let listIndex = parseInt(listData.findListId(listId,listData.listsArray));
        let toDoIndex = parseInt(listData.findId(toDoId,listData.toDoArray));
        let checklist = document.querySelectorAll('#checklistInput');
        let checklistArr = [];
        if (listData.toDoArray[toDoIndex].checklist.length === 0) {
            for (let i = 0; i< checklist.length; i++) {
                let checklistText = checklist[i].value;
                let checklistFactory = listData.checklistFactory(listId,checklistText);
                checklistArr.push(checklistFactory);
            }
            listData.toDoArray[toDoIndex].checklist = checklistArr;
        } else if (checklist.length === 0) {
            listData.toDoArray[toDoIndex].checklist = checklistArr;
        } else {
            for (let i = 0; i<checklist.length; i++) {
            let checklistText = checklist[i].value;
            listData.toDoArray[toDoIndex].checklist[i].text = checklistText

            }
        }
        let listNotes = document.querySelector('#notesInput').value;
        let newToDo = document.querySelector('#toDoInput').value;
        let dateDash = document.querySelector('#toDoDate').value;
        let date = parseISO(dateDash);
        let todayDate = new Date();
        console.log(dateDash,date);
        let daysUntilDue = differenceInCalendarDays(
            new Date(date),
            new Date(todayDate)
          )
        let toDoPriority = document.querySelector('#toDoPriority').checked;
        console.log(listData.toDoArray[toDoIndex].daysTilDue);
        listData.toDoArray[toDoIndex].daysTilDue = daysUntilDue;
        listData.toDoArray[toDoIndex].text = newToDo;
        listData.toDoArray[toDoIndex].notes = listNotes;
        listData.toDoArray[toDoIndex].date = date;
        listData.toDoArray[toDoIndex].listId = listId;
        if (toDoPriority) {
            listData.toDoArray[toDoIndex].priority = true;
        } else {
            listData.toDoArray[toDoIndex].priority = false;
        }
        
        let newIndex = listData.findListId(listId, listData.listsArray);
        listData.newToDoPrint(newIndex,listId);
        listPagePrint(newIndex,listId);
        listData.listClosestDate();
        newListPrint();
        localStorage.setItem('todoarray', JSON.stringify(listData.toDoArray));
        console.table(listData.toDoArray);
    },
    findId: (num,arr) => {
        let idIndex = arr.findIndex(function(arr){
            return arr.id == num;
        });
        return idIndex;
    },
    findListId: (num,arr) => {
        let idIndex = arr.findIndex(function(arr) {
            return arr.listId == num;
        });
        return idIndex;
    },
    findChecklistId: (num,arr) => {
        let idIndex = arr.findIndex(function(arr) {
            return arr.checklistId == num;
        });
        return idIndex
    },
    newToDoPrint: (listIndex,listId) => {
        let result = listData.toDoArray.filter(function(arr){
            return arr.listId == listId;
        });
        let findToDo = listData.findListId(listId,listData.toDoArray);
        if (findToDo === -1) {
            listData.selectedToDo = [];
        } else {
            listData.selectedToDo = result;
            listData.dateSort(listData.selectedToDo);
        }
        
    },
    listClosestDate: () => {
        for (let i = 0; i<listData.listsArray.length; i++) {

            let listToDos = listData.toDoArray.filter(function(arr){
            return arr.listId === listData.listsArray[i].listId;
            });
            console.table(listToDos);
            if (listToDos.length === 0) {
                return
            } else {
                listData.dateSort(listToDos);
                listData.listsArray[i].date = listToDos[0].date;
                listData.dateSort(listData.listsArray);
            }

        }
        console.table(listData.listsArray);
    },
    inboxToDoSort: () => {
        let overdue = listData.toDoArray.filter(function(arr){
            return arr.daysTilDue < 0;
        });
        let dueToday = listData.toDoArray.filter(function(arr){
            return arr.daysTilDue === 0;
        });
        let inboxArr = overdue.concat(dueToday);
        listData.selectedToDo = inboxArr;
        listData.dateSort(listData.selectedToDo);
    },
    thisWeekSort: () => {
        let nextWeek = listData.toDoArray.filter(function(arr){
            return arr.daysTilDue > 0 && arr.daysTilDue < 7;
        });
        listData.selectedToDo = nextWeek;
        listData.dateSort(listData.selectedToDo);
    },
    listToDoLength: (listId) => {
        let listResult = listData.toDoArray.filter(function(arr){
            return arr.listId === listId;
        });
        return listResult.length;
    },
    inboxToDoLength: () => {
        let overdue = listData.toDoArray.filter(function(arr){
            return arr.daysTilDue < 0;
        });
        let dueToday = listData.toDoArray.filter(function(arr){
            return arr.daysTilDue === 0;
        });
        return [overdue.length,dueToday.length];
    },
    thisWeekLength: () => {
        let nextWeek = listData.toDoArray.filter(function(arr){
            return arr.daysTilDue > 0 && arr.daysTilDue < 7;
        });
        return nextWeek.length;
    },
    listFactory: (color,title,desc,notes) => {
        let date = '';
        let percentComplete = 0;
        let listId = Math.floor(Math.random()*999);
        let copyCheck = listData.findListId(listId,listData.listsArray);
        while (copyCheck !== -1) {
            return listId = Math.floor(Math.random()*999);
        }
        return {listId,date,color,title,desc,notes,percentComplete};
    },
    toDoFactory: (listId,text,notes,checklist,dateDash,priority) => {
        let percentComplete = 0;
        let status = 'pending';
        let date = parseISO(dateDash);
        let todayDate = new Date();
        console.log(dateDash,date);
        let daysTilDue = differenceInCalendarDays(
            new Date(date),
            new Date(todayDate)
          )
        let id = Math.floor(Math.random()*999);
        let copyCheck = listData.findId(id,listData.toDoArray);
        while (copyCheck !== -1) {
            return id = Math.floor(Math.random()*999);
        }
        return {id,listId,text,notes,checklist,date,daysTilDue,status,priority,percentComplete};
    },
    checklistFactory: (toDoId,text) => {
        let status = 'pending';
        let checklistId = Math.floor(Math.random()*999);
        return {checklistId,toDoId,text,status}
    }
}

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

export { listData };