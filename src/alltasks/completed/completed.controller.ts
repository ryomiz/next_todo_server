import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CompletedService } from './completed.service';
import { CreateCompletedDto } from './dto/create-completed.dto';

@Controller('v1/completed')
export class CompletedController {
  constructor(private readonly completedService: CompletedService) {}

  @Get()
  getAllCompleted() {
    return this.completedService.getAllCompleted();
  }

  @Post()
  createCompleted(@Body() createCompletedDto: CreateCompletedDto) {
    return this.completedService.createCompleted(createCompletedDto);
  }

  @Delete(':id')
  deleteCompleted(@Param() id: string) {
    return this.completedService.deleteCompleted(id);
  }
}
