const express = require('express');

const app = express();
app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = {
    id: tasks.length + 1,
    title: req.body.title
  };

  tasks.push(task);
  res.status(201).json(task);
});

if (require.main === module) {
  app.listen(5001, () => console.log('Backend running on port 5001'));
}

module.exports = app;