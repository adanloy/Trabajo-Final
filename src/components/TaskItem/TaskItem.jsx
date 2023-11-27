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
      <li className="task-item" style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        <span className="task-content">{task.name}</span>
        <div className="button-container">
          <button className="complete-button" onClick={handleComplete}>Completada</button>
          <button className="delete-button" onClick={handleDelete}>Borrar</button>
        </div>
      </li>
    );
  };
  
  export default TaskItem;
  

