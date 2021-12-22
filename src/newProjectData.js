import { newListPrintCont } from './newListPrint';
import { listPagePrint } from './listPagePrint';
import { newToDoInput } from './newToDoInput';
import { newListInput } from './newListInput';
import { titlePage } from './titlePagePrint';

const listData = {
    listsArray: [
        {listId: 999, dateValue: '', title: 'My Vaction', desc: "I'm going to New York City!", percentComplete: 0}, 
        {listId: 998, dateValue: '', title: 'My Work Project', desc: 'my project to make money.', percentComplete: 0}, 
        {listId: 997, dateValue: '', title: 'My New Hobby', desc: 'my new hobby is so cool!', percentComplete: 0}
    ],
    toDoArray: [],
    selectedToDo: [],
    dueTodayArray: [],
    dueTomArray: [],
    dueTwoArray: [],
    dueSevenArray: [],
    overDueArray:[],
    toDoDueDateSort: () => {
        let dueToday = listData.toDoArray.filter(function(arr){
            return arr.daysTilDue === 0;
        });
        listData.dueTodayArray = dueToday;
        let dueTom = listData.toDoArray.filter(function(arr) {
            return arr.daysTilDue === 1;
        });
        listData.dueTomArray = dueTom;
        let dueTwoDays = listData.toDoArray.filter(function(arr) {
            return arr.daysTilDue === 2;
        });
        listData.dueTwoArray = dueTwoDays;
        let dueSevenDays = listData.toDoArray.filter(function(arr) {
            return arr.daysTilDue > 2 && arr.daysTilDue < 7;
        });
        listData.dueSevenArray = dueSevenDays;
        listData.dateValueSort(listData.dueSevenArray);
        let overDue = listData.toDoArray.filter(function(arr){
            return arr.daysTilDue < 0;
        });
        listData.overDueArray = overDue;
        listData.dateValueSort(listData.overDueArray);
    },
    dateValueSort: (arr) => {
        arr.sort(function(a,b){
            return a.dateValue - b.dateValue;
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
    newListData: () => {
        let newListTitle = document.querySelector('#listTitleInput').value;
        let newListDesc = document.querySelector('#listDescInput').value;
        let listLetterCount = newListTitle.split(' ').join('');
        if (listLetterCount.length >= 3) {
            let list = listData.listFactory('',newListTitle,newListDesc,0);
            listData.listsArray.push(list);
            console.table(listData.listsArray);
            let listIndex = listData.listsArray.length-1;
            let listId = listData.listsArray[listIndex].listId;
            listData.newToDoPrint(listIndex,listId);
            listPagePrint(listIndex,listId);
        } else {
            let newListErrCont = document.querySelector('#newListErrCont');
            if (newListErrCont.hasChildNodes()) {
                newListErrCont.removeChild(newListErrCont.firstChild);
            }
            let errSpan = document.createElement('SPAN');
            errSpan.innerHTML = 'Title is too short.'
            newListErrCont.appendChild(errSpan);
        }
    },
    listEditData: (listIndex, listId) => {
        console.log(listIndex,listId);
        let listTitle = document.querySelector('#editTitleInput').value;
        let letterCount = listTitle.split(' ').join('');
        if (letterCount.length >= 3) {
            listData.listsArray[listIndex].title = listTitle;
            console.table(listData.listsArray);
            listPagePrint(listIndex, listId);
        } else {
            titlePage.editListTitleInputPrint(listIndex, listId);
            let titleErrCont = document.querySelector('#titleErrCont');
            let errSpan = document.createElement('SPAN');
            errSpan.innerHTML = 'Title is too short.'
            titleErrCont.appendChild(errSpan);
        }   
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
    newToDoData: (listIndex,listId) => {
        let newToDo = document.querySelector('#toDoInput').value;
        let toDoLetterCount = newToDo.split(' ').join('');
        let toDoDate = document.querySelector('#toDoDate').value;
        let todayValue = new Date().toISOString().slice(0,10).split('-').join('');
        let daysUntilDue = dateValue - parseInt(todayValue);
        let toDoPriority = document.querySelector('#toDoPriority').checked;
        let inputCont = document.querySelector('#toDoInputCont');
        let errCont = document.createElement('div');
        errCont.setAttribute('id','newToDoErrCont');
        inputCont.appendChild(errCont);
        if (toDoLetterCount.length < 3) {
            let cont = document.querySelector('#newToDoErrCont');
            if (cont.hasChildNodes()) {
                cont.removeChild(cont.firstChild);
            }
            let errSpan = document.createElement('SPAN');
            errSpan.innerHTML = 'To Do is too short.'
            cont.appendChild(errSpan);
        } else {
            let toDo = listData.toDoFactory(listId,newToDo,toDoDate,daysUntilDue,'pending',toDoPriority);
            listData.toDoArray.push(toDo);
            listData.newToDoPrint(listIndex,listId);
            let newIndex = listData.findListId(listId, listData.listsArray);
            listPagePrint(newIndex,listId);
            console.table(listData.toDoArray);
        }
    },
    editToDoData: (listIndex, listId) => {
        let newToDo = document.querySelector('#editToDoInput').value;
        let toDoLetterCount = newToDo.split(' ').join('');
        let toDoDate = document.querySelector('#toDoDate').value;
        let dateRemove = toDoDate.split('-').join('');
        let dateValueNum = parseInt(dateRemove);
        let todayValue = new Date().toISOString().slice(0,10).split('-').join('');
        let editDaysUntilDue = dateValueNum - parseInt(todayValue);
        let toDoPriority = document.querySelector('#toDoPriority').checked;
        let id = document.querySelector('#saveEditToDoBtn').getAttribute('data-id');
        let idResult = listData.findId(id,listData.toDoArray);
        let inputCont = document.querySelector('#toDoInputCont');
        let errCont = document.createElement('div');
        errCont.setAttribute('id','editToDoErrCont');
        inputCont.appendChild(errCont);
        if (toDoLetterCount.length < 3) {
            let cont = document.querySelector('#editToDoErrCont');
                    let errSpan = document.createElement('SPAN');
                    errSpan.innerHTML = 'To Do is too short.'
                    cont.appendChild(errSpan);
        } else {
            console.log(idResult);
            listData.toDoArray[idResult].daysTilDue = editDaysUntilDue;
            listData.toDoArray[idResult].dateValue = dateValueNum;
            listData.toDoArray[idResult].text = newToDo;
            listData.toDoArray[idResult].date = toDoDate;
            if (toDoPriority) {
                listData.toDoArray[idResult].priority = true;
            } else {
                listData.toDoArray[idResult].priority = false;
            }
            console.table(listData.toDoArray);
        }
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
    newToDoPrint: (listIndex,listId) => {
        let result = listData.toDoArray.filter(function(arr){
            return arr.listId == listId;
        });
        let findToDo = listData.findListId(listId,listData.toDoArray);
        if (findToDo === -1) {
            listData.selectedToDo = [];
        } else {
            listData.selectedToDo = result;
            listData.dateValueSort(listData.selectedToDo);
            let closestDate = listData.selectedToDo[0].dateValue;
            listData.listsArray[listIndex].dateValue = closestDate;
            listData.dateValueSort(listData.listsArray);
        }
        
    },
    listFactory: (dateValue,title,desc,percentComplete) => {
        let listId = Math.floor(Math.random()*999);
        let copyCheck = listData.findListId(listId,listData.listsArray);
        while (copyCheck !== -1) {
            return id = Math.floor(Math.random()*999);
        }
        return {listId,dateValue,title,desc,percentComplete};
    },
    toDoFactory: (listId,text,date,status,priority) => {
        let dateValue = parseInt(date.split('-').join(''));
        let todayValue = new Date().toISOString().slice(0,10).split('-').join('');
        let daysTilDue = dateValue - parseInt(todayValue);
        let id = Math.floor(Math.random()*999);
        let copyCheck = listData.findId(id,listData.toDoArray);
        while (copyCheck !== -1) {
            return id = Math.floor(Math.random()*999);
        }
        return {id,listId,text,date,dateValue,daysTilDue,status,priority};
    }
}

export { listData };