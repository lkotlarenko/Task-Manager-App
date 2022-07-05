import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextApp from './ContextApp';
import { getAll } from '../api/taskAPI';

function ProviderApp({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [newTaskValue, setNewTaskValue] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState(1);
  const [needRefresh, setNeedRefresh] = useState(false);

  const context = {
    tasks,
    setTasks,
    isLoading,
    setLoading,
    search,
    setSearch,
    newTaskValue,
    setNewTaskValue,
    newTaskStatus,
    setNewTaskStatus,
    needRefresh,
    setNeedRefresh,
  };

  const fetchTasks = async () => {
    await getAll(setTasks, setLoading);
    setNeedRefresh(false);
  };

  useEffect(() => {
    fetchTasks();
  }, [setLoading, setTasks]);

  useEffect(() => {
    fetchTasks();
  }, [needRefresh]);

  return <ContextApp.Provider value={context}>{children}</ContextApp.Provider>;
}

ProviderApp.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default ProviderApp;
