import React, { useContext } from 'react';
import AppContext from '../context/ContextApp';

const TasksTable = () => {
  const {
    tasks,
    search,
    isLoading,
  } = useContext(AppContext);

  if (!isLoading) {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Task Status</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          { tasks && tasks.filter(
            (planet) => planet.task.toLowerCase().includes(search),
          ).map(
            ({
                id, task, taskStatus, createdAt, updatedAt
            }) => (
              <tr key={ id }>
                <td>{id}</td>
                <td>{task}</td>
                <td>{taskStatus}</td>
                <td>{createdAt}</td>
                <td>{updatedAt}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    );
  }
  return <h2>Loading...</h2>;
};

export default TasksTable;
