import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscardedController } from './discarded.controller';
import { DiscardedService } from './discarded.service';
import { Discarded } from './entities/discarded.entity';

@Module({
  exports: [DiscardedService],
  imports: [TypeOrmModule.forFeature([Discarded])],
  providers: [DiscardedService],
  controllers: [DiscardedController],
})
export class DiscardedModule {}
