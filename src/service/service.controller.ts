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
import { Service } from './service.model';
import { ServiceDto } from './dto/service.dto';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post(':id')
  @HttpCode(200)
  async find(@Body() dto: FindServiceDto): Promise<Service[]> {
    return this.serviceService.getServices(dto);
  }

  @HttpCode(201)
  @Post()
  async create(@Body() dto: ServiceDto): Promise<Service | null> {
    return this.serviceService.createService(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Service | null> {
    return this.serviceService.getById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Service | null> {
    return this.serviceService.delete(id);
  }

  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() dto: ServiceDto,
  ): Promise<Service | null> {
    return this.serviceService.updateById(id, dto);
  }
}
