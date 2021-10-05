import { Controller, Get } from '@nestjs/common';

import type { Task } from '../types';
import { TaskService } from './task.service';

@Controller('v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks(): Array<Task> {
    return this.taskService.getAllTasks();
  }
}
