import { listPagePrint } from './listPagePrint';
import { listData } from './newProjectData';
import { btnEvents } from './index';

const checkBoxValid = () => {
    const checkbox = document.querySelectorAll('Input#toDo');
        for (let i=0;i<checkbox.length;i++) {
            let text = checkbox[i].getAttribute('data-text');
            let page = checkbox[i].getAttribute('data-page');
            checkbox[i].addEventListener('change', function() {
                if (this.checked) {
                    let toDo = listData.findToDo(text,page);
                    listData.historyToDo.push(listData.toDoArray[toDo]);
                    listData.toDoArray.splice(toDo,1);
                    listData.newToDoPrint(page);
                    listPagePrint(page);
                    btnEvents();
                    console.table(listData.historyToDo);
                } else {
                    console.log('unchecked')
                }
            });
        }
}

export { checkBoxValid };
