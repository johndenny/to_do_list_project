import { newListPrintCont } from './newListPrint';
import { listPagePrint } from './listPagePrint';
import { newToDoInput } from './newToDoInput';
import { newProjectInput } from './newListInput';

const listData = {
    listsArray: [
        {title: 'My Vaction', desc: "I'm going to New York City!"}, 
        {title: 'My Work Project', desc: 'my project to make money.'}, 
        {title: 'My New Hobby', desc: 'my new hobby is so cool!'}
    ],
    toDoArray: [
        {page: '0', text: 'do this', date: '2021-12-17', status: '', priority: true},
        {page: '0', text: 'do that', date: '2021-12-17', status: '', priority: true},
        {page: '0', text: 'find this', date: '2021-12-17', status: '', priority: true},
        {page: '1', text: 'buy that', date: '2021-12-17', status: '', priority: true},
        {page: '1', text: 'go there', date: '2021-12-17', status: '', priority: true},
        {page: '1', text: 'go here', date: '2021-12-17', status: '', priority: true},
        {page: '2', text: 'make this', date: '2021-12-17', status: '', priority: true},
        {page: '2', text: 'make that', date: '2021-12-17', status: '', priority: true},
        {page: '2', text: 'meet them', date: '2021-12-17', status: '', priority: true},
        {page: '2', text: 'take that', date: '2021-12-17', status: '', priority: true}
    ],
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
        let listTitle = document.querySelector('#listTitleInput').value;
        let listDesc = document.querySelector('#listDescInput').value;
        if (listTitle.length >= 3) {
            listData.listsArray[pageNum].title = listTitle;
            listData.listsArray[pageNum].desc = listDesc;
            console.table(listData.listsArray);
        } else {
            newProjectInput('Title is too Short')
        }   
    },
    listDelete: (pageNum) => {
        listData.listsArray.splice(pageNum,1);
    },
    newToDoData: () => {
        let newToDo = document.querySelector('#toDoInput').value;
        let toDoDate = document.querySelector('#toDoDate').value;
        let page = document.querySelector('#newToDo').getAttribute('data-page');
        let toDoPriority = document.querySelector('#toDoPriority').checked;
        let result = listData.findToDo(newToDo,page);
        console.log(toDoPriority);
        switch (true) {
            case newToDo.length < 3: 
                listData.newToDoPrint(page);
                listPagePrint(page);
                newToDoInput('Text is too Short');
                break;
            case result !== -1 :
                listData.newToDoPrint(page);
                listPagePrint(page);
                newToDoInput('To Do Already in Use');
                break;
            default :
                let toDo = listData.toDoFactory(page,newToDo,toDoDate,'',toDoPriority);
                listData.toDoArray.push(toDo);
                listData.newToDoPrint(page);
                listPagePrint(page);
                console.table(listData.toDoArray);
                break;
        }
    },
    findToDo: (text,page) => {
        let result = listData.toDoArray.findIndex(function(arr){
            return arr.text == text && arr.page == page;
        });
        return result;
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
        return {page,text,date,status,priority};
    }
}

export { listData };