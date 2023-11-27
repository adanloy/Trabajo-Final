import "./App.css";
import React from 'react';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';
import useTaskData from "./components/TaskData/TaskData";

function App() {
  const { tasks, setTasks } = useTaskData();

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskCompleted = (taskId) => {
    setTasks(tasks.map((t) => (t.id === taskId ? { ...t, completed: true } : t)));
  };

  const handleTaskDeleted = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <>
      <h1>Organizador de tareas</h1>
      <TaskForm onTaskAdded={handleAddTask} />
      <TaskList
        tasks={tasks}
        onTaskCompleted={handleTaskCompleted}
        onTaskDeleted={handleTaskDeleted}
      />
    </>
  );
}

export default App;
