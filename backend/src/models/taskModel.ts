import { ResultSetHeader } from 'mysql2';
import ITask from '../interfaces/ITask';
import connection from './connection';
import { StatusCodes as httpCode } from 'http-status-codes';

const getAll = async (): Promise<ITask[]> => {
  const query = `SELECT tas.id, tas.task, sta.type AS taskStatus, tas.createdAt, tas.updatedAt
  FROM TasksDB.Tasks AS tas, TasksDB.StatusTypes AS sta
  WHERE sta.id = tas.taskStatus
  ORDER BY tas.id`;
  const [allTask] = await connection.execute(query);
  return allTask as ITask[];
};

const newTask = async (data: ITask): Promise<ITask> => {
  const { task, taskStatus } = data;
  const query = 'INSERT INTO TasksDB.Tasks (task, taskStatus) VALUES(?, ?)';
  const [createdTask] = await connection.execute<ResultSetHeader>(query, [
    task,
    taskStatus,
  ]);
  const { insertId: id } = createdTask;
  const newTask = { id, task, taskStatus };
  return newTask;
};

const editTask = async (data: ITask): Promise<ITask> => {
  const { id, task, taskStatus } = data;
  const query =
    'UPDATE TasksDB.Tasks SET task = ?, taskStatus = ? WHERE (id = ?)';
  await connection.execute<ResultSetHeader>(query, [task, taskStatus, id]);
  const newTask = { id, task, taskStatus };
  return newTask;
};

const removeTask = async (id: string | number): Promise<void> => {
  const query = 'DELETE FROM TasksDB.Tasks WHERE id = ?';
  await connection.execute<ResultSetHeader>(query, [id]);
};

const checkById = async (id: string | number): Promise<void> => {
  const query = 'SELECT task FROM TasksDB.Tasks WHERE id = ?';
  const [check]: any[] = await connection.execute(query, [id]);
  if (check.length === 0) {
    throw { status: httpCode.BAD_REQUEST, message: 'invalid id' };
  }
};

export default {
  getAll,
  newTask,
  editTask,
  removeTask,
  checkById,
};
