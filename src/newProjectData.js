import { newListPrintCont } from './newListPrint';
import { listPagePrint } from './listPagePrint';
import { newToDoInput } from './newToDoInput';

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
        let list = listData.listFactory(newListTitle,newListDesc);
        listData.listsArray.push(list);
        console.table(listData.listsArray);
        newListPrintCont.newListPrint();
    },
    newToDoData: () => {
        let newToDo = document.querySelector('#toDoInput').value;
        let toDoDate = document.querySelector('#toDoDate').value;
        let page = document.querySelector('#newToDo').getAttribute('data-page');
        let result = listData.findToDo(newToDo,page);
        console.log(result);
        if (result == -1) {
            let toDo = listData.toDoFactory(page,newToDo,toDoDate);
            listData.toDoArray.push(toDo);
            listData.newToDoPrint(page);
            listPagePrint(page);
            console.table(listData.toDoArray);
        } else {
            listData.newToDoPrint(page);
            listPagePrint(page);
            newToDoInput('To Do Already in Use','red');
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
    toDoFactory: (page,text,date) => {
        return {page,text,date};
    }
}

export { listData };