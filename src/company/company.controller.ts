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
import { CompanyDto } from './dto/company.dto';
import { ServiceModel } from '../service/service.model';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @HttpCode(201)
  @Post()
  async create(@Body() dto: CompanyDto): Promise<void> {
    return this.companyService.create(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<void> {
    return this.companyService.get(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.companyService.delete(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: CompanyDto): Promise<void> {
    return this.companyService.patch(id, dto);
  }

  @Get(':id/serviceId/:serviceId')
  async find(
    @Param()
    dto: {
      id: string;
      serviceId: string | null;
    },
  ): Promise<ServiceModel[]> {
    return this.companyService.find(dto);
  }
}
