import { listPagePrint } from './listPagePrint';
import { listData } from './newProjectData';
import { btnEvents } from './index';

const checkBoxValid = () => {
    const checkbox = document.querySelectorAll('Input#toDo');
        for (let i=0;i<checkbox.length;i++) {
            let id = checkbox[i].getAttribute('data-id');
            let listId = checkbox[i].getAttribute('data-listid');
            let listIndex = listData.findListId(listId, listData.listsArray);
            checkbox[i].addEventListener('change', function() {
                if (this.checked) {
                    let toDo = listData.findId(id, listData.toDoArray);
                    listData.toDoArray[toDo].status = 'complete';
                    // listData.newToDoPrint(listIndex,listId);
                    // listPagePrint(listIndex, listId);
                    // btnEvents();
                    console.table(listData.toDoArray);
                    console.table(listData.selectedToDo);
                } else {
                    let toDo = listData.findId(id, listData.toDoArray);
                    listData.toDoArray[toDo].status = 'pending';
                    // listData.newToDoPrint(listIndex,listId);
                    // listPagePrint(listIndex, listId);
                    // btnEvents();
                    console.table(listData.toDoArray);
                    console.table(listData.selectedToDo);
                }
                console.log(listId,listIndex);
                listData.completeToDoSort(listIndex,listId);
            });
        }
}

export { checkBoxValid };
