import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uncompleted } from './entities/uncompleted.entity';
import { UncompletedController } from './uncompleted.controller';
import { UncompletedService } from './uncompleted.service';

@Module({
  imports: [TypeOrmModule.forFeature([Uncompleted])],
  providers: [UncompletedService],
  controllers: [UncompletedController],
})
export class UncompletedModule {}
