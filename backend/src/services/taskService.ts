import ITask from '../interfaces/ITask';
import taskModel from '../models/taskModel';

const getAll = async (): Promise<ITask[]> => {
  const tasks = await taskModel.getAll();
  return tasks;
};

const newTask = async (data: ITask): Promise<ITask> => {
  const addTask = await taskModel.newTask(data);
  return addTask;
};

const editTask = async (data: ITask): Promise<ITask> => {
  const updatedTask = await taskModel.editTask(data);
  return updatedTask;
};

const removeTask = async (id: string | number): Promise<void> => {
  await taskModel.checkById(id);
  await taskModel.removeTask(id);
};

export default {
  getAll,
  newTask,
  editTask,
  removeTask,
};
