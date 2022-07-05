const TASKS_ENDPOINT = 'http://localhost:3001/tasks';

const getAll = async (dispatchTasks, dispatchLoading) => {
  dispatchLoading(true);
  try {
    const response = await fetch(TASKS_ENDPOINT);
    const data = await response.json();
    dispatchTasks(data);
    dispatchLoading(false);
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getAll };
