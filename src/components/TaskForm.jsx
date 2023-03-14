import React, { useState } from 'react';

export const TaskForm = ({ add }) => {
  const [task, setTask] = useState({ body: '' });

  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      ...task,
      id: Date.now(),
    };
    if (task.body === '') {
      alert('Задача пустая!');
    } else {
      add(newTask);
    }
    setTask({ body: '' });
  };

  return (
    <form className="flex">
      <input
        className="appearance-none outline-none rounded-2xl p-4 bg-slate-800 flex-1 mr-4 font-bold text-xl"
        placeholder="What do u have planned?"
        value={task.body}
        onChange={(e) => setTask({ ...task, body: e.target.value })}
      />
      <button
        className="text-xl font-bold text-pink-500 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        onClick={addNewTask}>
        Add task
      </button>
    </form>
  );
};
