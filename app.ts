const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [];

function renderTasks(): void {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.title;
    if (task.completed){
        li.style.textDecoration = "line-through" ;
    }

    li.addEventListener("click", () => {
        toggleTask(task.id);
    });

    function toggleTask(id: number): void {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  renderTasks();
}

    taskList.appendChild(li);
  });
}
   
function addTask(): void {
  const title = taskInput.value.trim();
  
  console.log(title);

  if (title === "") {
    alert("Please enter a task");
    return;
  }

  const newTask: Task = {
    id: Date.now(),
    title: title,
    completed: false
  };

  tasks.push(newTask);
  taskInput.value = "";
  renderTasks();
}

addBtn.addEventListener("click", addTask);
