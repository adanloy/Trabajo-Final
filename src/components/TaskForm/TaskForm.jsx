import React, { useState } from 'react';

const TaskForm = ({ onTaskAdded }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() !== '') {
      const newTask = {
        id: Math.random().toString(36).substring(7),
        name: taskName,
        completed: false,
      };

      onTaskAdded(newTask);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escriba una tarea"
        value={taskName}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;