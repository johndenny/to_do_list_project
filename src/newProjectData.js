import { newListPrintCont } from './newListPrint';

const listData = {
    listsArray: [],
    newListData: () => {
        let newListTitle = document.querySelector('#listTitleInput').value;
        let newListDesc = document.querySelector('#listDescInput').value;
        let project1 = listData.projectFactory(newListTitle,newListDesc);
        listData.listsArray.push(project1);
        console.table(listData.listsArray);
        newListPrintCont.newListPrint();
    },
    projectFactory: (title,desc) => {
        return {title,desc};
    },
}

export { listData };