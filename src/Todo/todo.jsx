import React, { useEffect, useState } from 'react';
import TODONavlistLight from '../component/TODONavlistLight';

function Todo({ handleLogout }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', completed: false, important: false },
    { id: 2, title: 'Finish project report', completed: false, important: false },
    { id: 3, title: 'Call the bank', completed: false, important: false },
    { id: 4, title: 'Schedule dentist appointment', completed: false, important: false },
    { id: 5, title: 'Plan weekend trip', completed: false, important: false },
    { id: 6, title: 'Read a book', completed: true, important: false },
    { id: 7, title: 'Clean the house', completed: true, important: false },
    { id: 8, title: 'Prepare presentation', completed: true, important: false },
    { id: 9, title: 'Update blog', completed: true, important: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  useEffect(() => {
    console.log("tasks", tasks);
  }, [tasks]);

  const addTask = () => {
    console.log("newTask", newTask);
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: newTask,
          completed: false,
          important: false,
        },
      ]);
      setNewTask('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <TODONavlistLight 
      handleLogout={handleLogout}
      setNewTask={handleTaskChange}
      addTask={addTask}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask} // Pass deleteTask function
      tasks={tasks}
      pendingTasks={pendingTasks} 
      completedTasks={completedTasks}
      toggleImportant={toggleImportant}
    />
  );
}

export default Todo;
