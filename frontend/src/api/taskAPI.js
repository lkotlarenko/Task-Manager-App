const URL_ENDPOINT = process.env.BACKEND_ENDPOINT || 'http://localhost:3001';
const TASKS_ENDPOINT = `${URL_ENDPOINT}/tasks`;
const NEW_TASKS_ENDPOINT = `${URL_ENDPOINT}/create`;

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

const addNewTask = async (data, dispatchRefresh) => {
  try {
    const jsonData = JSON.stringify(data);
    await fetch(NEW_TASKS_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: jsonData,
    });
    dispatchRefresh(true);
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getAll, addNewTask };
