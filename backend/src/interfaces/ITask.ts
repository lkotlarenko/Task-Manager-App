export default interface ITask {
  id?: number | string;
  task: string;
  taskStatus: string | number;
  createdAt?: string;
  updatedAt?: string;
}
