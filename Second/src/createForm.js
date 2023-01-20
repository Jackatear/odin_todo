const createForm = () => {
    const todo = document.querySelector('.todo')

    const formBar = document.createElement('div');
    formBar.classList.add('form-bar')
    todo.appendChild(formBar);

    const inputBar = document.createElement('input');
    inputBar.type = 'text'
    inputBar.placeholder = 'TASK';
    inputBar.classList.add('input-bar')
    inputBar.id = 'input-bar';
    inputBar.maxLength = '35';
    formBar.appendChild(inputBar);

    const submit = document.createElement('button')
    submit.textContent = '+';
    submit.classList.add('submit-button');

    formBar.appendChild(submit);

    
}

export { createForm }