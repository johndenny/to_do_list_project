import { newListPrintCont } from './newListPrint';
import { listPagePrint } from './listPagePrint';
import { newToDoInput } from './newToDoInput';
import { newProjectInput } from './newListInput';
import { titlePage } from './titlePagePrint';

const listData = {
    listsArray: [
        {title: 'My Vaction', desc: "I'm going to New York City!"}, 
        {title: 'My Work Project', desc: 'my project to make money.'}, 
        {title: 'My New Hobby', desc: 'my new hobby is so cool!'}
    ],
    toDoArray: [],
    selectedToDo: [],
    historyToDo: [],
    newListData: () => {
        let newListTitle = document.querySelector('#listTitleInput').value;
        let newListDesc = document.querySelector('#listDescInput').value;
        if (newListTitle.length >= 3) {
            let list = listData.listFactory(newListTitle,newListDesc);
            listData.listsArray.push(list);
            console.table(listData.listsArray);
            let page = listData.listsArray.length-1;
            listData.newToDoPrint(page);
            listPagePrint(page);
        } else {
            newProjectInput('Title is too Short')
        }   
    },
    listEditData: (pageNum) => {
        let listTitle = document.querySelector('#editTitleInput').value;
        // 
        let letterCount = listTitle.split(' ').join('');
        if (letterCount.length >= 3) {
            listData.listsArray[pageNum].title = listTitle;
            // 
            console.table(listData.listsArray);
            listPagePrint(pageNum);
        } else {
            titlePage.editListTitleInputPrint(pageNum);
            let titleErrCont = document.querySelector('#titleErrCont');
            let errSpan = document.createElement('SPAN');
            errSpan.innerHTML = 'Title is too short.'
            titleErrCont.appendChild(errSpan);
        }   
    },
    listEditDescData: (pageNum) => {
        let listDesc = document.querySelector('#editDescInput').value;
        let letterCount = listDesc.split(' ').join('');
        if (letterCount.length >= 3) {
            listData.listsArray[pageNum].desc = listDesc;
            console.table(listData.listsArray);
            listPagePrint(pageNum);
        } else {
            titlePage.editListTitleInputPrint(pageNum);
            let descErrCont = document.querySelector('#descErrCont');
            let descErrSpan = document.createElement('SPAN');
            descErrSpan.innerHTML = 'Title is too short.'
            descErrCont.appendChild(descErrSpan);
        }   
    },
    listDelete: (pageNum) => {
        listData.listsArray.splice(pageNum,1);
    },
    newToDoData: (page) => {
        let newToDo = document.querySelector('#toDoInput').value;
        let toDoLetterCount = newToDo.split(' ').join('');
        let toDoDate = document.querySelector('#toDoDate').value;
        let toDoDateComma = toDoDate.split('-').join(', ');
        let toDoPriority = document.querySelector('#toDoPriority').checked;
        let inputCont = document.querySelector('#toDoInputCont');
        let errCont = document.createElement('div');
        errCont.setAttribute('id','newToDoErrCont');
        inputCont.appendChild(errCont);
        if (toDoLetterCount.length < 3) {
            let cont = document.querySelector('#newToDoErrCont');
            let errSpan = document.createElement('SPAN');
            errSpan.innerHTML = 'To Do is too short.'
            cont.appendChild(errSpan);
        } else {
            let toDo = listData.toDoFactory(page,newToDo,toDoDateComma,'',toDoPriority);
            listData.toDoArray.push(toDo);
            listData.newToDoPrint(page);
            listPagePrint(page);
            console.table(listData.toDoArray);
        }
    },
    editToDoData: (page) => {
        let newToDo = document.querySelector('#editToDoInput').value;
        let toDoLetterCount = newToDo.split(' ').join('');
        let toDoDate = document.querySelector('#toDoDate').value;
        let toDoPriority = document.querySelector('#toDoPriority').checked;
        let id = document.querySelector('#saveEditToDoBtn').getAttribute('data-id');
        let idResult = listData.findId(id);
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
                listData.toDoArray[idResult].text = newToDo;
                listData.toDoArray[idResult].date = toDoDate;
                if (toDoPriority) {
                    listData.toDoArray[idResult].priority = true;
                } else {
                    listData.toDoArray[idResult].priority = false;
                }
                listData.newToDoPrint(page);
                listPagePrint(page);
                console.table(listData.toDoArray);
        }
    },
    findToDo: (text,page) => {
        let result = listData.toDoArray.findIndex(function(arr){
            return arr.text == text && arr.page == page;
        });
        return result;
    },
    findId: (num) => {
        let idIndex = listData.toDoArray.findIndex(function(arr){
            return arr.id == num;
        });
        return idIndex;
    },
    newToDoPrint: (pageNum) => {
        let result = listData.toDoArray.filter(function(arr){
            return arr.page == pageNum;
        });
        listData.selectedToDo = result;
        console.table(listData.selectedToDo)
    },
    listFactory: (title,desc) => {
        return {title,desc};
    },
    toDoFactory: (page,text,date,status,priority) => {
        let id = Math.floor(Math.random()*999);
        let copyCheck = listData.findId(id);
        while (copyCheck !== -1) {
            return id = Math.floor(Math.random()*999);
        }
        return {id,page,text,date,status,priority};
    }
}

export { listData };