import { useState } from 'react';
import { TaskForm } from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const changeInput = (value, index, id) => {
    setTasks([...tasks.slice(0, index), { id, body: value }, ...tasks.slice(index + 1)]);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className="max-w-4xl mx-auto pr-5 pl-5">
      <h1 className="text-5xl mt-8 mb-8 text-black font-bold">todoist</h1>
      <TaskForm add={addTask} />
      <h2 className="text-4xl text-black font-bold mb-8 mt-8">Tasks</h2>
      <div>
        <TaskList remove={removeTask} tasks={tasks} changeInput={changeInput} />
      </div>
    </div>
  );
}

export default App;
