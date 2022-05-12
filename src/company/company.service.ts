import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyDocument, CompanyModel } from './company.model';
import { CompanyDto } from './dto/company.dto';

@Injectable()
export class CompanyService {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(CompanyModel.name)
    private authDocumentModel: Model<CompanyDocument>,
  ) {}

  async create(data: CompanyDto) {
    return;
  }
  async get(id: string) {
    return;
  }
  async delete(id: string) {
    return;
  }
  async patch(id: string, data: CompanyDto) {
    return;
  }
  async find(data: { id: string; serviceId: string | null }) {
    return [];
  }
}
