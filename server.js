const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'tasks.json');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Initialize tasks.json if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// Helpers
const getTasks = () => JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const saveTasks = (tasks) => fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));

// API Routes
app.get('/api/tasks', (req, res) => {
    res.json(getTasks());
});

app.post('/api/tasks', (req, res) => {
    const tasks = getTasks();
    const newTask = { ...req.body, id: Date.now().toString() };
    tasks.push(newTask);
    saveTasks(tasks);
    res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
    const tasks = getTasks();
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...req.body, id: req.params.id };
        saveTasks(tasks);
        res.json(tasks[index]);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

app.delete('/api/tasks/:id', (req, res) => {
    let tasks = getTasks();
    const initialLength = tasks.length;
    tasks = tasks.filter(t => t.id !== req.params.id);
    if (tasks.length < initialLength) {
        saveTasks(tasks);
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

// Serve the frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'demo.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
