const newProjectInput = () => {
    const div = document.querySelector('#content');

    // Porject Name & Desc Input
    let titleInput = document.createElement('INPUT');
    div.appendChild(titleInput);
    titleInput.setAttribute('id', 'listTitleInput')
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'New Project Name');
    let descInput = document.createElement('INPUT');
    div.appendChild(descInput);
    descInput.setAttribute('id', 'listDescInput');
    descInput.setAttribute('type', 'text');
    descInput.setAttribute('placeholder', 'New Project Description');
    let submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'submit';
    submitBtn.setAttribute('data-btn', 'submit');
    div.appendChild(submitBtn);
}

export { newProjectInput };