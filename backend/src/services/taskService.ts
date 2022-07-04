import ITask from '../interfaces/ITask';
import taskModel from '../models/taskModel';

const getAll = async (): Promise<ITask[]> => {
  const tasks = await taskModel.getAll();
  return tasks;
};

const newTask = async (data: ITask): Promise<ITask> => {
  const addTask = await taskModel.newTask(data);
  return addTask;
}

export default {
  getAll,
  newTask,
};
