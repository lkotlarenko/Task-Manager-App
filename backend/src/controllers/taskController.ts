import { Request, Response, NextFunction } from 'express';
import { StatusCodes as httpCode } from 'http-status-codes';
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

export default {
  getAll,
};
