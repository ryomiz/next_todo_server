import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DiscardedService } from './discarded.service';
import { CreateDiscardedDto } from './dto/create-discarded.dto';

@Controller('v1/discarded')
export class DiscardedController {
  constructor(private readonly discardedService: DiscardedService) {}

  @Get()
  getAllUnDiscarded() {
    return this.discardedService.getAllDiscarded();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createUnDiscarded(@Body() createDiscardedDto: CreateDiscardedDto) {
    return this.discardedService.createDiscarded(createDiscardedDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteUnDiscarded(@Param() id: string) {
    return this.discardedService.deleteDiscarded(id);
  }
}
