import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompletedController } from './completed.controller';
import { CompletedService } from './completed.service';
import { Completed } from './entities/completed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Completed])],
  providers: [CompletedService],
  controllers: [CompletedController],
})
export class CompletedModule {}
