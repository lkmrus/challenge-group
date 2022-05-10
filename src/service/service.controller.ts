import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FindServiceDto } from './dto/find-service.dto';
import { ServiceModel } from './service.model';
import { ServiceDto } from './dto/service.dto';

@Controller('service')
export class ServiceController {
  @Post(':id')
  @HttpCode(200)
  async find(@Body() dto: FindServiceDto): Promise<ServiceModel[]> {
    return [];
  }

  @HttpCode(201)
  @Post()
  async create(@Body() dto: Omit<ServiceModel, '_id'>): Promise<ServiceModel> {
    return;
  }

  @Get(':id')
  async get(@Param('id') id: Pick<ServiceModel, '_id'>): Promise<ServiceModel> {
    return;
  }

  @Delete(':id')
  async delete(
    @Param('id') id: Pick<ServiceModel, '_id'>,
  ): Promise<ServiceModel> {
    return;
  }

  @Patch(':id')
  async patch(
    @Param('id') id: Pick<ServiceModel, '_id'>,
    @Body() dto: ServiceDto,
  ): Promise<ServiceModel> {
    return;
  }
}
