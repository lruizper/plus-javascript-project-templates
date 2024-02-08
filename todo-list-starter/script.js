let myPendingTasks = ["book massage", "get haircut", "go for a walk"];
const todoList = document.getElementById("todo-list-items");

let task = document.getElementById("todo-list-items");
for (const task of myPendingTasks) {
    let itemElement = document.createElement("li");
    itemElement.innerText = task;
    todoList.appendChild(itemElement);
}

function updateTodoList() {
    todoList.innerHTML = "";
    for (const task of myPendingTasks) {
        const listItem = document.createElement("li");
        listItem.innerText = task;
        todoList.appendChild(listItem);
    }
}

function addTask() {
    let input = document.getElementById("new-task-text");
    const newTask = input.value;
    myPendingTasks.push(newTask);
    updateTodoList();
}



function createNewTodoItemElement(task, index) {}

function toggleComplete(index) {}
