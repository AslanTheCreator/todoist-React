import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, changeInput, remove }) {
  return (
    <div className="flex flex-col gap-7">
      {tasks.map((task, index) => (
        <TaskItem
          remove={remove}
          key={task.id}
          tasks={task}
          index={index}
          changeInput={changeInput}
        />
      ))}
    </div>
  );
}

export default TaskList;
