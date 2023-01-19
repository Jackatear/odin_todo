const move = (task, card) => {
    const doingTaskList = document.querySelector('.doing-task-list')
    const doneTaskList = document.querySelector('.done-task-list');

    if (task.stage == 2){
        console.log(card)
        doingTaskList.appendChild(card);
    }
    if (task.stage == 3){
        console.log(card)
        doneTaskList.appendChild(card)
    }

    if (task.stage == 0){
        console.log(card)
    }
}

export { move };