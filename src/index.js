import { newProjectInput } from './newListInput';
import { listData } from './newProjectData';
import { listPagePrint } from './listPagePrint';
import { newListPrintCont } from './newListPrint';
import { newToDoInput } from './newToDoInput';

const btnFilter = (event) => {
    let btnData = event.target.getAttribute('data-btn');
    
    console.log(btnData);
    switch (true) {
        case btnData === 'newList':
            newProjectInput();
            btnEvents();
            break;
        case btnData === 'submit':
            listData.newListData();
            break;
        case btnData === 'submitToDo':
            listData.newToDoData();
            btnEvents();
            break;
        case btnData === 'newToDo':
            let btnPage = document.querySelector('#newToDo').getAttribute('data-page');
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
    }
}

const btnEvents = () => {
    const buttons = document.querySelectorAll('button');
        for (let i=0;i<buttons.length;i++) {
            buttons[i].addEventListener('click', btnFilter);
        }
}

newListPrintCont.newListPrint();
btnEvents();

export { btnEvents };