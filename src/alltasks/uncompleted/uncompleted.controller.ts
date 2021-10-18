import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
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
  @HttpCode(200)
  getAllUncompleted() {
    return this.uncompletedService.getAllUncompleted();
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(201)
  createUncompleted(@Body() createUncompletedDto: CreateUncompletedDto) {
    return this.uncompletedService.createUncompleted(createUncompletedDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @HttpCode(204)
  updateUncompleted(
    @Param() id: string,
    @Body() updateUncompletedDto: CreateUncompletedDto,
  ) {
    return this.uncompletedService.updateUncompleted(id, updateUncompletedDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(204)
  deleteUncompleted(@Param() id: string) {
    return this.uncompletedService.deleteUncompleted(id);
  }
}
