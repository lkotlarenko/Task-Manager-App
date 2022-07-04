import ITask from '../interfaces/ITask';
import taskModel from '../models/taskModel';

const getAll = async (): Promise<ITask[]> => {
  const tasks = await taskModel.getAll();
  return tasks;
};

export default {
  getAll,
};
