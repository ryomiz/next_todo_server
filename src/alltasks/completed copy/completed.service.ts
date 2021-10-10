import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiscardedDto } from '../discarded/dto/create-discarded.dto';
import { Discarded } from '../discarded/entities/discarded.entity';

@Injectable()
export class CompletedService {
  constructor(
    @InjectRepository(Discarded)
    private readonly discardedRepository: Repository<Discarded>,
  ) {}

  getAllCompleted() {
    return this.discardedRepository.find();
  }

  createCompleted(createDiscardedDto: CreateDiscardedDto) {
    return this.discardedRepository.save(createDiscardedDto);
  }

  async deleteCompleted(id: string) {
    const task = await this.discardedRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('タスクが見つかりませんでした');
    }
    return this.discardedRepository.remove(task);
  }
}
