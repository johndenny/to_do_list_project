import { newProjectInput } from './newListInput';
import { listData } from './newProjectData';
import { listPagePrint } from './listPagePrint';
import { newListPrintCont } from './newListPrint';
import { newToDoInput } from './newToDoInput';
import { titlePage } from './titlePagePrint';
import { editToDoInput } from './editToDoInput';

const btnFilter = (event) => {
    let btnData = event.target.getAttribute('data-btn');
    let btnPage = event.target.getAttribute('data-page');
    console.log(btnData);
    switch (true) {
        case btnData === 'newList':
            newProjectInput('List Title');
            btnEvents();
            break;
        case btnData === 'submit':
            listData.newListData();
            newListPrintCont.newListPrint(btnPage);
            btnEvents();
            break;
        case btnData === 'saveToDo':
            listData.newToDoData(btnPage);
            btnEvents();
            break;
        case btnData === 'titleSave':
            listData.listEditData(btnPage)
            newListPrintCont.editListPrint();
            break;
        case btnData === 'descSave':
            listData.listEditDescData(btnPage);
            btnEvents();
            break;        
        case btnData === 'saveEditToDo':
            listData.editToDoData(btnPage);
            btnEvents();
            break;    
        case btnData === 'newToDo':
            newToDoInput(btnPage);
            btnEvents();
            break;
        case btnData > -1:
            listData.newToDoPrint(btnData);
            listPagePrint(btnData);
            btnEvents();
            break;
        case btnData === 'titleEditBtn':
            titlePage.editListTitleInputPrint(btnPage);
            btnEvents();
            break;
        case btnData === 'descEditBtn':
            titlePage.editListDescInputPrint(btnPage);
            btnEvents();
            break;

        case btnData === 'listDelete':
            listData.listDelete(btnPage);
            newListPrintCont.deleteListPrint();
            break;
        case btnData ==='toDoEdit':
            let index = event.target.getAttribute('data-index');
            editToDoInput(index,btnPage);
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

newListPrintCont.deleteListPrint();
btnEvents();
let dummy0 = listData.toDoFactory('0','do this','2021-12-17','',false);
listData.toDoArray.push(dummy0);
let dummy1 = listData.toDoFactory('0','do that thing','2021-12-18','',false);
listData.toDoArray.push(dummy1);
let dummy2 = listData.toDoFactory('0','find that','2021-12-17','',false);
listData.toDoArray.push(dummy2);
let dummy3 = listData.toDoFactory('1','buy that thing','2021-12-17','',false);
listData.toDoArray.push(dummy3);
let dummy4 = listData.toDoFactory('1','go to this place','2021-12-17','',false);
listData.toDoArray.push(dummy4);
let dummy5 = listData.toDoFactory('1','fill out these forms','2021-12-17','',false);
listData.toDoArray.push(dummy5);
let dummy6 = listData.toDoFactory('1','go to this meeting','2021-12-17','',false);
listData.toDoArray.push(dummy6);
let dummy7 = listData.toDoFactory('2','buy things for that thing','2021-12-17','',false);
listData.toDoArray.push(dummy7);
let dummy8 = listData.toDoFactory('2','mail those packages','2021-12-17','',false);
listData.toDoArray.push(dummy8);
let dummy9 = listData.toDoFactory('2','research that thing','2021-12-17','',false);
listData.toDoArray.push(dummy9);
let dummy11 = listData.toDoFactory('2','find another place','2021-12-17','',false);
listData.toDoArray.push(dummy11);
let dummy12 = listData.toDoFactory('0','find an alternative to this','2021-12-17','',false);
listData.toDoArray.push(dummy12);

console.log(new Date().toISOString().slice(0,10).split('-').join(''));

export { btnEvents };