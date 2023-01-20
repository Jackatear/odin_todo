const readLocalStorage = (tasks) => {
    if (localStorage.getItem('storedTasks') != null) {
        let storedTasks = JSON.parse(localStorage.getItem('storedTasks'));
        storedTasks.forEach(task => {
            tasks.push(task);
        })
    }
}

export { readLocalStorage };