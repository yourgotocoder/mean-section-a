export type TodoStatus = 'pending' | 'on-going' | 'done';

export default interface Todo {
  title: string;
  status: TodoStatus;
  date: Date;
}
