(()=>{"use strict";var t={d:(e,o)=>{for(var l in o)t.o(o,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{$:()=>d});const e=()=>{const t=document.querySelectorAll("Input#toDo");for(let e=0;e<t.length;e++){let o=t[e].getAttribute("data-text"),i=t[e].getAttribute("data-page");t[e].addEventListener("change",(function(){if(this.checked){let t=r.findToDo(o,i);r.toDoArray[t].status="complete",r.newToDoPrint(i),l(i),d(),console.table(r.historyToDo)}else{let t=r.findToDo(o,i);r.toDoArray[t].status="",r.newToDoPrint(i),l(i),d(),console.table(r.historyToDo)}}))}},o=t=>{console.log(t);let e=document.createElement("div");e.setAttribute("id","titleCont"),content.appendChild(e);let o=document.createElement("SPAN");e.appendChild(o),o.setAttribute("id","listTitle"),o.innerHTML=r.listsArray[t].title;let l=document.createElement("SPAN");e.appendChild(l),l.setAttribute("id","listdesc"),l.innerHTML=r.listsArray[t].desc;let i=document.createElement("button");i.setAttribute("id","titleEditBtn"),i.setAttribute("data-btn","titleEdit"),i.setAttribute("data-page",t),i.innerHTML="Edit",e.appendChild(i)},l=t=>{console.log(t);const l=document.querySelector("#content");n.removeAllChildNodes(l),o(t);for(let t=0;t<r.selectedToDo.length;t++){let e=document.createElement("INPUT");e.setAttribute("id","toDo"),e.setAttribute("data-text",r.selectedToDo[t].text),e.setAttribute("data-page",r.selectedToDo[t].page),e.setAttribute("type","checkbox"),l.appendChild(e),"complete"==r.selectedToDo[t].status?e.checked=!0:e.checked=!1;let o=document.createElement("label");o.setAttribute("for","toDo"),o.innerHTML=r.selectedToDo[t].status+r.selectedToDo[t].text+r.selectedToDo[t].date+r.selectedToDo[t].priority,l.appendChild(o)}e();let i=document.createElement("button");l.appendChild(i),i.setAttribute("data-btn","newToDo"),i.setAttribute("id","newToDo"),i.setAttribute("data-page",t),i.innerHTML="+ New To-Do"},i=t=>{const e=document.querySelector("#content");let o=document.createElement("INPUT");o.setAttribute("id","toDoInput"),o.setAttribute("type","text"),o.setAttribute("placeholder",t),e.appendChild(o);let l=document.createElement("INPUT");l.setAttribute("id","toDoDate"),l.setAttribute("type","date"),e.appendChild(l);let i=document.createElement("label");i.setAttribute("for","toDoPriority"),i.innerHTML="Priority?",e.appendChild(i);let r=document.createElement("INPUT");r.setAttribute("id","toDoPriority"),r.setAttribute("type","checkbox"),e.appendChild(r);let n=document.createElement("button");n.innerHTML="submit",n.setAttribute("data-btn","submitToDo"),e.appendChild(n)},r={listsArray:[{title:"My Vaction",desc:"I'm going to New York City!"},{title:"My Work Project",desc:"my project to make money."},{title:"My New Hobby",desc:"my new hobby is so cool!"}],toDoArray:[],selectedToDo:[],historyToDo:[],newListData:()=>{let t=document.querySelector("#listTitleInput").value,e=document.querySelector("#listDescInput").value;if(t.length>=3){let o=r.listFactory(t,e);r.listsArray.push(o),console.table(r.listsArray)}else s("Title is too Short")},listEditData:t=>{let e=document.querySelector("#listTitleInput").value,o=document.querySelector("#listDescInput").value;e.length>=3?(r.listsArray[t].title=e,r.listsArray[t].desc=o,console.table(r.listsArray)):s("Title is too Short")},listDelete:t=>{r.listsArray.splice(t,1)},newToDoData:()=>{let t=document.querySelector("#toDoInput").value,e=document.querySelector("#toDoDate").value,o=document.querySelector("#newToDo").getAttribute("data-page"),n=document.querySelector("#toDoPriority").checked,s=r.findToDo(t,o);switch(console.log(n),!0){case t.length<3:r.newToDoPrint(o),l(o),i("Text is too Short");break;case-1!==s:r.newToDoPrint(o),l(o),i("To Do Already in Use");break;default:let a=r.toDoFactory(o,t,e,"",n);r.toDoArray.push(a),r.newToDoPrint(o),l(o),console.table(r.toDoArray)}},findToDo:(t,e)=>r.toDoArray.findIndex((function(o){return o.text==t&&o.page==e})),newToDoPrint:t=>{let e=r.toDoArray.filter((function(e){return e.page==t}));r.selectedToDo=e,console.table(r.selectedToDo)},listFactory:(t,e)=>({title:t,desc:e}),toDoFactory:(t,e,o,l,i)=>({page:t,text:e,date:o,status:l,priority:i})},n={newListPrint:()=>{let t=r.listsArray.length-1;r.newToDoPrint(t),l(t);const e=document.querySelector("#listBtns");n.removeAllChildNodes(e);for(let t=0;t<r.listsArray.length;t++){let o=r.listsArray[t].title,l=document.createElement("button");e.appendChild(l),l.setAttribute("id","listbtn"),l.setAttribute("data-btn",t),l.innerHTML=o,d()}},removeAllChildNodes:t=>{for(;t.firstChild;)t.removeChild(t.firstChild)},editListPrint:t=>{l(t);const e=document.querySelector("#listBtns");n.removeAllChildNodes(e);for(let t=0;t<r.listsArray.length;t++){let o=r.listsArray[t].title,l=document.createElement("button");e.appendChild(l),l.setAttribute("id","listbtn"),l.setAttribute("data-btn",t),l.innerHTML=o,d()}},deleteListPrint:()=>{const t=document.querySelector("#listBtns"),e=document.querySelector("#content");n.removeAllChildNodes(t),n.removeAllChildNodes(e);for(let e=0;e<r.listsArray.length;e++){let o=r.listsArray[e].title,l=document.createElement("button");t.appendChild(l),l.setAttribute("id","listbtn"),l.setAttribute("data-btn",e),l.innerHTML=o,d()}}},s=t=>{const e=document.querySelector("#content");n.removeAllChildNodes(e);let o=document.createElement("INPUT");e.appendChild(o),o.setAttribute("id","listTitleInput"),o.setAttribute("type","text"),o.setAttribute("placeholder","List Title");let l=document.createElement("INPUT");e.appendChild(l),l.setAttribute("id","listDescInput"),l.setAttribute("type","text"),l.setAttribute("placeholder","List Description");let i=document.createElement("button");i.innerHTML="submit",i.setAttribute("data-btn","submit"),i.setAttribute("data-page",t),e.appendChild(i)},a=t=>{let e=t.target.getAttribute("data-btn"),o=t.target.getAttribute("data-page");switch(console.log(e),console.log(o),!0){case"newList"===e:s(),d();break;case"submit"===e:r.newListData(),n.newListPrint(o),d();break;case"submitToDo"===e:r.newToDoData(),d();break;case"submitEdit"===e:r.listEditData(o),n.editListPrint(o);break;case"newToDo"===e:r.newToDoPrint(o),l(o),i("New To Do"),d();break;case e>-1:r.newToDoPrint(e),l(e),d();break;case"titleEdit"===e:(t=>{const e=document.querySelector("#titleCont");n.removeAllChildNodes(e);let o=r.listsArray[t].title,l=r.listsArray[t].desc,i=document.createElement("INPUT");e.appendChild(i),i.setAttribute("id","listTitleInput"),i.setAttribute("type","text"),i.setAttribute("value",o);let s=document.createElement("INPUT");e.appendChild(s),s.setAttribute("id","listDescInput"),s.setAttribute("type","text"),s.setAttribute("value",l);let a=document.createElement("button");a.innerHTML="submit",a.setAttribute("data-btn","submitEdit"),a.setAttribute("data-page",t),e.appendChild(a)})(o),(t=>{let e=document.createElement("button");e.setAttribute("id","titleDeleteBtn"),e.setAttribute("data-btn","listDelete"),e.setAttribute("data-page",t),e.innerHTML="Delete",titleCont.prepend(e)})(o),d();break;case"listDelete"===e:r.listDelete(o),n.deleteListPrint()}},d=()=>{const t=document.querySelectorAll("button");for(let e=0;e<t.length;e++)t[e].addEventListener("click",a)};n.newListPrint(1),d()})();