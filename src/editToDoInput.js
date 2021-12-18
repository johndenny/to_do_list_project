const editToDoInput = (placeholder) => {
    //To Do Input
    let toDoInput = document.createElement('INPUT');
    toDoInput.setAttribute('id', 'toDoInput');
    toDoInput.setAttribute('type', 'text');
    toDoInput.setAttribute('placeholder', placeholder);
    toDoInputCont.appendChild(toDoInput);

    //Date
    let date = document.createElement('INPUT');
    date.setAttribute('id', 'toDoDate');
    date.setAttribute('type', 'date');
    toDoInputCont.appendChild(date);

    //Priority
    let label = document.createElement('label');
    label.setAttribute('for','toDoPriority');
    label.innerHTML = 'Priority?';
    toDoInputCont.appendChild(label);
    let priority =document.createElement('INPUT');
    priority.setAttribute('id', 'toDoPriority');
    priority.setAttribute('type', 'checkbox');
    toDoInputCont.appendChild(priority);
    

    //Button
    let submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'submit';
    submitBtn.setAttribute('data-btn', 'submitToDo');
    toDoInputCont.appendChild(submitBtn);
}

export { editToDoInput };