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
import { CompletedService } from './completed.service';
import { CreateCompletedDto } from './dto/create-completed.dto';

@Controller('v1/completed')
export class CompletedController {
  constructor(private readonly completedService: CompletedService) {}

  @Get()
  @HttpCode(200)
  getAllCompleted() {
    return this.completedService.getAllCompleted();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(201)
  createCompleted(@Body() createCompletedDto: CreateCompletedDto) {
    return this.completedService.createCompleted(createCompletedDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(204)
  deleteCompleted(@Param() id: string) {
    return this.completedService.deleteCompleted(id);
  }
}
