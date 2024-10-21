const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];

// Endpoint to add a task
app.post('/api/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).send(task);
});

// Endpoint to get all tasks
app.get('/api/tasks', (req, res) => {
  res.send(tasks);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
