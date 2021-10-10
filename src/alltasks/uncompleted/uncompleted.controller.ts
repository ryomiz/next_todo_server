import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUncompletedDto } from './dto/create-uncompleted.dto';
import { UncompletedService } from './uncompleted.service';

@Controller('v1/uncompleted')
export class UncompletedController {
  constructor(private readonly uncompletedService: UncompletedService) {}

  @Get()
  getAllUncompleted() {
    return this.uncompletedService.getAllUncompleted();
  }

  @Post()
  createUncompleted(@Body() createUncompletedDto: CreateUncompletedDto) {
    return this.uncompletedService.createUncompleted(createUncompletedDto);
  }

  @Delete()
  deleteUncompleted(@Param() id: string) {
    return this.uncompletedService.deleteUncompleted(id);
  }
}
