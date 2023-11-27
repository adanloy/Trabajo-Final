import React, { useState } from 'react';

const TaskItem = ({ task, onTaskCompleted, onTaskDeleted }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskCompleted(task.id);
  };

  const handleDelete = () => {
    onTaskDeleted(task.id);
  };

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {task.name}
      <button onClick={handleComplete}>Completada</button>
      <button onClick={handleDelete}>Borrar</button>
    </li>
  );
};

export default TaskItem;