import React, { useContext } from 'react';
import { addNewTask } from '../api/taskAPI';
import AppContext from '../context/ContextApp';

const TasksManager = () => {
  const {
    newTaskStatus,
    setNewTaskStatus,
    newTaskValue,
    setNewTaskValue,
    setNeedRefresh,
  } = useContext(AppContext);

  const handleAddNewTask = () => {
    const data = { task: newTaskValue, taskStatus: newTaskStatus };
    addNewTask(data, setNeedRefresh);
  };

  const types = ['done', 'ongoing', 'pending'];

  return (
    <div>
      <h2>Add new task</h2>

      <label htmlFor="new-task">
        <h3>Task</h3>
        <input
          type="text"
          minLength="2"
          id="new-task"
          data-testid="new-task"
          placeholder="write here"
          value={newTaskValue}
          onChange={(event) => setNewTaskValue(event.target.value)}
        />
      </label>
      <label htmlFor="new-task-status">
        <h3>status</h3>
        <select
          id="new-task-status"
          data-testid="new-task-status"
          onChange={(event) =>
            setNewTaskStatus(types.indexOf(event.target.value) + 1)
          }>
          {types.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={handleAddNewTask}>
        Create Task!
      </button>
    </div>
  );
};

export default TasksManager;
