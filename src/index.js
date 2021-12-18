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
            newProjectInput('List Title');
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
            newListPrintCont.editListPrint(btnPage);
            break;
        case btnData === 'newToDo':
            // listData.newToDoPrint(btnPage);
            // listPagePrint(btnPage);
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
            titlePage.titleDelete(btnPage);
            btnEvents();
            break;
        case btnData === 'listDelete':
            listData.listDelete(btnPage);
            newListPrintCont.deleteListPrint();
            break;
        case btnData ==='toDoEdit':
            let btnText = event.target.getAttribute('data-text');
            let results = listData.findToDo(btnText,btnPage);
            console.log(results)


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