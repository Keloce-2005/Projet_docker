const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/todos', async (req, res) => {
  const result = await db.query('SELECT * FROM todos');
  res.json(result.rows);
});

app.post('/api/todos', async (req, res) => {
  const { task } = req.body;
  const result = await db.query('INSERT INTO todos(task) VALUES($1) RETURNING *', [task]);
  res.json(result.rows[0]);
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
