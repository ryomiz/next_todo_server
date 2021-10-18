import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiscardedDto } from './dto/create-discarded.dto';
import { Discarded } from './entities/discarded.entity';

@Injectable()
export class DiscardedService {
  constructor(
    @InjectRepository(Discarded)
    private readonly discardedRepository: Repository<Discarded>,
  ) {}

  getAllDiscarded() {
    return this.discardedRepository.find();
  }

  createDiscarded(createDiscardedDto: CreateDiscardedDto) {
    return this.discardedRepository.save(createDiscardedDto);
  }

  async deleteDiscarded(id: string) {
    const task = await this.discardedRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('タスクが見つかりませんでした');
    }
    await this.discardedRepository.remove(task);
    return;
  }
}
