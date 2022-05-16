import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from './company.model';
import { CompanyDto } from './dto/company.dto';
import { Service, ServiceDocument } from '../service/service.model';
import { FindCompanyDto } from './dto/find-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private companyDocumentModel: Model<CompanyDocument>,
    @InjectModel(Service.name)
    private serviceDocumentModel: Model<ServiceDocument>,
  ) {}

  async create(data: CompanyDto) {
    const services: string[] = data.services?.length
      ? (await this.serviceDocumentModel.insertMany(data.services)).map(
          (data) => data._id,
        )
      : [];

    return this.companyDocumentModel.create({ ...data, services });
  }
  async get(id: string) {
    return this.companyDocumentModel
      .findOne({ id })
      .populate('services')
      .exec();
  }
  async delete(id: string) {
    return this.companyDocumentModel.findByIdAndDelete(id);
  }
  async patch(id: string, data: CompanyDto) {
    return this.companyDocumentModel.findByIdAndUpdate(id, data);
  }
  async find(filter: FindCompanyDto): Promise<Company[]> {
    return this.companyDocumentModel
      .find({ filter })
      .populate('services')
      .exec();
  }
}
