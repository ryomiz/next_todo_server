import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
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
  @HttpCode(200)
  getAllUnDiscarded() {
    return this.discardedService.getAllDiscarded();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(201)
  createUnDiscarded(@Body() createDiscardedDto: CreateDiscardedDto) {
    return this.discardedService.createDiscarded(createDiscardedDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(204)
  deleteUnDiscarded(@Param() id: string) {
    return this.discardedService.deleteDiscarded(id);
  }
}
