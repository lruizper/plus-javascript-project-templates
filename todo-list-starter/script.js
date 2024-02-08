let todoTasks = [ "manicure", "use that massage voucher", "go for a walk", "call a friend"]; /** creating a to do list of wellbeing tasks */
let taskStatus=[false,true,false,false] // give a status to each task
const todoList = document.getElementById("todo-list"); // show the tasks in the page
updateTodoList();

function createNewTodoItemElement(task, index) {
    const newTask = document.createElement("li");
    newTask.innerText = task;
    if (taskStatus[index]==true) {
        newTask.classList.add("complete");
    }
    todoList.appendChild(newTask);
    
    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Mark done";
    completeButtonElement.onclick = function() {
        toggleComplete(index);
    };
    newTask.appendChild(completeButtonElement);
    return newTask;
}

function toggleComplete(index) {
    if (taskStatus[index]==false) {
        taskStatus[index]=true;
    } else {
        taskStatus[index]=false;
    }
    // console.log(taskStatus);
    updateTodoList();
}

function addTask() {
    const newTask = document.getElementById("new-task-text");
    const task = newTask.value;
    todoTasks.push(task);
    taskStatus.push(false);
    newTask.value = "";
    updateTodoList();
    
}

function updateTodoList() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    for (const [index, task ] of todoTasks.entries()) {
        const newTask = createNewTodoItemElement (task, index);
        todoList.appendChild(newTask);
    }

}