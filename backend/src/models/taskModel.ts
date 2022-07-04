import { ResultSetHeader } from 'mysql2';
import ITask from '../interfaces/ITask';
import connection from './connection';

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
  const [createdTask] = await connection.execute<ResultSetHeader>(query, [task, taskStatus]);
  const { insertId: id } = createdTask;
  const newTask = { id, task, taskStatus };
  return newTask;
}

export default {
  getAll,
  newTask,
};
