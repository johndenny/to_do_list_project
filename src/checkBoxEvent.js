import { listData } from './data';
import { btnEvents } from './btnEvents';
import { titleWithToDoPagePrint, listPagePrint, newListPrint } from './pagePrint';

const checkBoxValid = () => {
    const checkbox = document.querySelectorAll('Input#toDo');
        for (let i=0;i<checkbox.length;i++) {
            let id = checkbox[i].getAttribute('data-id');
            let listId = checkbox[i].getAttribute('data-listid');
            let page = checkbox[i].dataset.page;
            let listIndex = listData.findListId(listId, listData.listsArray);
            checkbox[i].addEventListener('change', function() {
                if (this.checked) {
                    let toDo = listData.findId(id, listData.toDoArray);
                    listData.toDoArray[toDo].status = 'complete';
                    listData.toDoArray[toDo].percentComplete = 100;
                    let completeTask = listData.toDoArray.splice(toDo, 1);
                    listData.historyToDo = listData.historyToDo.concat(completeTask);
                    setTimeout(function(){
                        newListPrint();
                        if (page === 'inbox') {
                            listData.inboxToDoSort();
                            titleWithToDoPagePrint('Inbox','inbox');
                        } else if (page === 'week') {
                            listData.thisWeekSort();
                            titleWithToDoPagePrint('This Week', 'week');
                        } else {
                            listData.newToDoPrint(listIndex,listId);
                            listPagePrint(listIndex,listId);
                        }
                        btnEvents();
                    }, 750);
                } else {
                    let toDo = listData.findId(id, listData.toDoArray);
                    listData.toDoArray[toDo].status = 'pending';
                    listData.toDoArray[toDo].percentComplete = 0;
                }
                localStorage.setItem('todoarray', JSON.stringify(listData.toDoArray));
                listData.completeToDoSort(listIndex,listId);
            });
        }
        
    const checklistCheckbox = document.querySelectorAll('Input#checklistToDo');
        for (let i=0;i<checklistCheckbox.length;i++) {
            let checklistId = checklistCheckbox[i].getAttribute('data-checklistid');
            let toDoId = checklistCheckbox[i].getAttribute('data-id');
            let toDoIndex = listData.findId(toDoId,listData.toDoArray);
            let listId = checklistCheckbox[i].getAttribute('data-listid');
            let listIndex = listData.findListId(listId, listData.listsArray);
            let page = checklistCheckbox[i].dataset.page;
            checklistCheckbox[i].addEventListener('change', function() {
                if (this.checked) {
                    let toDo = listData.findChecklistId(checklistId, listData.toDoArray[toDoIndex].checklist);
                    listData.toDoArray[toDoIndex].checklist[toDo].status = 'complete';
                } else {
                    let toDo = listData.findChecklistId(checklistId, listData.toDoArray[toDoIndex].checklist);
                    listData.toDoArray[toDoIndex].checklist[toDo].status = 'pending';
                }
                localStorage.setItem('todoarray', JSON.stringify(listData.toDoArray));
                // listData.checklistCompleteSort(toDoIndex,listIndex,listId);
                // listData.completeToDoSort(listIndex,listId);

                // if (listData.toDoArray[toDoIndex].percentComplete === 100) {
                //     listData.toDoArray[toDoIndex].status = 'complete';
                //     setTimeout(function(){
                //         newListPrint();
                //         if (page === 'inbox') {
                //             listData.inboxToDoSort();
                //             titleWithToDoPagePrint('Inbox','inbox');
                //         } else if (page === 'week') {
                //             listData.thisWeekSort();
                //             titleWithToDoPagePrint('This Week', 'week');
                //         } else {
                //             listData.newToDoPrint(listIndex,listId);
                //             listPagePrint(listIndex,listId);
                //         }
                //         btnEvents();
                //         let completeChecklist = listData.toDoArray.splice(toDoIndex,1);
                //         listData.historyToDo = listData.historyToDo.concat(completeChecklist);
                //     }, 750);
                //     setTimeout(function(){
                //         newListPrint();
                //         if (page === 'inbox') {
                //             listData.inboxToDoSort();
                //             titleWithToDoPagePrint('Inbox','inbox');
                //         } else if (page === 'week') {
                //             listData.thisWeekSort();
                //             titleWithToDoPagePrint('This Week', 'week');
                //         } else {
                //             listData.newToDoPrint(listIndex,listId);
                //             listPagePrint(listIndex,listId);
                //         }
                //         btnEvents();
                //     }, 1500);
                // } else if (listData.toDoArray[toDoIndex].percentComplete < 100) {
                //     listData.toDoArray[toDoIndex].status = 'pending';
                // }  
            });
        }
        
}

export { checkBoxValid };
