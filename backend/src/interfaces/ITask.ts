export default interface ITask {
  id?: number;
  task: string;
  taskStatus: string | number;
  createdAt?: string;
  updatedAt?: string;
}
