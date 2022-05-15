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
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post(':id')
  @HttpCode(200)
  async find(@Body() dto: FindServiceDto): Promise<ServiceModel[]> {
    return this.serviceService.find(dto);
  }

  @HttpCode(201)
  @Post()
  async create(@Body() dto: ServiceDto): Promise<ServiceModel | null> {
    return this.serviceService.create(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<ServiceModel | null> {
    return this.serviceService.get(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ServiceModel | null> {
    return this.serviceService.delete(id);
  }

  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() dto: ServiceDto,
  ): Promise<ServiceModel | null> {
    return this.serviceService.patch(id, dto);
  }
}
