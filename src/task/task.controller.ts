import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch('complete/:id')
  completeTask(@Param() id: string) {
    return this.taskService.completeTask(id);
  }

  @Patch('revert/:id')
  revertTask(@Param() id: string) {
    return this.taskService.revertTask(id);
  }

  @Patch('discard/:id')
  discardTask(@Param() id: string) {
    return this.taskService.discardTask(id);
  }

  @Patch(':id')
  updateTask(@Param() id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.updateTask(id, updateTaskDto);
  }
}
