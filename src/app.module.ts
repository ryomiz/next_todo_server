import { Module } from '@nestjs/common';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
