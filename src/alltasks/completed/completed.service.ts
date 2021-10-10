import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUncompletedDto } from '../uncompleted/dto/create-uncompleted.dto';
import { Completed } from './entities/completed.entity';

@Injectable()
export class CompletedService {
  constructor(
    @InjectRepository(Completed)
    private readonly completedRepository: Repository<Completed>,
  ) {}

  getAllCompleted() {
    return this.completedRepository.find();
  }

  createCompleted(createCompletedDto: CreateUncompletedDto) {
    return this.completedRepository.save(createCompletedDto);
  }

  async deleteCompleted(id: string) {
    const task = await this.completedRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('タスクが見つかりませんでした');
    }
    return this.completedRepository.remove(task);
  }
}
