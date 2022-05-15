import { Injectable } from '@nestjs/common';
import { ServiceDocument, ServiceModel } from './service.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FindServiceDto } from './dto/find-service.dto';
import { ServiceDto } from './dto/service.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel(ServiceModel.name)
    private readonly serviceModel: Model<ServiceDocument>,
  ) {}

  async find({ limit, company }: FindServiceDto): Promise<ServiceModel[]> {
    return this.serviceModel.find({ company }).limit(limit);
  }
  async create({
    companyId,
    title,
    description,
  }: ServiceDto): Promise<ServiceModel> {
    const _companyId = new Types.ObjectId(companyId);
    return this.serviceModel.create({
      title,
      description,
      _companyId,
    });
  }
  async get(id: string): Promise<ServiceModel | null> {
    return this.serviceModel.findById(id);
  }
  async delete(id: string): Promise<ServiceModel | null> {
    return this.serviceModel.findByIdAndDelete(id);
  }
  async patch(id: string, data: ServiceDto): Promise<ServiceModel | null> {
    return this.serviceModel.findByIdAndUpdate(id, data);
  }
}
