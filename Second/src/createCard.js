const createCard = (task) => {
  const todoTaskList = document.querySelector(".task-list");

  const taskCard = document.createElement("div");
  taskCard.id = "task-card";
  taskCard.classList.add("task-card");

  const taskCardText = document.createElement("p");
  taskCardText.textContent = task;
  taskCard.appendChild(taskCardText);
  todoTaskList.appendChild(taskCard);

  const checkButton = document.createElement("p");
  checkButton.id = "check-button";
  checkButton.classList.add("check-button");
  checkButton.textContent = "✅";

  const bin = document.createElement("p");
  bin.id = "bin";
  bin.classList.add("bin");
  bin.textContent = "❌";

  const actionContainer = document.createElement("div");
  actionContainer.classList.add("action-container");

  taskCard.appendChild(actionContainer);
  actionContainer.appendChild(checkButton);
  actionContainer.appendChild(bin);

  return taskCard;
};

export { createCard };
