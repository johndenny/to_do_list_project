import { newListPrintCont } from './newListPrint';
import { listPagePrint } from './listPagePrint';
import { newToDoInput } from './newToDoInput';
import { newListInput } from './newListInput';
import { titlePage } from './titlePagePrint';
import { differenceInCalendarDays } from 'date-fns';
import { parseISO } from 'date-fns';
import { compareAsc } from 'date-fns';
import { btnEvents } from '.';

const listData = {
    listsArray: [],
    toDoArray: [],
    selectedToDo: [],
    dateSort: (arr) => {
        arr.sort(function (a,b) {
            return compareAsc(a.date,b.date);
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
        let list = listData.listFactory('',newListTitle,newListDesc,newListNotes,0);
        listData.listsArray.push(list);
        console.table(listData.listsArray);
        let listIndex = listData.listsArray.length-1;
        let listId = listData.listsArray[listIndex].listId;
        listData.newToDoPrint(listIndex,listId);
        listPagePrint(listIndex,listId);
    },
    listEditData: (listIndex, listId) => {
        console.log(listIndex,listId);
        let descTitle = document.querySelector('#listDescInput').value;
        let listTitle = document.querySelector('#listTitleInput').value;
        let notesTitle = document.querySelector('#listNotesInput').value;
        console.log(listTitle);
        listData.listsArray[listIndex].title = listTitle;
        listData.listsArray[listIndex].desc = descTitle;
        listData.listsArray[listIndex].notes = notesTitle;
        console.table(listData.listsArray);
    },
    listEditDescData: (listIndex, listId) => {
        let listDesc = document.querySelector('#editDescInput').value;
            listData.listsArray[listIndex].desc = listDesc;
            console.table(listData.listsArray);
            listPagePrint(listIndex,listId);
    },
    listDelete: (listIndex,listId) => {
        listData.listsArray.splice(listIndex,1);
        for (let i = listData.toDoArray.length-1; i >=0; i--) {
            if (listData.toDoArray[i].listId === listId) {
                listData.toDoArray.splice(i,1);    
            }      
        }
        let content = document.querySelector('#content');
        newListPrintCont.removeAllChildNodes(content);
        console.table(listData.toDoArray);
    },
    toDoDelete: (toDoId) => {
        for (let i = listData.toDoArray.length-1; i >=0; i--) {
            if (listData.toDoArray[i].id === toDoId) {
                listData.toDoArray.splice(i,1);
            }      
        }    
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
        let listTitle = listData.listsArray[listIndex].title;
        let newToDo = document.querySelector('#toDoInput').value;
        let toDoDate = document.querySelector('#toDoDate').value;
        let toDoPriority = document.querySelector('#toDoPriority').checked;
        let toDoNotes = document.querySelector('#notesInput').value;
        let toDo = listData.toDoFactory(listId,listTitle,newToDo,toDoNotes,checklistArr,toDoDate,toDoPriority);
        listData.toDoArray.push(toDo);
        listData.newToDoPrint(listIndex,listId);
        let newIndex = listData.findListId(listId, listData.listsArray);
        listPagePrint(newIndex,listId);
        console.table(listData.toDoArray);
    },
    editToDoData: (toDoIndex) => {
        let listId = parseInt(listData.findListOptionId());
        let listIndex = parseInt(listData.findListId(listId,listData.listsArray));
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
        listData.newToDoPrint(listIndex,listId);
        let newIndex = listData.findListId(listId, listData.listsArray);
        listPagePrint(newIndex,listId);
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
            let closestDate = listData.selectedToDo[0].date;
            listData.listsArray[listIndex].date = closestDate;
            listData.dateSort(listData.listsArray);
        }
        
    },
    listFactory: (date,title,desc,notes) => {
        let percentComplete = 0;
        let listId = Math.floor(Math.random()*999);
        let copyCheck = listData.findListId(listId,listData.listsArray);
        while (copyCheck !== -1) {
            return listId = Math.floor(Math.random()*999);
        }
        return {listId,date,title,desc,notes,percentComplete};
    },
    toDoFactory: (listId,listTitle,text,notes,checklist,dateDash,priority) => {
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
        return {id,listId,listTitle,text,notes,checklist,date,daysTilDue,status,priority,percentComplete};
    },
    checklistFactory: (toDoId,text) => {
        let status = 'pending';
        let checklistId = Math.floor(Math.random()*999);
        return {checklistId,toDoId,text,status}
    }
}

export { listData };