/** creating a to do list of wellbeing tasks */
let todoTasks = [ "manicure", "use that massage voucher", "go for a walk", "call a friend"];
// show the tasks in the page
const todoList = document.getElementById("todo-list");

for (const task of todoTasks) {
    const newTodoTaskTextElement =document.createElement("p"); // why creating this element?
    newTodoTaskTextElement.innerText= task;
    
    const newTask = document.createElement("li");
    newTask.innerText = task;
    todoList.appendChild(newTask);
}


function addTask() {}

function updateTodoList() {}

function createNewTodoItemElement(task, index) {}

function toggleComplete(index) {}
