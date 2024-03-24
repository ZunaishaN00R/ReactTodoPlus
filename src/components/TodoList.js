// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onToggle, onDelete, filterCompleted }) => {
  const filteredTasks = filterCompleted
    ? tasks.filter((task) => task.completed)
    : tasks;

  return (
    <ul className="todo-list">
      {filteredTasks.map((task) => (
        <TodoItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
