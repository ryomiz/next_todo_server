export type AllTasks = {
  uncompleted: Array<Task>;
  completed: Array<Task>;
  discarded: Array<Task>;
};

export type Task = {
  id: string;
  duration: string;
  todo: string;
  createdAt: Date;
  createdBy: string;
};
