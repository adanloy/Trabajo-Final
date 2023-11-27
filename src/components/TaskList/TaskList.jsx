import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, onTaskCompleted, onTaskDeleted }) => {
  return (
    <ul>
      <h2>Lista de tareas</h2>  
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskCompleted={onTaskCompleted}
          onTaskDeleted={onTaskDeleted}
        />
      ))}
    </ul>
  );
};

export default TaskList;
