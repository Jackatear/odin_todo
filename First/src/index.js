import './styles/style.css'

import { createTemplate } from './createTemplate';
import { createForm } from './createForm';
import { createCard } from './createCard';
import { move } from './move';


class Task {
    constructor(name) {
        this.name = name,
        this.stage = 1
    }
}

const tasks = [];
const taskCards = []


const initialize = () => {
    
    createTemplate();
    createForm();

    // Create new Task object and add to tasks []
    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', () => {
        let taskName = document.querySelector('#input-bar').value;
        const task = new Task(taskName)
        tasks.push(task);
        taskCards.push(createCard(task.name));
    })



    const allSections = document.querySelectorAll('.section');
    allSections.forEach(section => {
        section.addEventListener('click', (e) => {
            const target = e.target;
            if (target.matches('.check-button')){
                let card = target.parentNode.parentNode;
                const taskName = target.parentNode.parentNode.textContent.slice(0,-2);

                for (let i = 0; i < tasks.length; i++){
                    if (tasks[i].name == taskName){
                        tasks[i].stage++;
                        move(tasks[i], card);
                    }
                }

                console.log(tasks);
            }
            if (target.matches('.bin')){
                let card = target.parentNode.parentNote;
                const taskName = target.parentNode.parentNode.textContent.slice(0,-2);

                for (let i = 0; i < tasks.length; i++){
                    if (tasks[i].name == taskName){
                        tasks[i].stage = 0;
                        move(tasks[i], card)
                    }
                }
                console.log(tasks);
                target.parentNode.parentNode.remove();
            }
        })
    })
}

initialize();



