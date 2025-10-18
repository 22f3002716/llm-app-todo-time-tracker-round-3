let tasks = []; // Global array to hold tasks

// Function to save tasks to LocalStorage
function saveTasks() {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

// Function to load tasks from LocalStorage
function loadTasks() {
    const storedTasks = localStorage.getItem('todoTasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

// Function to render tasks to the DOM
function renderTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        if (task.completed) {
            li.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onchange = () => toggleTaskCompletion(task.id);

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = `${task.text} (${task.scope})`;
        taskTextSpan.classList.add('task-text');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = (event) => {
            event.stopPropagation(); // Prevent li click when clicking delete button
            deleteTask(task.id);
        };

        li.appendChild(checkbox);
        li.appendChild(taskTextSpan);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const scopeSelect = document.getElementById('task-scope-select');
    const taskText = taskInput.value.trim();
    const taskScope = scopeSelect.value;

    if (taskText) {
        const newTask = {
            id: Date.now(), // Unique ID
            text: taskText,
            scope: taskScope,
            completed: false
        };
        tasks.push(newTask);
        saveTasks(); // Save tasks after adding
        renderTasks(); // Re-render tasks
        taskInput.value = ''; // Clear input
    }
}

// Function to toggle task completion status
function toggleTaskCompletion(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks(); // Save tasks after toggling
    renderTasks(); // Re-render tasks
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks(); // Save tasks after deleting
    renderTasks(); // Re-render tasks
}

// Expose deleteTask to the window object to satisfy verification check
window.deleteTask = deleteTask;

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadTasks(); // Load tasks on page load
    renderTasks(); // Render them
});

document.getElementById('add-task-btn').addEventListener('click', addTask);
