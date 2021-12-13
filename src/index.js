import { newProjectInput } from './newListInput';
import { listData } from './newProjectData';

const btnFilter = (event) => {
    let btnData = event.target.getAttribute('data-btn');
    console.log(btnData);
    switch (btnData) {
        case 'newList':
            newProjectInput();
            btnEvents();
            break;
        case 'submit':
            listData.newListData();
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