const createTemplate = () => {
    const body = document.querySelector('body');
    const appContainer = document.createElement('div')
    appContainer.classList.add('app-container');
    body.appendChild(appContainer)

    // todo
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.classList.add('card')


    // doing
    const doing = document.createElement('div')
    doing.classList.add('doing')
    doing.classList.add('card');


    // done
    const done = document.createElement('div');
    done.classList.add('done')
    done.classList.add('card')

    appContainer.appendChild(todo)
    appContainer.appendChild(doing)
    appContainer.appendChild(done)

    const headings = ['todo', 'doing', 'done']
    const cards = [todo, doing, done]
    for (let i = 0; i < cards.length; i++){
        const head = document.createElement('h1');
        head.textContent = headings[i];
        head.classList.add('heading');
        head.classList.add(headings[i]);
        cards[i].appendChild(head);
    }

    const taskList = document.createElement('div');
    taskList.classList.add('task-list');
    todo.appendChild(taskList);
    todo.classList.add('section');

    const doingTaskList = document.createElement('div');
    doingTaskList.classList.add('doing-task-list');
    doing.appendChild(doingTaskList);
    doing.classList.add('section');

    const doneTaskList = document.createElement('div');
    doneTaskList.classList.add('done-task-list');
    done.appendChild(doneTaskList);
    done.classList.add('section');

}

export { createTemplate }