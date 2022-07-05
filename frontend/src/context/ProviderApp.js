import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextApp from './ContextApp';
import { getAll } from '../api/taskAPI';

function ProviderApp({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const [search, setSearch] = useState('');
  const context = {
    tasks,
    setTasks,
    isLoading,
    setLoading,
    search,
    setSearch,
  };

  useEffect(() => {
    const fetchTasks = async () => {
      await getAll(setTasks, setLoading);
    };
    fetchTasks();
  }, [setLoading, setTasks]);
  
  return (
    <ContextApp.Provider value={ context }>
      { children }
    </ContextApp.Provider>
  );
}

ProviderApp.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default ProviderApp;

