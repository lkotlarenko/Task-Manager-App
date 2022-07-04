import { Request, Response, NextFunction } from 'express';
import { StatusCodes as httpCode } from 'http-status-codes';
import ITask from '../interfaces/ITask';
import taskSchema from '../schemas/taskSchema';

const taskValidator = (req: Request, _res: Response, next: NextFunction) => {
  const { task, taskStatus }: ITask = req.body;
  const { error } = taskSchema.validate({ task, taskStatus });
  if (error) {
    if (error.details[0].type === 'any.required') {
      next({ status: httpCode.BAD_REQUEST, message: error.message });
    }
    next({ status: httpCode.UNPROCESSABLE_ENTITY, message: error.message });
  }
  next();
};

export default taskValidator;
