import React from 'react';
import TasksTable from './components/TasksTable';
import TasksManager from './components/TasksManager';

const App = () => {
  return (
    <>
      <header>Tasks List</header>
      <main>
        <TasksManager />
        <TasksTable />
      </main>
    </>
  );
};

export default App;
