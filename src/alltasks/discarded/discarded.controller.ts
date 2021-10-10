import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DiscardedService } from './discarded.service';
import { CreateDiscardedDto } from './dto/create-discarded.dto';

@Controller('v1/discarded')
export class DiscardedController {
  constructor(private readonly discardedService: DiscardedService) {}

  @Get()
  getAllUnDiscarded() {
    return this.discardedService.getAllDiscarded();
  }

  @Post()
  createUnDiscarded(@Body() createDiscardedDto: CreateDiscardedDto) {
    return this.discardedService.createDiscarded(createDiscardedDto);
  }

  @Delete(':id')
  deleteUnDiscarded(@Param() id: string) {
    return this.discardedService.deleteDiscarded(id);
  }
}
