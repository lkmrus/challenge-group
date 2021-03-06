import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CompanyDto } from './dto/company.dto';
import { CompanyService } from './company.service';
import { Company } from './company.model';
import { FindCompanyDto } from './dto/find-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @HttpCode(201)
  @Post()
  async create(@Body() dto: CompanyDto): Promise<Company | null> {
    return this.companyService.create(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Company | null> {
    return this.companyService.get(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Company | null> {
    return this.companyService.delete(id);
  }

  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() dto: CompanyDto,
  ): Promise<Company | null> {
    return this.companyService.patch(id, dto);
  }

  @Get()
  async find(
    @Query()
    dto: FindCompanyDto,
  ): Promise<Company[]> {
    return this.companyService.find(dto);
  }
}
