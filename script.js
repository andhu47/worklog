let tasks = [];

function addTask() {
  const title = document.getElementById('task-title').value;
  const desc = document.getElementById('task-desc').value;
  const date = document.getElementById('task-date').value;
  const priority = document.getElementById('task-priority').value;

  const task = {
    id: tasks.length + 1,
    title,
    desc,
    date,
    priority,
    status: 'Pending'
  };

  tasks.push(task);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `
      <h3>${task.title} (${task.priority})</h3>
      <p>${task.desc}</p>
      <p>Due: ${task.date}</p>
      <p>Status: ${task.status}</p>
      <button onclick="updateStatus(${task.id}, 'In Progress')">In Progress</button>
      <button onclick="updateStatus(${task.id}, 'Completed')">Completed</button>
    `;
    taskList.appendChild(taskDiv);
  });
}

function updateStatus(id, status) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.status = status;
    renderTasks();
  }
}
