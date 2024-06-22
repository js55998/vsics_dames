import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };
    return (
        <div>
        <h1>To-Do List</h1>
        <input value={task} onChange={(e) =>{
           console.log(e.target.value)
          setTask(e.target.value)
        }} />
        <button onClick={addTask}>Add</button>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>
    );
};

export default ToDoList
