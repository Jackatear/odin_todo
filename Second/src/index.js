import "./styles/style.css";

import { createTemplate } from "./createTemplate";
import { createForm } from "./createForm";
import { createCard } from "./createCard";
import { move } from "./move";
import { readLocalStorage } from "./readLocalStorage";

class Task {
  constructor(name) {
    (this.name = name), (this.stage = 1);
  }
}

const tasks = [];
const taskCards = [];

const initialize = () => {
  createTemplate();
  createForm();

  // Check Local Storage
  // If there is local storage we need to add it to the DOM
  readLocalStorage(tasks);

  // Then we need to iterate through this, and create new cards for each task
  // and move them to their specific location!
  tasks.forEach(t => {
    console.log(t)
    taskCards.push(createCard(t.name));
  })
  let x = 0
  tasks.forEach(t => {
    if (t.stage == 0) {
        taskCards[x].remove();
    }
    move(t, taskCards[x]);
    x++;
  })
  


  // Create new Task object and add to tasks []
  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", () => {
    let taskName = document.querySelector("#input-bar").value;
    const task = new Task(taskName);
    tasks.push(task);
    // Add to local storage
    // If local storage is empty, create a local storage key/value pair
    if (localStorage.getItem('storedTasks') == null) {
        const storedTasks = [];
        localStorage.setItem('storedTasks', JSON.stringify(storedTasks));
    }

    // Now we need to add the task to this local storage:
    let storedTasks = JSON.parse(localStorage.getItem('storedTasks'));
    storedTasks.push(task);
    localStorage.setItem('storedTasks', JSON.stringify(storedTasks));

    taskCards.push(createCard(task.name));
  });

  const allSections = document.querySelectorAll(".section");
  allSections.forEach((section) => {
    section.addEventListener("click", (e) => {
      const target = e.target;
      if (target.matches(".check-button")) {
        let card = target.parentNode.parentNode;
        const taskName = target.parentNode.parentNode.textContent.slice(0, -2);

        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i].name == taskName) {
            tasks[i].stage++;

            // We need to update this object in our local storage too now
            let storedTasks = JSON.parse(localStorage.getItem('storedTasks'));
            storedTasks.forEach(storedTask => {
                if (storedTask.name.includes(tasks[i].name)) {
                    storedTask.stage = tasks[i].stage;
                }
            })
            localStorage.setItem('storedTasks', JSON.stringify(storedTasks));

            move(tasks[i], card);
          }
        }

        console.log(tasks);
      }
      if (target.matches(".bin")) {
        let card = target.parentNode.parentNote;
        const taskName = target.parentNode.parentNode.textContent.slice(0, -2);

        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i].name == taskName) {
            tasks[i].stage = 0;

            // We need to update this object in our local storage too now
            let storedTasks = JSON.parse(localStorage.getItem('storedTasks'));
            storedTasks.forEach(storedTask => {
                if (storedTask.name.includes(tasks[i].name)) {
                    storedTask.stage = tasks[i].stage;
                }
            })
            localStorage.setItem('storedTasks', JSON.stringify(storedTasks));





            move(tasks[i], card);
          }
        }
        console.log(tasks);
        target.parentNode.parentNode.remove();
      }
    });
  });
};

initialize();
