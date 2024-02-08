/** creating a to do list of wellbeing tasks */
let todoTasks = [ "manicure", "use that massage voucher", "go for a walk", "call a friend"];
// show the tasks in the page
const todoList = document.getElementById("todo-list");

/** introducing states */
// give a status to each task
let taskStatus=[false,true,false,false]
// iterate through the tasks using their index and create a new list item for each task
for (const [index, task ] of todoTasks.entries()) {
    const newTask = document.createElement("li");
    newTask.innerText = task;
// if the task is complete, add the class "complete" to the list item
// this will add the strikethrough effect defined in the CSS file
    if (taskStatus[index]==true) {
        newTask.classList.add("complete");
    }
// add the list item to the todo list to be shown in the page
    todoList.appendChild(newTask);
// add a button to mark the task as complete
    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    newTask.appendChild(completeButtonElement);
}


function addTask() {}

function updateTodoList() {}

function createNewTodoItemElement(task, index) {}

function toggleComplete(index) {}
