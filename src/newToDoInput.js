const newToDoInput = (placeholder) => {
    const div = document.querySelector('#content');

    //To Do Input
    let toDoInput = document.createElement('INPUT');
    toDoInput.setAttribute('id', 'toDoInput');
    toDoInput.setAttribute('type', 'text');
    toDoInput.setAttribute('placeholder', placeholder);
    div.appendChild(toDoInput);

    //Date
    let date = document.createElement('INPUT');
    date.setAttribute('id', 'toDoDate');
    date.setAttribute('type', 'date');
    div.appendChild(date);

    //Priority
    let label = document.createElement('label');
    label.setAttribute('for','toDoPriority');
    label.innerHTML = 'Priority?';
    div.appendChild(label);
    let priority =document.createElement('INPUT');
    priority.setAttribute('id', 'toDoPriority');
    priority.setAttribute('type', 'checkbox');
    div.appendChild(priority);
    

    //Button
    let submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'submit';
    submitBtn.setAttribute('data-btn', 'submitToDo');
    div.appendChild(submitBtn);
}

export { newToDoInput };