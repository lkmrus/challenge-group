import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CompanyDocument, CompanyModel } from './company.model';
import { CompanyDto } from './dto/company.dto';
import { FindCompanyDto } from './dto/find-company.dto';
import { ServiceModel } from '../service/service.model';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(CompanyModel.name)
    private companyDocumentModel: Model<CompanyDocument>,
  ) {}

  async create(data: CompanyDto) {
    return this.companyDocumentModel.create(data);
  }
  async get(id: string) {
    return this.companyDocumentModel.findById(id);
  }
  async delete(id: string) {
    return this.companyDocumentModel.findByIdAndDelete(id);
  }
  async patch(id: string, data: CompanyDto) {
    return this.companyDocumentModel.findByIdAndUpdate(id, data);
  }
  async find(data: FindCompanyDto) {
    const query: {
      _id?: Types.ObjectId;
    } = {};

    data.id && (query._id = new Types.ObjectId(data.id));

    return this.companyDocumentModel
      .find(query)
      .populate('services', null, ServiceModel.name)
      .exec();
  }
}
