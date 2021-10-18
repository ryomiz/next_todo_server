import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Uncompleted } from './entities/uncompleted.entity';

@Injectable()
export class UncompletedService {
  constructor(
    @InjectRepository(Uncompleted)
    private readonly UncompletedRepository: Repository<Uncompleted>,
  ) {}

  getAllUncompleted() {
    return this.UncompletedRepository.find();
  }

  createUncompleted(createUncompletedDto) {
    return this.UncompletedRepository.save(createUncompletedDto);
  }

  async updateUncompleted(id, updateUncompletedDto) {
    const task = await this.UncompletedRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('タスクが見つかりませんでした');
    }
    const updated = {
      ...updateUncompletedDto,
      id: task.id,
    };
    await this.UncompletedRepository.save(updated);
    return;
  }

  async deleteUncompleted(id: string) {
    const task = await this.UncompletedRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('タスクが見つかりませんでした');
    }
    await this.UncompletedRepository.remove(task);
    return;
  }
}
