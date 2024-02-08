/** creating a to do list of wellbeing tasks */
let todoTasks = [ "manicure", "use that massage voucher", "go for a walk", "call a friend"];
// show the tasks in the page
const todoList = document.getElementById("todo-list");

/** introducing states */
let taskStatus=[false,true,false,false]

for (const [index, task ] of todoTasks.entries()) {
    const newTask = document.createElement("li");
    newTask.innerText = task;

    if (taskStatus[index]==true) {
        newTask.classList.add("completed");
    }

    todoList.appendChild(newTask);
}


function addTask() {}

function updateTodoList() {}

function createNewTodoItemElement(task, index) {}

function toggleComplete(index) {}
