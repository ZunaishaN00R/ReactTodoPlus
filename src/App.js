// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css'; 
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, content: 'Zunaisha Noor', completed: false },
    { id: 2, content: 'Biet-f21-049', completed: false },
    { id: 3, content: 'Superior University', completed: false },
  ]);
  const handleToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  const handleAddTask = (newTaskContent) => {
    const newTask = {
      id: tasks.length + 1,
      content: newTaskContent,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  return (
    <div>
      <Header title="Zunaisha Noor App" />
      <TodoList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
      <input
        type="text"
        placeholder="Add a new task..."
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleAddTask(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};
export default App;