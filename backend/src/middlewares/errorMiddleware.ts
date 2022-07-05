import { Request, Response, NextFunction } from 'express';
import { StatusCodes as httpCode } from 'http-status-codes';
import IError from '../interfaces/IError';

const errorMiddleware = (
  { status, message }: IError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (status) return res.status(status).json({ message });
  return res
    .status(httpCode.INTERNAL_SERVER_ERROR)
    .json({ message: 'Internal Server Error' });
};

export default errorMiddleware;
