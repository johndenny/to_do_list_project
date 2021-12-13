import { newProjectInput } from './newListInput';
import { listData } from './newProjectData';
import { listPagePrint } from './listPagePrint';

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
        case btnData > -1:
            listPagePrint(btnData);
            break;
    }
}

const btnEvents = () => {
    const buttons = document.querySelectorAll('button');
        for (let i=0;i<buttons.length;i++) {
            buttons[i].addEventListener('click', btnFilter);
        }
}

btnEvents();

export { btnEvents };