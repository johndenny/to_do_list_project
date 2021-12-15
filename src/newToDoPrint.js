import { listData } from './newProjectData';

const newToDoPrint = (pageNum) => {
    let result = listData.toDoArray.filter(function(pg){
        return pg.page == pageNum;
    });
    console.log(result);
}

export { newToDoPrint };