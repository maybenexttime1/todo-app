const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

// Добавление по Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const text = input.value.trim();
    if (text === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">Удалить</button>
    `;

    // Отметить выполненным
    li.querySelector('span').addEventListener('click', () => {
        li.classList.toggle('done');
    });

    // Удалить задачу
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    list.appendChild(li);
    input.value = '';
    input.focus();
}