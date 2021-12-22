import { listData } from "./newProjectData";
import { newListPrintCont } from "./newListPrint";
import { listPagePrint } from "./listPagePrint";
import { titlePage } from "./titlePagePrint";
import { toDoListPrint } from "./toDoListPrint";
import { checkBoxValid } from "./checkBoxEvent";

const upcomingPagePrint = () => {
    const content = document.querySelector('#content');
    newListPrintCont.removeAllChildNodes(content);
    let upcomingCont = document.createElement('div');
    upcomingCont.setAttribute('id', 'upcomingCont');
    content.appendChild(upcomingCont);

    for (let i = 0; i < listData.listsArray.length; i++) {
        listData.newToDoPrint(i,listData.listsArray[i].listId);
        let listsCont = document.createElement('div');
        listsCont.setAttribute('id','listCont'+i);
        upcomingCont.appendChild(listsCont);
        let listDeleteBtn = document.createElement('button');
        listDeleteBtn.setAttribute('id', 'listDeleteBtn');
        listDeleteBtn.setAttribute('data-btn', 'listDelete');
        listDeleteBtn.setAttribute('data-listid', listData.listsArray[i].listId);
        listDeleteBtn.innerText = 'delete';
        listsCont.appendChild(listDeleteBtn);

        let titleCont = document.createElement('div');
        titleCont.setAttribute('id', 'titleCont');
        listsCont.appendChild(titleCont);
        let title = document.createElement('H3');
        titleCont.appendChild(title);
        title.setAttribute('id', 'listTitle');
        title.innerHTML = listData.listsArray[i].title;
        let editBtn = document.createElement('button');
        editBtn.setAttribute('id','titleEditBtn');
        editBtn.setAttribute('data-btn','titleEditBtn');
        editBtn.setAttribute('data-listId', listData.listsArray[i].listId);
        editBtn.innerHTML = 'Edit';
        title.appendChild(editBtn);
        let descPara = document.createElement('P');
        titleCont.appendChild(descPara);
        descPara.setAttribute('id','listDesc');
        let listDesc = listData.listsArray[i].desc
        if (listDesc === '') {
            descPara.innerHTML = 'Description';
        } else {
            descPara.innerHTML = listDesc;
        }
        let descEditBtn = document.createElement('button');
        descEditBtn.setAttribute('id','descEditBtn');
        descEditBtn.setAttribute('data-btn','descEditBtn');
        descEditBtn.setAttribute('data-listid', listData.listsArray[i].listId);
        descEditBtn.innerHTML = 'Edit';
        descPara.appendChild(descEditBtn);
        let descErrCont = document.createElement('div');
        descErrCont.setAttribute('id', 'descErrCont');
        descPara.appendChild(descErrCont);
        let titleErrCont = document.createElement('div');
        titleErrCont.setAttribute('id', 'titleErrCont');
        title.appendChild(titleErrCont);

        // ToDo Container
        let toDoCont = document.createElement('div');
        toDoCont.setAttribute('id', 'toDoCont'+i);
        listsCont.appendChild(toDoCont);

        for (let i = 0; i < listData.selectedToDo.length; i++) {
            let text = document.createElement('P');
            text.setAttribute('id',`toDoText`);
            text.innerHTML = listData.selectedToDo[i].text;
            toDoCont.appendChild(text);
            let toDo = document.createElement('INPUT');
            toDo.setAttribute('id','toDo');
            toDo.setAttribute('data-id', listData.selectedToDo[i].id);
            toDo.setAttribute('data-listid', listData.selectedToDo[i].listId)
            toDo.setAttribute('type','checkbox')
            text.prepend(toDo);
            if (listData.selectedToDo[i].status == 'complete') {
                toDo.checked = true;
            } else {
                toDo.checked = false;
            }
            let editBtn = document.createElement('button');
            editBtn.setAttribute('id','titleEditBtn');
            editBtn.setAttribute('data-btn','toDoEdit');
            editBtn.setAttribute('data-id', listData.selectedToDo[i].id);
            editBtn.setAttribute('data-listid', listData.selectedToDo[i].listId)
            editBtn.setAttribute('data-index', i);
            editBtn.innerHTML = 'Edit';
            text.appendChild(editBtn);
        }
        checkBoxValid();
        
        //New to-do Button
        let btn = document.createElement('button');
        listsCont.appendChild(btn);
        btn.setAttribute('data-btn', 'newToDo');
        btn.setAttribute('id', 'newToDo')
        btn.setAttribute('data-listid', listData.listsArray[i].listId);
        btn.innerHTML = '+ New To-Do';
        }
}

export { upcomingPagePrint };