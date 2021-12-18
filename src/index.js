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
            listData.newToDoData();
            btnEvents();
            break;
        case btnData === 'submitEdit':
            listData.listEditData(btnPage)
            newListPrintCont.editListPrint(btnPage);
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

export { btnEvents };