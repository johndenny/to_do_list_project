import { listData } from './data';
import { layoutPrint } from './pagePrint';
import './style.css';

// let dummyList0 = listData.listFactory('#00ad54','Errands',"Shopping lists.",'');
// listData.listsArray.push(dummyList0);
let dummyList1 = listData.listFactory('#2b00ff','Work','Tasks for work.','');
listData.listsArray.push(dummyList1);
let dummyList3 = listData.listFactory('#ffbb00','Home','Tasks around the house.','');
listData.listsArray.push(dummyList3);

// let dummy0 = listData.toDoFactory(listData.listsArray[0].listId,'Do this','',[],'2021-12-21',false);
// listData.toDoArray.push(dummy0);
// let dummy1 = listData.toDoFactory(listData.listsArray[0].listId,'Do that thing','',[],'2021-12-22',false);
// listData.toDoArray.push(dummy1);
// let dummy2 = listData.toDoFactory(listData.listsArray[0].listId,'Find that','',[],'2021-12-23',false);
// listData.toDoArray.push(dummy2);
// let dummy3 = listData.toDoFactory(listData.listsArray[0].listId,'Buy that thing','',[],'2021-12-24',false);
// listData.toDoArray.push(dummy3);
// let dummy4 = listData.toDoFactory(listData.listsArray[1].listId,'Go to this place','',[],'2021-12-25',false);
// listData.toDoArray.push(dummy4);
// let dummy5 = listData.toDoFactory(listData.listsArray[1].listId,'Fill out these forms','',[],'2021-12-26',false);
// listData.toDoArray.push(dummy5);
// let dummy6 = listData.toDoFactory(listData.listsArray[1].listId,'Go to this meeting','',[],'2021-12-27',false);
// listData.toDoArray.push(dummy6);
// let dummy7 = listData.toDoFactory(listData.listsArray[2].listId,'Buy things for that thing','',[],'2021-12-28',false);
// listData.toDoArray.push(dummy7);
// let dummy8 = listData.toDoFactory(listData.listsArray[2].listId,'Mail those packages','',[],'2021-12-21',false);
// listData.toDoArray.push(dummy8);
// let dummy9 = listData.toDoFactory(listData.listsArray[2].listId,'Research that thing','',[],'2021-12-22',false);
// listData.toDoArray.push(dummy9);
// let dummy11 = listData.toDoFactory(listData.listsArray[2].listId,'Find another place','',[],'2021-12-23',false);
// listData.toDoArray.push(dummy11);
// let dummy12 = listData.toDoFactory(listData.listsArray[1].listId,'Find an alternative to this','',[],'2021-12-25',false);
// listData.toDoArray.push(dummy12);

if(!localStorage.getItem('listsarray')) {
    localStorage.setItem('listsarray', JSON.stringify(listData.listsArray));
    localStorage.setItem('todoarray', JSON.stringify(listData.toDoArray));
  } else {
    let currentLists = JSON.parse(localStorage.getItem('listsarray'));
    listData.listsArray = currentLists;
    let currentToDo = JSON.parse(localStorage.getItem('todoarray'));
    listData.toDoArray = currentToDo;
}

listData.dateUpdate();
console.table(listData.toDoArray);

layoutPrint();

