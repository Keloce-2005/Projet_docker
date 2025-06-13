import React, { useEffect, useState } from 'react';
import './style.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
  fetch('http://localhost:5000/api/todos')
    .then(res => res.json())
    .then(setTodos);
}, []);

const addTodo = async () => {
  const res = await fetch('http://localhost:5000/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task })
  });
  const newTodo = await res.json();
  setTodos([...todos, newTodo]);
  setTask('');
};

  return (
    <div className="container">
      <h1>My To-Do List</h1>
      <input value={task} onChange={e => setTask(e.target.value)} placeholder="New task" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
