document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', toggleTaskCompletion);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        taskItem.appendChild(deleteButton);

        taskInput.value = '';
    }

    function toggleTaskCompletion(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        } else if (event.target.className === 'delete-button') {
            const taskItem = event.target.parentElement;
            taskList.removeChild(taskItem);
        }
    }
});
