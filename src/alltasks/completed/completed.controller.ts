import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CompletedService } from './completed.service';

@Controller('v1/completed')
export class CompletedController {
  constructor(private readonly completedService: CompletedService) {}

  @Get()
  getAllUncompleted() {
    return this.completedService.getAllCompleted();
  }

  @Delete()
  deleteUncompleted(@Param() id: string) {
    return this.completedService.deleteCompleted(id);
  }
}
