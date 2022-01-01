import { listPagePrint } from './listPagePrint';
import { listData } from './newProjectData';
import { btnEvents } from './index';
import { inboxPagePrint, titleWithToDoPagePrint } from './inboxPagePrint';

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
                    listData.toDoArray[toDo].percentComplete = 100;
                    console.table(listData.toDoArray);
                    console.table(listData.selectedToDo);
                } else {
                    let toDo = listData.findId(id, listData.toDoArray);
                    listData.toDoArray[toDo].status = 'pending';
                    listData.toDoArray[toDo].percentComplete = 0;
                    console.table(listData.toDoArray);
                    console.table(listData.selectedToDo);
                }
                console.log(listId,listIndex);
                listData.completeToDoSort(listIndex,listId);
            });
        }
        
    const checklistCheckbox = document.querySelectorAll('Input#checklistToDo');
        for (let i=0;i<checklistCheckbox.length;i++) {
            let checklistId = checklistCheckbox[i].getAttribute('data-checklistid');
            let toDoId = checklistCheckbox[i].getAttribute('data-id');
            let toDoIndex = listData.findId(toDoId,listData.toDoArray);
            let listId = checkbox[i].getAttribute('data-listid');
            let listIndex = listData.findListId(listId, listData.listsArray);
            checklistCheckbox[i].addEventListener('change', function() {
                if (this.checked) {
                    let toDo = listData.findChecklistId(checklistId, listData.toDoArray[toDoIndex].checklist);
                    listData.toDoArray[toDoIndex].checklist[toDo].status = 'complete';
                    console.table(listData.toDoArray);
                    console.table(listData.selectedToDo);
                } else {
                    let toDo = listData.findChecklistId(checklistId, listData.toDoArray[toDoIndex].checklist);
                    listData.toDoArray[toDoIndex].checklist[toDo].status = 'pending';
                    console.table(listData.toDoArray);
                    console.table(listData.selectedToDo);
                }
                listData.checklistCompleteSort(toDoIndex,listIndex,listId);
                listData.completeToDoSort(listIndex,listId);

                if (listData.toDoArray[toDoIndex].percentComplete === 100) {
                    listData.toDoArray[toDoIndex].status = 'complete';
                } else if (listData.toDoArray[toDoIndex].percentComplete < 100) {
                    listData.toDoArray[toDoIndex].status = 'pending';
                }
                let inboxTitle = document.querySelector('#title');
                if (inboxTitle.innerText === 'Inbox') {
                    titleWithToDoPagePrint('Inbox');
                } else {
                    listPagePrint(listIndex,listId);
                }
                btnEvents();
            });
        }
}

export { checkBoxValid };
