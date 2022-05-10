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
import { CompanyModel } from './company.model';
import { CompanyDto } from './dto/company.dto';
import { ServiceModel } from '../service/service.model';

@Controller('company')
export class CompanyController {
  @HttpCode(201)
  @Post()
  async create(@Body() dto: Omit<CompanyModel, '_id'>): Promise<void> {
    return;
  }

  @Get(':id')
  async get(@Param('id') id: Pick<CompanyModel, '_id'>): Promise<void> {
    return;
  }

  @Delete(':id')
  async delete(@Param('id') id: Pick<CompanyModel, '_id'>): Promise<void> {
    return;
  }

  @Patch(':id')
  async patch(
    @Param('id') id: Pick<CompanyModel, '_id'>,
    @Body() dto: CompanyDto,
  ): Promise<void> {
    return;
  }

  @Get(':id/serviceId/:serviceId')
  async find(
    @Param()
    dto: {
      id: Pick<CompanyModel, '_id'>;
      serviceId: Pick<ServiceModel, '_id'>;
    },
  ): Promise<ServiceModel[]> {
    return [];
  }
}
