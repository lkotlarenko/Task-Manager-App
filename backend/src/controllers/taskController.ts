import { Request, Response, NextFunction } from 'express';
import { StatusCodes as httpCode } from 'http-status-codes';
import ITask from '../interfaces/ITask';
import taskService from '../services/taskService';

const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await taskService.getAll();
    return res.status(httpCode.OK).json(tasks);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const newTask = async (req: Request, res: Response, next: NextFunction) => {
  const { task, taskStatus }: ITask = req.body;
  const taskData = { task, taskStatus };
  try {
    const createdTask = await taskService.newTask(taskData);
    return res.status(httpCode.CREATED).json(createdTask);
  } catch (err) {
    next(err);
  }
};

const editTask = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { task, taskStatus }: ITask = req.body;
  const taskData = { id, task, taskStatus };
  try {
    const updatedTask = await taskService.editTask(taskData);
    return res.status(httpCode.OK).json(updatedTask);
  } catch (err) {
    next(err);
  }
};

const removeTask = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;
  try {
    await taskService.removeTask(id);
    return res.status(httpCode.OK).json({message: 'Task removed'});
  } catch (err) {
    next(err);
  }
};

export default {
  getAll,
  newTask,
  editTask,
  removeTask,
};
