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
import { CreateUncompletedDto } from './dto/create-uncompleted.dto';
import { UncompletedService } from './uncompleted.service';

@Controller('v1/uncompleted')
export class UncompletedController {
  constructor(private readonly uncompletedService: UncompletedService) {}

  @Get()
  getAllUncompleted() {
    return this.uncompletedService.getAllUncompleted();
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  createUncompleted(@Body() createUncompletedDto: CreateUncompletedDto) {
    return this.uncompletedService.createUncompleted(createUncompletedDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteUncompleted(@Param() id: string) {
    return this.uncompletedService.deleteUncompleted(id);
  }
}
