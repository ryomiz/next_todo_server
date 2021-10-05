import { Injectable } from '@nestjs/common';

import type { Task } from '../types';

@Injectable()
export class TaskService {
  getAllTasks(): Array<Task> {
    return [
      {
        duration: '11/1 - 11/30',
        todo: 'TASK1',
        state: 'uncompleted',
      },
      {
        duration: '11/1 - 11/30',
        todo: 'Task2',
        state: 'uncompleted',
      },
      {
        duration: '11/1 - 11/30',
        todo: 'TASK3',
        state: 'completed',
      },
      {
        duration: '11/1 - 11/30',
        todo: 'Task4',
        state: 'completed',
      },
      {
        duration: '11/1 - 11/30',
        todo: 'TASK5',
        state: 'discarded',
      },
      {
        duration: '11/1 - 11/30',
        todo: 'Task6',
        state: 'discarded',
      },
    ];
  }
}
