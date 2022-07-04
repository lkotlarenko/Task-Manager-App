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

export default {
  getAll,
};
