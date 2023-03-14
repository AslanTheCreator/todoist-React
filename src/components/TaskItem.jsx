import React from 'react';
import { useState } from 'react';

function TaskItem({ tasks, index, changeInput, remove }) {
  const [disabled, setDisabled] = useState(true);

  const change = (e) => {
    changeInput(e.target.value, index, tasks.id);
  };
  return (
    <div className="flex p-4 rounded-2xl bg-slate-900">
      <input
        className="bg-inherit appearance-none outline-none rounded-none font-bold flex-1"
        value={tasks.body}
        onChange={change}
        disabled={disabled}
      />
      <div className="flex gap-2">
        <button
          className=" text-pink-500 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent uppercase text-xl"
          onClick={() => setDisabled(!disabled)}>
          {disabled ? 'edit' : 'save'}
        </button>
        <button className="text-red-600 uppercase text-xl" onClick={() => remove(tasks)}>
          delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
