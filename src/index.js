import { newProjectInput } from './newListInput';
import { listData } from './newProjectData';
import { listPagePrint } from './listPagePrint';
import { newListPrintCont } from './newListPrint';
import { newToDoInput } from './newToDoInput';
import { titlePage } from './titlePagePrint';

const btnFilter = (event) => {
    let btnData = event.target.getAttribute('data-btn');
    let btnPage = event.target.getAttribute('data-page');
    console.log(btnData);
    console.log(btnPage);
    switch (true) {
        case btnData === 'newList':
            newProjectInput('List Title','List Description');
            btnEvents();
            break;
        case btnData === 'submit':
            listData.newListData();
            newListPrintCont.newListPrint(btnPage);
            btnEvents();
            break;
        case btnData === 'submitToDo':
            listData.newToDoData();
            btnEvents();
            break;
        case btnData === 'submitEdit':
            listData.listEditData(btnPage)
            newListPrintCont.newListPrint(btnPage);
            break;
        case btnData === 'newToDo':
            listData.newToDoPrint(btnPage);
            listPagePrint(btnPage);
            newToDoInput('New To Do');
            btnEvents();
            break;
        case btnData > -1:
            listData.newToDoPrint(btnData);
            listPagePrint(btnData);
            btnEvents();
            break;
        case btnData === 'titleEdit':
            titlePage.titleEditInput(btnPage);
            btnEvents();

    }
}

const btnEvents = () => {
    const buttons = document.querySelectorAll('button');
        for (let i=0;i<buttons.length;i++) {
            buttons[i].addEventListener('click', btnFilter);
        }
}

newListPrintCont.newListPrint(1);
btnEvents();

export { btnEvents };