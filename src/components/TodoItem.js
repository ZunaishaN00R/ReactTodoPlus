import React from 'react';
const TodoItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className={task.completed ? 'completed' : ''}>{task.content}</span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};
export default TodoItem;