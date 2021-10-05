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

  async completeTask(id: string) {
    const task = await this.taskRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('タスクが見つかりませんでした');
    }
    task.state = 'completed';
    return this.taskRepository.save(task);
  }

  async revertTask(id: string) {
    const task = await this.taskRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('タスクが見つかりませんでした');
    }
    task.state = 'uncompleted';
    return this.taskRepository.save(task);
  }

  async discardTask(id: string) {
    const task = await this.taskRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('タスクが見つかりませんでした');
    }
    task.state = 'discarded';
    return this.taskRepository.save(task);
  }

  async updateTask(id: string, updateTaskdto: UpdateTaskDto) {
    const task = await this.taskRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('タスクが見つかりませんでした');
    }
    return this.taskRepository.update(id, updateTaskdto);
  }
}
