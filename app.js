"use strict";
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let tasks = [];
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task.title;
        if (task.completed) {
            li.style.textDecoration = "line-through";
        }
        li.addEventListener("click", () => {
            toggleTask(task.id);
        });
        function toggleTask(id) {
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
function addTask() {
    const title = taskInput.value.trim();
    console.log(title);
    if (title === "") {
        alert("Please enter a task");
        return;
    }
    const newTask = {
        id: Date.now(),
        title: title,
        completed: false
    };
    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
}
addBtn.addEventListener("click", addTask);
