import { listPagePrint } from './listPagePrint';
import { listData } from './newProjectData';
import { btnEvents } from './index';

const checkBoxValid = () => {
    const checkbox = document.querySelectorAll('Input#toDo');
        for (let i=0;i<checkbox.length;i++) {
            let id = checkbox[i].getAttribute('data-id');
            let page = checkbox[i].getAttribute('data-page');
            checkbox[i].addEventListener('change', function() {
                if (this.checked) {
                    let toDo = listData.findId(id);
                    listData.toDoArray[toDo].status = 'complete';
                    listData.newToDoPrint(page);
                    listPagePrint(page);
                    btnEvents();
                    console.table(listData.historyToDo);
                } else {
                    let toDo = listData.findId(id);
                    listData.toDoArray[toDo].status = '';
                    listData.newToDoPrint(page);
                    listPagePrint(page);
                    btnEvents();
                    console.table(listData.historyToDo);
                }
            });
        }
}

export { checkBoxValid };
