import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  getAllTasks() {
    return this.taskRepository.find();
  }

  createTask(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }

  async updateTask(id: string, updateTaskdto: UpdateTaskDto) {
    const target = await this.taskRepository.findOne(id);
    if (!target) {
      throw new NotFoundException('タスクが見つかりませんでした');
    }
    return this.taskRepository.update(id, updateTaskdto);
  }

  async deleteTask(id: string) {
    const task = await this.taskRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('タスクが見つかりませんでした');
    }
    return this.taskRepository.remove(task);
  }
}
