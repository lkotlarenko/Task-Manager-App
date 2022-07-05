import React from 'react';
import TasksTable from './components/TasksTable';

const App = () => {
  return (
    <>
      <header>Tasks List</header>
      <main>
        <TasksTable />
      </main>
    </>
  );
};

export default App;
